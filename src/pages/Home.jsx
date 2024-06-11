import Calendars from "../components/Calendars";
import List from "../components/List";
import Form from "../components/Form";
import styled from "styled-components";
import SpendingChart from "../components/SpendingChart";
import Login from "../components/login/Login";
import SignUp from "../components/login/SignUp";

const Home = () => {
  return (
    <StyledHome>
      <Login />
      <SignUp />
      <Form />
      <Calendars />
      <SpendingChart />
      <List />
    </StyledHome>
  );
};

const StyledHome = styled.main`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0px auto;
`;
export default Home;
