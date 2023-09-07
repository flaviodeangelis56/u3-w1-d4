import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./MyComponents/MyNavBar";
import MyFooter from "./MyComponents/MyFooter";
import MyJumbotron from "./MyComponents/MyJumbotron";
import AllTheBooks from "./MyComponents/AllTheBooks";
import SingleBook from "./MyComponents/SingleBook";
import books from "./books/horror.json";
import BookList from "./MyComponents/BookList";
function App() {
  return (
    <div className="App">
      <MyNavBar />

      <MyJumbotron />
      <BookList HorrorBooks={books} />
      <MyFooter />
    </div>
  );
}

export default App;
