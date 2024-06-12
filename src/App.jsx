import Router from "./router/Router";
import GlobalStyles from "./GlobalStyles";
import Layout from "./components/Layout";
import BooksProvider from "./constext/BooksProvider";
import { useEffect, useState } from "react";
import axios from "axios";
import { AuthProvider } from "./constext/AuthProvider";

const App = () => {
  // const [users, setUsers] = useState([]);
  // const fetchUsers = async () => {
  //   const { data } = await axios.get("http://localhost:4000/users");
  //   setUsers(data);
  // };

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  // console.log(users);

  return (
    <AuthProvider>
      <BooksProvider>
        <GlobalStyles />
        {/* <Layout> */}
        <Router />
        {/* </Layout> */}
      </BooksProvider>
    </AuthProvider>
  );
};

export default App;
