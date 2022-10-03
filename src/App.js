import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import MovieDetail from "./components/MovieDetail";
import PageNotFound from "./components/PageNotFound";
import MovieListing from "./components/MovieListing";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/movie" element={<MovieListing />} />
            <Route path="/movie/:imdbID" element={<MovieDetail />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
