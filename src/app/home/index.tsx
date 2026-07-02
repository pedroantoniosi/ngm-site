//Componentes
import MainTemplate from "@/components/MainTemplate";
import NewsCard from "@/components/NewsCard";
import Standings from "@/components/Standings";
// import SwiperNav from "@/components/SliderNavigation";
import { useState, useEffect } from "react";
// Hooks
import { useNews } from "@/hooks/useNews";
import { useDrivers } from "@/hooks/useDrivers";
//Styles
import styles from "./index.module.css";
import Container from "@/components/Container";

import PartnerLogo, { partners } from "@/components/Partners";

interface Products {
  id: string;
  name: string;
  image: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}

export default function Home() {
  const { news } = useNews();

  const [products, setProducts] = useState<Products[]>([]);
  useEffect(() => {
    async function fetchDrivers() {
      try {
        const response = await fetch("http://localhost:3001/products");

        const data = await response.json();

        setProducts(data);
      } catch (error) {
        console.error("Erro ao buscar pilotos:", error);
      }
    }

    fetchDrivers();
  }, []);

  const { drivers } = useDrivers();

  return (
    <MainTemplate>
      {/* Noticias */}
      <section className={styles.newsContainer}>
        <Container>
          <div title="Ultimas Noticias">
            <div className={styles.newsContent}>
              <div className={styles.mainNews}>
                {news.slice(0, 1).map((item) => (
                  <NewsCard key={item.id} item={item} variant="featured" />
                ))}
              </div>
              <div className={`${styles.otherNews} flex flex-col gap-4`}>
                {news.slice(1).map((item) => (
                  <NewsCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mais Informações */}
      <section className="min-h-[60svh] flex items-center">
        <Container className="grid lg:grid-cols-3 gap-[4rem] justify-around">
          {/* Tabela de Pilotos */}
          <Standings items={drivers} variant="standingsHome" />
          {/* Highlights */}
          <div className="flex flex-col">
            <h2 className="font-bold text-3xl py-4">Ultima Corrida</h2>
            <div className="flex items-end">
              <div className="card overflow-hidden">
                <img
                  src="/public/img/race-week.webp"
                  alt=""
                  className="rounded-lg aspect-video object-cover hover:scale-[1.1] duration-[.3s]"
                />
              </div>
            </div>
          </div>
          {/* Galeria de Fotos */}
          <div className="flex flex-col">
            <h2 className="font-bold text-3xl py-4">Galeria de Fotos</h2>
            <div className="flex items-end">
              <div className="card overflow-hidden">
                <img
                  src="/public/img/galeria.webp"
                  alt=""
                  className="rounded-lg aspect-video object-cover hover:scale-[1.1] duration-[.3s]"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Pilotos */}
      <section>
        <Container className="flex flex-col justify-center items-center gap-4">
          <h2 className="text-2xl font-bold">Pilotos</h2>
          <div className="flex justify-center gap-4">
            <div className="card overflow-hidden">
              <img
                src="/public/img/drivers/driver-1.png"
                alt="driver"
                className="w-[25rem] aspect-[9/16] object-cover  hover:scale-[1.1] duration-[.3s]"
              />
            </div>
            <div className="card overflow-hidden">
              <img
                src="/public/img/drivers/driver-2.png"
                alt="driver"
                className="w-[25rem] aspect-[9/16] object-cover hover:scale-[1.1] duration-[.3s]"
              />
            </div>
          </div>
          <button className="bg-blue-600 font-semibold p-2 rounded-full hover:bg-blue-700 cursor-pointer">
            Conheça o time
          </button>
        </Container>
      </section>

      {/* Carro 2026        */}
      <section className="min-h-[80svh] md:h-svh flex  flex-col gap-4 justify-center items-center ">
        <Container className="flex justify-center gap-2 items-center relative h-[400px]">
          <h2 className="flex flex-col md:flex-row font-bold justify-center items-center  leading-[5rem] select-none no-drag">
            <span className="text-[30vw] md:text-[25rem]">NGM</span>
            <span className="text-blue-600 text-[30vw] md:text-[25rem]">
              26
            </span>
          </h2>
          <img
            src="/public/img/car.webp"
            alt=""
            className=" absolute bottom-[0] select-none no-drag"
          />
        </Container>
        <Container className="flex">
          <button className="mx-auto bg-blue-600 font-semibold p-2 rounded-full hover:bg-blue-700 cursor-pointer z-[2]">
            Mais Detalhes
          </button>
        </Container>
      </section>

      {/* Shop */}
      <section>
        <Container className="grid gap-4 grid-cols-2 md:grid-cols-4 md:gap-[2rem]">
          {products
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item) => (
              <div className="card">
                <img
                  src={item.image}
                  alt={item.name}
                  className="aspect-square object-cover w-full"
                />
                <div className="caption">
                  <h2 className="text-xl font-bold">{item.name}</h2>
                  <p className="font-semibold text-neutral-400">
                    R$ <span>{item.price}</span>
                  </p>
                </div>
              </div>
            ))}
        </Container>
      </section>

      {/* Parceiros */}
      <section className="flex items-center h-svh ">
        <Container className="flex justify-center flex-col gap-2 max-w-[1024px] mx-auto">
          <a href="" className="mx-auto h-[130px] md:h-[200px]">
            <img
              src="/public/img/logo.png"
              alt=""
              className="w-[280px] md:w-[400px]"
            />
          </a>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 md:gap-8 px-4">
            {partners.map((partner) => (
              <PartnerLogo key={partner.name} partner={partner} />
            ))}
          </div>
        </Container>
      </section>

      {/* <section
        className={`${styles.productsContainer} ${styles.shopProdutsContainer}`}
      >
        <div title="Em Breve - Loja Virtual">
          <SwiperNav
            sliderNumber={4}
            spaceBetween={16}
            sliderNumberMobile={1.1}
          />
        </div>
      </section> */}
    </MainTemplate>
  );
}
