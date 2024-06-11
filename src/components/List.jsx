import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FilteredContext } from "../constext/FilteredProvider";

const List = () => {
  const { filteredBooks } = useContext(FilteredContext);
  // console.log(books);
  return (
    <StyledList>
      <StyledListInner>
        {filteredBooks.map((book) => (
          <StyledListItem key={book.id}>
            {book.date}
            <Link state={{ book }} to={`/detail/${book.id}`}>
              {book.item}
              {book.description}
            </Link>
            {book.amount}
          </StyledListItem>
        ))}
        {filteredBooks.length === 0 && (
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
