import { createContext, useState } from "react";
import data from "../data/data";

export const BooksContext = createContext(null);

const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState(data);

  return (
    <BooksContext.Provider value={{ books, setBooks }}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
