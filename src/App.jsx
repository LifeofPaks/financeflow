
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/pages/home/HomePage";
import { AppContext } from "./hooks/contextApi";
import { Route, Routes, useNavigate } from "react-router-dom";


function App() {
  return (
    <AppContext.Provider value={{}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
      <Footer/>
    </AppContext.Provider>
  );
}

export default App;
