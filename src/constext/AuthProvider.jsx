import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const token = localStorage.getItem("accessToken");

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  const [userInfo, setUserInfo] = useState(null);

  // useEffect(() => {
  //   const fetchUserInfo = async()=>{
  //     try {

  //       const response = await axios.get(
  //         "https://moneyfulpublicpolicy.co.kr/user",

  //         {
  //           headers: {
  //             "Content-Type": "multipart/form-data",
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );
  //       const data = response.data;
  //       // console.log(data);
  //       if (data.success) {
  //         alert("프로필 변경에 성공하였습니다");
  //         navigation("/");
  //       } else {
  //         alert("프로필 정보를 가져오는데 실패하였습니다");
  //       }
  //     } catch (error) {
  //       console.log("ProfileChange error", error);
  //       alert("프로필 변경에 실패하였습니다");
  //     }
  //   }
  // })

  const login = (token) => {
    localStorage.setItem("accessToken", token.accessToken);
    setIsAuthenticated(true);
  };
  // console.log(token);
  const logout = () => {
    localStorage.removeItem("accessToken");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};

// export default AuthProvider;
