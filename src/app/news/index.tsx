import MainTemplate from "@/components/MainTemplate";
import Container from "@/components/Container";
import NewsCard from "@/components/NewsCard";

import { useNews } from "@/hooks/useNews";

export default function News() {
  const { news } = useNews();
  return (
    // Noticias
    <MainTemplate>
      <Container>
        <div className="flex flex-row py-6">
          <h2 className="text-3xl font-bold">Ultimas Noticias</h2>
        </div>
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4">
          {news.map((item) => (
            <NewsCard key={item.id} item={item} variant="featured" />
          ))}
        </div>
      </Container>
    </MainTemplate>
  );
}
