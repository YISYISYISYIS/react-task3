import styled from "styled-components";

const CalendarButton = ({ month, isColorActive, onClickCalendarButton }) => {
  return (
    <StyledCalendarButton
      $isColorActive={isColorActive} //스타일요소가 dom요소에는 전달되지 않게 앞에$
      onClick={onClickCalendarButton}
    >
      {month}
    </StyledCalendarButton>
  );
};
const StyledCalendarButton = styled.button`
  text-align: center;
  font-family: Pretendard, serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  height: 60px;
  padding: 20px;
  width: 104px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: ${(props) =>
    props.$isColorActive
      ? "var(--white-alpha-100, #fff)"
      : "var(--black-alpha-100, #000)"};
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background: ${(props) =>
    props.$isColorActive
      ? "var(--bg-form, #2ec4b6)"
      : "var(--black-alpha-100, #F6F7FA)"};
`;
export default CalendarButton;
