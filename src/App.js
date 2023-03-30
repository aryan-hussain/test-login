import "./components/Header";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div id="App" className="d-f">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;
