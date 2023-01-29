import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "../Pages/Home/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
