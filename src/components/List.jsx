import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { FilteredContext } from "../constext/FilteredProvider";
import { useQuery } from "@tanstack/react-query";
import { getData } from "../data/books";

const List = () => {
  // const { filteredBooks } = useContext(FilteredContext);
  // console.log(books);
  const [filteredData, setFilteredData] = useState([]);
  const { selectedMonth } = useContext(FilteredContext);

  const {
    data: filteredBooks = [],
    isLoading,
    error,
  } = useQuery({ queryKey: ["books"], queryFn: getData });

  useEffect(() => {
    if (!filteredBooks) return;
    if (isLoading || error) return;
    if (!filteredBooks) return;

    try {
      const result = filteredBooks.filter((book) => {
        const month = new Date(book.date).getMonth() + 1;
        return month === +selectedMonth;
      });
      setFilteredData(result);
    } catch (error) {
      console.error("필터 리스트 에러");
    }
  }, [filteredBooks, selectedMonth, isLoading, error]);

  // console.log(isLoading);
  // console.log(filteredBooks);

  return (
    <StyledList>
      <StyledListInner>
        {filteredData.map((book) => (
          <StyledListItem key={book.id}>
            {book.date}
            <Link state={{ book }} to={`/detail/${book.id}`}>
              {book.item}
              {book.description}
            </Link>
            {book.amount}
            작성자 :{book.createdBy}
          </StyledListItem>
        ))}
        {filteredData.length === 0 && (
          <StyledListItem>
            <p>항목이 없습니다</p>
          </StyledListItem>
        )}
      </StyledListInner>
    </StyledList>
  );
};

const StyledList = styled.section`
  background-color: #d3d3d3;
  border-radius: 16px;
  padding: 20px;
`;
const StyledListInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const StyledListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-radius: 8px;
  background-color: rgb(249, 249, 249);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
  transition: transform 0.2s ease-in-out 0s;
  cursor: pointer;
`;

export default List;
