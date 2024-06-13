import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

const token = localStorage.getItem("accessToken");

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  const [userInfo, setUserInfo] = useState(null);
  // console.log(userInfo);
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(
          "https://moneyfulpublicpolicy.co.kr/user",

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
          setUserInfo(data);
        } else {
          alert("프로필 정보를 가져오는데 실패하였습니다");
        }
      } catch (error) {
        console.log("ProfileChange error", error);
        alert("프로필 정보 로딩 실패");
      }
    };

    if (isAuthenticated && token) {
      fetchUserInfo();
    }
  }, [isAuthenticated, token]);

  const login = (token) => {
    localStorage.setItem("accessToken", token.accessToken);
    setIsAuthenticated(true);
  };
  // console.log(token);
  const logout = () => {
    localStorage.removeItem("accessToken");
    setIsAuthenticated(false);
    setUserInfo(null);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, token, userInfo, setUserInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// export default AuthProvider;
