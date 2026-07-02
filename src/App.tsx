import Home from "./app/home";
import News from "./app/news";
import Standings from "./app/standingsPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/standings" element={<Standings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
