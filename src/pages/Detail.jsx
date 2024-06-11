import { useLocation, useNavigate } from "react-router-dom";
import { useRef, useContext } from "react";
import InputContents from "../components/form/InputContents";
import styled from "styled-components";
import Layout from "../components/Layout";
import FormButton from "../components/form/FormButton";
import { BooksContext } from "../constext/BooksProvider";

const Detail = () => {
  const { setBooks } = useContext(BooksContext);

  const location = useLocation();
  const navigate = useNavigate();
  const { book } = location.state;

  const dataRef = useRef(book.date);
  const descriptionRef = useRef(book.description);
  const amountRef = useRef(book.amount);
  const itemREf = useRef(book.item);

  const onClickInputChange = () => {
    const newBook = {
      id: book.id,
      date: dataRef.current.value,
      description: descriptionRef.current.value,
      amount: amountRef.current.value,
      item: itemREf.current.value,
    };
    const isConfirm = confirm("수정 하시겠습니까?");
    if (isConfirm) {
      setBooks((prev) =>
        prev.map((prevBook) => (prevBook.id === book.id ? newBook : prevBook))
      );
      navigate("/");
    }
  };

  const onClickDelete = () => {
    const isConfirm = confirm("삭제 하시겠습니까?");
    if (isConfirm) {
      setBooks((prev) => prev.filter((prevBook) => prevBook.id !== book.id));
      navigate("/");
    }
  };

  const onClickBack = () => {
    navigate(-1);
  };

  return (
    <Layout>
      <StyledDetail>
        <InputContents
          label="날짜"
          type="date"
          ref={dataRef}
          defaultValue={book.date}
        />
        <InputContents
          label="항목"
          type="text"
          ref={descriptionRef}
          defaultValue={book.description}
        />
        <InputContents
          label="금액"
          type="number"
          ref={amountRef}
          defaultValue={book.amount}
        />
        <InputContents
          label="내용"
          type="text"
          ref={itemREf}
          defaultValue={book.item}
        />
        <StyledFormButton>
          <FormButton
            buttonText="수정"
            color="rgb(0, 123, 255)"
            onClick={onClickInputChange}
          />
          <FormButton
            buttonText="삭제"
            color="rgb(255, 77, 77)"
            onClick={onClickDelete}
          />
          <FormButton
            buttonText="뒤로 가기"
            color="rgb(108, 117, 125)"
            onClick={onClickBack}
          />
        </StyledFormButton>
      </StyledDetail>
    </Layout>
  );
};

const StyledDetail = styled.div`
  max-width: 800px;
  margin: 0px auto;
  padding: 20px;
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
`;
const StyledFormButton = styled.div`
  display: flex;
  gap: 10px;
`;
export default Detail;
