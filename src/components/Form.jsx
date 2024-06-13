import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import InputContents from "./form/InputContents";
import FormButton from "./form/FormButton";
import { BooksContext } from "../constext/BooksProvider";
import { FilteredContext } from "../constext/FilteredProvider";
import { postData } from "../data/books";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { AuthContext } from "../constext/AuthProvider";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const { setBooks } = useContext(BooksContext);
  const { selectedMonth } = useContext(FilteredContext);
  const { userInfo } = useContext(AuthContext);
  // console.log(userInfo);

  const [date, setDate] = useState(`2024-${selectedMonth}-01`);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [item, setItem] = useState("");
  const queryClient = new QueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: postData,
    onSuccess: () => {
      queryClient.invalidateQueries(["books"]);
      navigate(0);
    },
  });

  useEffect(() => {
    setDate(`2024-${selectedMonth}-01`);
  }, [selectedMonth]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const validDate = (date) => {
      if (date.split("-")[1].length === 0) {
        return false;
      }
      return true;
    };

    if (
      !validDate(date) ||
      !description.trim() ||
      !amount.trim() ||
      !item.trim()
    ) {
      return alert("항목을 모두 입력해주세요.");
    } else if (amount <= 0) {
      return alert("유효한 금액을 입력하세요");
    }

    const newBooks = {
      id: crypto.randomUUID(),
      date,
      description,
      amount,
      item,
      createdBy: userInfo.id,
    };
    console.log("Date:", date);
    console.log("Item:", item);
    console.log("Amount:", amount);
    console.log("Description:", description);

    // setBooks((prev) => [...prev, newBooks]);

    mutation.mutate(newBooks);

    setDate(`2024-${selectedMonth}-01`);
    setDescription("");
    setAmount("");
    setItem("");
  };

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <StyledFormInner>
        <InputContents
          label="날짜"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <InputContents
          label="항목"
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <InputContents
          label="금액"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <InputContents
          label="내용"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <FormButton type="submit" buttonText="저장" color="rgb(0, 123, 255)" />
      </StyledFormInner>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  background-color: rgb(223, 222, 222);
  border-radius: 16px;
  padding: 20px;
`;
const StyledFormInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: flex-end;
  background-color: #a3a3a3;
`;

export default Form;
