import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <LoginContainer>
      <LoginBox>
        <Title>Login</Title>
        <form>
          <InputLabel>아이디</InputLabel>
          <InputContainer>
            <InputField type="text" placeholder="아이디" />
          </InputContainer>
          <InputLabel>비밀번호</InputLabel>
          <InputContainer>
            <InputField type="password" placeholder="비밀번호" />
          </InputContainer>
          <Button type="submit">로그인</Button>
          <Button type="button">회원가입</Button>
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
