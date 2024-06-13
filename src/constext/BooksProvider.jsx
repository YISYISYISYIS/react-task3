import { createContext, useState, useEffect } from "react";
import data from "../data/data";
import axios from "axios";

export const BooksContext = createContext(null);

const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState(data);
  // console.log(books);
  // useEffect(() => {
  //   const fetchBooks = async () => {
  //     try {
  //       const response = await axios.get("/db.json");
  //       setBooks(response.data);
  //     } catch (error) {
  //       console.log("북스 프로바이더 오류");
  //     }
  //   };

  //   fetchBooks();
  // }, []);

  return (
    <BooksContext.Provider value={{ books, setBooks }}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
