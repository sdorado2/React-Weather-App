import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./page/Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "./page/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
