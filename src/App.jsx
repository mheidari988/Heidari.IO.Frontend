import "./App.css";
import Resume from "./components/resume/Resume";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
