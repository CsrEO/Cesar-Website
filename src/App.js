import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from "./about";
import Home from "./home";

export default function App() {
    return (
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About></About>} />
        </Route>
      </Routes>
       
    );
}



