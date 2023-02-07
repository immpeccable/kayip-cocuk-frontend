import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<div>home</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
