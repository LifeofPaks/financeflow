
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/pages/home/HomePage";
import { AppContext } from "./hooks/contextApi";
import { Route, Routes, useNavigate } from "react-router-dom";
import About from "./components/pages/about/About";
import Pricing from "./components/pages/pricing/Pricing";
import Tokens from "./components/pages/tokens/Tokens";
import Blog from "./components/pages/blog/Blog";
import Contact from "./components/pages/contact/Contact";


function App() {
  return (
    <AppContext.Provider value={{}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/tokens" element={<Tokens/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </AppContext.Provider>
  );
}

export default App;
