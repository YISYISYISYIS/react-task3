import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../constext/AuthProvider";
import { useContext } from "react";
const Header = () => {
  const navigation = useNavigate();
  const { isAuthenticated, logout, userInfo } = useContext(AuthContext);
  // console.log(userInfo);
  // console.log(isAuthenticated);

  if (!isAuthenticated) {
    return null;
  }
  const handleLogout = () => {
    logout();
    navigation("/login");
  };

  return (
    // isAuthenticated && (
    <StyledHeader>
      <Logo>
        <Link to="/">Logo</Link>
        <Link to="/mypage">프로필 수정하기</Link>
      </Logo>
      <AuthButtons>
        {userInfo && <ProfileImage src={userInfo.avatar} alt="Profile" />}
        {userInfo && <Nickname>{userInfo.nickname}</Nickname>}
        <Button onClick={handleLogout}>로그아웃</Button>
      </AuthButtons>
    </StyledHeader>
    // )
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: #fff;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

// const Link = styled.link`
//   font-size: 1.5rem;
//   /* font-weight: bold; */
//   text-decoration: none;
//   color: #fff;
//   cursor: pointer;
// `;

const Nickname = styled.span`
  margin: 0 1rem;
  font-size: 1.2rem;
  cursor: pointer;
`;

// const Link = styled(LogoLink)`
//   margin-left: 1rem;
//   cursor: pointer;
// `;

const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
`;
export default Header;
