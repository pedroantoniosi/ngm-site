//Componentes
import MainTemplate from "@/components/MainTemplate";
import SwiperNav from "@/components/SliderNavigation";
import { useEffect, useState } from "react";

//Styles
import styles from "./index.module.css";

interface News {
  id: string;
  image: string;
  title: string;
  text: string;
  url: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
}

export default function Home() {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch("http://localhost:3001/news");

        const data = await response.json();

        setNews(data);
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      }
    }

    fetchNews();
  }, []);

  return (
    <MainTemplate>
      <section className={styles.heroContainer}></section>

      <section className={styles.newsContainer}>
        <div title="Ultimas Noticias">
          <div className={styles.newsContent}>
            {news.slice(0, 1).map((item) => (
              <article key={item.id} className={styles.newsCard}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.newsImage}
                />

                <div className={styles.newsInfo}>
                  <div className="flex justify-between">
                    <h2 className="text-2xl">{item.title}</h2>
                    <span className={styles.newsTag}>{item.tag}</span>
                  </div>
                  <p className={styles.newsText}>{item.text}</p>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.newsLink}
                    >
                      Ler mais
                    </a>
                  )}
                </div>
              </article>
            ))}
            <div className="flex flex-col gap-4">
              {news.slice(1).map((item) => (
                <article key={item.id} className="flex gap-2 items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[150px] aspect-square object-cover"
                  />
                  <div className="flex  flex-col gap-1">
                    <div className="flex justify-between">
                      <h2 className="text-2xl">{item.title}</h2>
                      <span className={styles.newsTag}>{item.tag}</span>
                    </div>

                    <p className={styles.newsText}>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div title="Wallpaper Kits">
        <div className={`${styles.kitsContainer} row-auto gap-1`}></div>
      </div>

      <section
        className={`${styles.productsContainer} ${styles.shopProdutsContainer}`}
      >
        <div title="Em Breve - Loja Virtual">
          <SwiperNav
            sliderNumber={4}
            spaceBetween={16}
            sliderNumberMobile={1.1}
          />
        </div>
      </section>
    </MainTemplate>
  );
}
