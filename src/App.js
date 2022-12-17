import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Stock from "./components/Stock";
import data from "./data"

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks" element={<Dashboard />} />
        <Route path={`/stocks/:${data.symbol}`} element={<Stock />} />
      </Routes>
    </div>
  );
}

export default App;
