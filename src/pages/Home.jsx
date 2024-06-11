import Calendars from "../components/Calendars";
import List from "../components/List";
import Form from "../components/Form";
import styled from "styled-components";
import SpendingChart from "../components/SpendingChart";

const Home = () => {
  return (
    <StyledHome>
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
