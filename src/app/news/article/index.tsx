import { Link, useParams } from "react-router-dom";
import { useNews } from "@/hooks/useNews";
import MainTemplate from "@/components/MainTemplate";
import Container from "@/components/Container";
import Button from "@/components/Button";

const tagLabels: Record<string, string> = {
  noticias: "Notícias",
  artigos: "Artigos",
  fotos: "Fotos",
  videos: "Vídeos",
};

export default function NewsArticle() {
  const { slug } = useParams<{ slug: string }>();
  const { news } = useNews();

  const article = news.find((item) => item.slug === slug);

  if (!article) {
    return (
      <main className="flex min-h-[50vh] items-center justify-center">
        <h1 className="text-2xl font-bold text-slate-950">
          Notícia não encontrada
        </h1>
      </main>
    );
  }

  const tagLabel = tagLabels[article.tag] ?? article.tag;

  return (
    <MainTemplate>
      <div className="bg-white text-black">
        <Container>
          <article className="w-full flex flex-col  gap-16">
            <header className="flex flex-col gap-4">
              <Link
                to="/news"
                className="mb-8 inline-flex items-center gap-2 rounded-md px-1 py-2 text-sm font-medium text-slate-600 underline-offset-4 hover:text-slate-950 hover:underline"
              >
                <span aria-hidden="true">←</span>
                Voltar para notícias
              </Link>
              <div className="mb-4">
                <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
                  {tagLabel}
                </span>
              </div>
              <h1 className=" text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl lg:leading-[1.1]  max-w-200">
                {article.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                {article.text}
              </p>
            </header>
            <figure className="flex">
              <img
                src={article.image}
                alt={`Imagem relacionada à notícia: ${article.title}`}
                className="aspect-video w-full rounded-xl object-cover shadow-sm"
              />
            </figure>
            <div className="max-w-200 w-full mx-auto flex flex-col gap-4 ">
              <div className="max-w-prose text-base leading-8 text-slate-700 sm:text-lg sm:leading-9">
                {article.paragraphs?.map((paragraph, index) => (
                  <p
                    key={`${article.id}-paragraph-${index}`}
                    className={index > 0 ? "mt-6" : ""}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-12 border-t border-slate-200 pt-8">
                <Link to="/news">
                  <Button variant="primary">Ver todas as notícias</Button>
                </Link>
              </div>
            </div>
          </article>
        </Container>
      </div>
    </MainTemplate>
  );
}
