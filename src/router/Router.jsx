import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import FilteredProvider from "../constext/FilteredProvider";
import SignUp from "../components/login/SignUp";
import Login from "../components/login/Login";
import { AuthContext } from "../constext/AuthProvider";
import Header from "../components/header/Header";
import Layout from "../components/Layout";
import MyPage from "../components/login/MyPage";

const PrivateRouter = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? <Element {...rest} /> : <Navigate to="/Login" />;
};

const PublicRouter = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return !isAuthenticated ? <Element {...rest} /> : <Navigate to="/" />;
};

const Router = () => {
  return (
    <FilteredProvider>
      <BrowserRouter>
        <Header />
        <Layout>
          <Routes>
            <Route path="/SignUp" element={<PublicRouter element={SignUp} />} />
            <Route path="/Login" element={<PublicRouter element={Login} />} />
            <Route path="/" element={<PrivateRouter element={Home} />} />
            <Route
              path="/Detail/:id"
              element={<PrivateRouter element={Detail} />}
            />
            <Route
              path="/myPage"
              element={<PrivateRouter element={MyPage} />}
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </FilteredProvider>
  );
};

export default Router;
