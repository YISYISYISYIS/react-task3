import React from "react";
import styled from "styled-components";

const SignUp = () => {
  return (
    <SignUpContainer>
      <SignUpBox>
        <Title>Sign Up</Title>
        <form>
          <InputLabel>아이디</InputLabel>
          <InputContainer>
            <InputField type="text" placeholder="아이디" />
          </InputContainer>
          <InputLabel>비밀번호</InputLabel>
          <InputContainer>
            <InputField type="password" placeholder="비밀번호" />
          </InputContainer>
          <InputLabel>닉네임</InputLabel>
          <InputContainer>
            <InputField type="text" placeholder="닉네임" />
          </InputContainer>
          <Button type="submit">회원가입</Button>
          <Button type="button">로그인</Button>
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
