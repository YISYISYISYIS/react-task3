import Router from "./router/Router";
import GlobalStyles from "./GlobalStyles";
import Layout from "./components/Layout";
import BooksProvider from "./constext/BooksProvider";

//필요한 state
//1.가계부 배열 (완료)
//2.월별 정보
//3.form을 묶은 값을저장한 객체

//필요한 라우팅기능
//리스트클릭시 주소에 id넣어서 이동

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
