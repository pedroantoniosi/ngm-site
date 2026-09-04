import Home from "./app/home";
import News from "./app/news";
import NewsArticle from "./app/news/article";
import Shopping from "./app/shoppingPage";
import Standings from "./app/standingsPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/news" element={<News />} />
        <Route path="/news/:slug" element={<NewsArticle />} />

        <Route path="/standings" element={<Standings />} />
        <Route path="/shopping" element={<Shopping />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
