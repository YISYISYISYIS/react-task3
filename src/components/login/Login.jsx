import { useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../constext/AuthProvider";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

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
    // console.log(id);
    // console.log(password);
    // navigate("/");
    try {
      const response = await axios.post(
        "https://moneyfulpublicpolicy.co.kr/login",
        {
          id,
          password,
        }
      );

      const data = response.data;
      if (data.success) {
        login(data);
        navigate("/");
        // console.log(data);
      } else {
        alert("로그인에 실패하였습니다.");
      }
    } catch (error) {
      console.log("login error", error);
      alert("로그인에 실패하였습니다.");
    }
  };

  const handleSignUp = () => {
    navigate("/signup");
  };
  return (
    <LoginContainer>
      <LoginBox>
        <Title>Login</Title>
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
          <Button type="submit">로그인</Button>
          <Button type="button" onClick={handleSignUp}>
            회원가입
          </Button>
        </form>
      </LoginBox>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginBox = styled.div`
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

export default Login;
