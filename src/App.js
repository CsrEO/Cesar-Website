import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from "./About";
import Home from "./Home";

export default function App() {
    return (
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About></About>} />
        </Route>
      </Routes>

    );
}



