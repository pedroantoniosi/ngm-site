import { createContext, useEffect, useState } from "react";

import type { NewsContextType, News } from "./newsTypes";

const NewsContext = createContext<NewsContextType>({
  news: [],
  loading: true,
});

export function NewsProvider({ children }: { children: React.ReactNode }) {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNews() {
      try {
        const response = await fetch("http://localhost:3001/news");

        const data = await response.json();
        console.log("NEWS API:", data);
        setNews(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadNews();
  }, []);

  return (
    <NewsContext.Provider
      value={{
        news,
        loading,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
}

export { NewsContext };
