import styled from "styled-components";
import CalendarButton from "./calendars/CalendarButton";
import { useEffect, useContext } from "react";
import { BooksContext } from "../constext/BooksProvider";
import { FilteredContext } from "../constext/FilteredProvider";

const Calendars = () => {
  const { books } = useContext(BooksContext);
  const { setFilteredBooks, setSelectedMonth, selectedMonth } =
    useContext(FilteredContext);

  useEffect(() => {
    const savedMonth = localStorage.getItem("selectedMonth");
    if (savedMonth) {
      setSelectedMonth(savedMonth);
      filteredBooks(savedMonth);
    }
  }, []);

  const onClickCalendarButton = (month) => {
    setSelectedMonth(month);

    localStorage.setItem("selectedMonth", month);
    filteredBooks(month);
  };
  const filteredBooks = (month) => {
    const filteredBooksDate = books.filter((book) =>
      book.date.split("-")[1].includes(month)
    );
    setFilteredBooks(filteredBooksDate);
  };
  return (
    <StyledCalendars>
      <StyledCalendarsInner>
        <CalendarButton
          onClickCalendarButton={() => onClickCalendarButton("01")}
          isColorActive={selectedMonth === "01"}
          month="1월"
        />
        <CalendarButton
          onClickCalendarButton={() => onClickCalendarButton("02")}
          isColorActive={selectedMonth === "02"}
          month="2월"
        />
        <CalendarButton
          onClickCalendarButton={() => onClickCalendarButton("03")}
          isColorActive={selectedMonth === "03"}
          month="3월"
        />
        <CalendarButton
          onClickCalendarButton={() => onClickCalendarButton("04")}
          isColorActive={selectedMonth === "04"}
          month="4월"
        />
        <CalendarButton
          onClickCalendarButton={() => onClickCalendarButton("05")}
          isColorActive={selectedMonth === "05"}
          month="5월"
        />
        <CalendarButton
          onClickCalendarButton={() => onClickCalendarButton("06")}
          isColorActive={selectedMonth === "06"}
          month="6월"
        />
        <CalendarButton
          onClickCalendarButton={() => onClickCalendarButton("07")}
          isColorActive={selectedMonth === "07"}
          month="7월"
        />
        <CalendarButton
          onClickCalendarButton={() => onClickCalendarButton("08")}
          isColorActive={selectedMonth === "08"}
          month="8월"
        />
        <CalendarButton
          onClickCalendarButton={() => onClickCalendarButton("09")}
          isColorActive={selectedMonth === "09"}
          month="9월"
        />
        <CalendarButton
          onClickCalendarButton={() => onClickCalendarButton("10")}
          isColorActive={selectedMonth === "10"}
          month="10월"
        />
        <CalendarButton
          onClickCalendarButton={() => onClickCalendarButton("11")}
          isColorActive={selectedMonth === "11"}
          month="11월"
        />
        <CalendarButton
          onClickCalendarButton={() => onClickCalendarButton("12")}
          isColorActive={selectedMonth === "12"}
          month="12월"
        />
      </StyledCalendarsInner>
    </StyledCalendars>
  );
};

const StyledCalendars = styled.section`
  background-color: #a5a5a5;
  border-radius: 16px;
  padding: 20px;
`;
const StyledCalendarsInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;
export default Calendars;
