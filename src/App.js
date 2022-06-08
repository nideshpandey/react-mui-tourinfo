import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/AppBar";
import TourPage from './pages/TourPage'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<TourPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
