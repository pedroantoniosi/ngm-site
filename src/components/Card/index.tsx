import { useNews } from "@/hooks/useNews";

export default function Card() {
  const { news } = useNews();
  return (
    <>
      {news.map((item) => {
        <article key={item.id}>
          <div className="flex flex-col">
            <h2>{item.title}</h2>
          </div>
        </article>;
      })}
    </>
  );
}
