import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Works from "./pages/Works";
import Aboutme from "./pages/Aboutme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<Aboutme />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <ButtonGradient />
    </>
  );
};

export default App;
