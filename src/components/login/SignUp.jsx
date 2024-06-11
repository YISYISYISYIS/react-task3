import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    if (id.length < 4 || id.length > 11) {
      alert("아이디는 4~10글자 사이여야 합니다");
      return;
    }
    if (password.length < 4 || password.length > 16) {
      alert("비밀번호는 4~15글자 사이여야 합니다");
      return;
    }
    if (password.length < 1 || password.length > 11) {
      alert("닉네임은 2~10글자 사이여야 합니다");
      return;
    }

    // console.log(id);
    // console.log(password);
    // console.log(nickname);
    // navigate("/");
    try {
      const response = await axios.post(
        "https://moneyfulpublicpolicy.co.kr/register",
        {
          id,
          password,
          nickname,
        }
      );
      const data = response.data;
      if (data.success) {
        alert("회원가입에 성공하였습니다");
        navigate("/login");
      } else {
        alert("회원가입에 실패하였습니다");
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert("이미 사용 중인 아이디입니다");
      } else {
        console.log("SignUp error", error);
        alert("회원가입에 실패하였습니다");
      }
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <SignUpContainer>
      <SignUpBox>
        <Title>Sign Up</Title>
        <form onSubmit={onSubmit}>
          <InputLabel>아이디</InputLabel>
          <InputContainer>
            <InputField
              type="text"
              placeholder="아이디"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </InputContainer>
          <InputLabel>비밀번호</InputLabel>
          <InputContainer>
            <InputField
              type="password"
              placeholder="비밀번호"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContainer>
          <InputLabel>닉네임</InputLabel>
          <InputContainer>
            <InputField
              type="text"
              placeholder="닉네임"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </InputContainer>
          <Button type="submit">회원가입</Button>
          <Button type="button" onClick={handleLogin}>
            로그인
          </Button>
        </form>
      </SignUpBox>
    </SignUpContainer>
  );
};

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SignUpBox = styled.div`
  width: 50%;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;
`;

export default SignUp;
