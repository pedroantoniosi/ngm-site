import { Link } from "react-router-dom";
import { useNews } from "@/hooks/useNews";
import { timeAgo } from "@/util/timeAgo";

interface CardProps {
  limit?: number;
  variant?: "default" | "home";
}

export default function Card({ limit, variant = "default" }: CardProps) {
  const { news } = useNews();

  const newsToRender = limit ? news.slice(0, limit) : news;

  if (variant === "home") {
    const [featured, ...secondaryNews] = newsToRender;

    return (
      <div className="grid gap-6 md:grid-cols-2">
        {/* Última notícia */}
        {featured && (
          <Link to={`/news/${featured.slug}`} className="h-full">
            <article className="group relative h-full overflow-hidden rounded-2xl">
              <img
                src={featured.image}
                alt={featured.title}
                className="h-full min-h-100 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />

              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black via-black/70 to-transparent p-6 pt-24">
                <p className="mb-2 py-[.2rem] px-2 rounded-md text-md font-semibold text-zinc-300 bg-red-500 max-w-fit">
                  {featured.tag}
                </p>

                <h2 className="text-xl font-semibold text-white md:text-2xl">
                  {featured.title}
                </h2>
              </div>
            </article>
          </Link>
        )}

        {/* Últimas 4 notícias */}
        <div className="grid grid-cols-2 gap-4">
          {secondaryNews.slice(0, 4).map((item) => (
            <Link key={item.id} to={`/news/${item.slug}`}>
              <article className="group h-full overflow-hidden rounded-2xl bg-zinc-950">
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="aspect-4/3 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="flex flex-col gap-2 p-3">
                  <h2 className="max-w-70 line-clamp-2 text-sm font-semibold text-zinc-200 group-hover:text-white group-hover:underline">
                    {item.title}
                  </h2>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // Card padrão — página de todas as notícias
  return (
    <>
      {newsToRender.map((item) => (
        <Link key={item.id} to={`/news/${item.slug}`}>
          <article className="group flex h-full flex-col overflow-hidden rounded-2xl">
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div className="flex h-full flex-1 flex-col gap-2 bg-zinc-950 p-4">
              <h2 className="p-1 font-semibold text-zinc-200 group-hover:text-white group-hover:underline">
                {item.title}
              </h2>

              <p className="mt-auto text-zinc-300">{timeAgo(item.createdAt)}</p>
            </div>
          </article>
        </Link>
      ))}
    </>
  );
}
