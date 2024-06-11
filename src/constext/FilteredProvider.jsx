import { createContext, useState, useContext } from "react";
import { BooksContext } from "./BooksProvider";

export const FilteredContext = createContext(null);

const FilteredProvider = ({ children }) => {
  const { books } = useContext(BooksContext);
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [selectedMonth, setSelectedMonth] = useState("");

  return (
    <FilteredContext.Provider
      value={{
        filteredBooks,
        setFilteredBooks,
        selectedMonth,
        setSelectedMonth,
      }}
    >
      {children}
    </FilteredContext.Provider>
  );
};

export default FilteredProvider;
