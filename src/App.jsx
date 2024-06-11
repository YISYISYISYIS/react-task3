import Router from "./router/Router";
import GlobalStyles from "./GlobalStyles";
import Layout from "./components/Layout";
import BooksProvider from "./constext/BooksProvider";

const App = () => {
  return (
    <BooksProvider>
      <GlobalStyles />
      <Layout>
        <Router />
      </Layout>
    </BooksProvider>
  );
};

export default App;
