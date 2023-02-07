import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MissingList } from "./components/MissingList/MissingList";
import Header from "./components/Header";

import logo from "./images/logo.png";

function App() {
  return (
    <div className="maindiv">
      <BrowserRouter>
        <Header logoImg={logo} />
        <Routes>
          <Route index element={<MissingList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
