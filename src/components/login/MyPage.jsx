import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../constext/AuthProvider";

const MyPage = () => {
  const { userInfo, setUserInfo, token } = useContext(AuthContext);
  const [nickname, setNickname] = useState("");
  const [avatar, setAvatar] = useState(null);
  const navigation = useNavigate();
  // console.log(token);

  useEffect(() => {
    if (userInfo) {
      setNickname(userInfo.nickname);
      setAvatar(userInfo.avatar);
    }
  }, [userInfo]);

  const handleUpdateProfile = async () => {
    try {
      const formData = new FormData();
      formData.append("avatar", avatar);
      formData.append("nickname", nickname);

      const response = await axios.patch(
        "https://moneyfulpublicpolicy.co.kr/profile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = response.data;
      // console.log(data);
      if (data.success) {
        alert("프로필 변경에 성공하였습니다");
        navigation("/");
        setUserInfo({
          ...userInfo,
          nickname: data.nickname,
          avatar: data.avatar,
        });
      } else {
        alert("프로필 정보를 가져오는데 실패하였습니다");
      }
    } catch (error) {
      console.log("ProfileChange error", error);
      alert("프로필 변경에 실패하였습니다");
    }
  };

  return (
    <Container>
      <ProfileContainer>
        {avatar ? (
          <AvatarImage src={avatar} alt="Profile 아바타 이미지" />
        ) : (
          <AvatarImage src="/default-profile.jpg" alt="Profile 아바타 이미지" />
        )}
        <ProfileInputContainer>
          <AvatarImageInput
            type="file"
            onChange={(e) => setAvatar(e.target.files[0])}
            accept="image/*"
          />
          <NicknameInput
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="변경할 닉네임을 입력하세요"
          />
          <UpdateButton onClick={handleUpdateProfile}>
            프로필 변경하기
          </UpdateButton>
        </ProfileInputContainer>
      </ProfileContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ProfileContainer = styled.div`
  width: 50%;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
`;

const AvatarImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  background-color: #a3949475;
`;

const AvatarImageInput = styled.input`
  margin-bottom: 20px;
  width: 100%;
`;

const NicknameInput = styled.input`
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const UpdateButton = styled.button`
  padding: 8px 12px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
`;

export default MyPage;
