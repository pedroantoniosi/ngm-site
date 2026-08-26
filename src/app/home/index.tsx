//Componentes
import MainTemplate from "@/components/MainTemplate";
import Container from "@/components/Container";
import Card from "@/components/Card";
import Standings from "@/components/Standings";
import PartnerLogo, { partners } from "@/components/Partners";
import Header from "@/components/Header";

//Api
interface Video {
  id: number;
  title: string;
  description: string;
  url: string;
}

const videos: Video[] = [
  {
    id: 0,
    title: "VRC Formula Alpha 2025 - Teaser",
    description:
      "Conheça de perto todos os recursos avançados e o acabamento detalhado do novo Formula Alpha 2025. Confira tudo o que faz do carro deste ano o nosso lançamento mais imersivo até hoje.",
    url: "https://www.youtube.com/watch?v=zVJh6Edcb4o",
  },
  {
    id: 1,
    title: "Race Sim Studio - GTM-Lanzo v8",
    description:
      "O GT-M Lanzo V8 é o terceiro carro do nosso pacote GT-M Phase 3. Equipado com um motor V8 biturbo — uma novidade na linhagem Lanzo —, este carro apresenta as especificações mais completas para a temporada de 2026, incluindo sistemas exclusivos para auxiliar no equilíbrio de desempenho (BoP) específico da categoria, sistemas de energia e muito mais. Como sempre, o carro conta com uma ampla variedade de componentes configuráveis ​​à sua escolha, telas interativas e dinâmicas, e até mesmo uma animação especial nos faróis ao ligar ou desligar a ignição. A cor do brilho dos faróis também pode ser personalizada! Confira todos os detalhes em nosso site, abaixo. O pacote GT-M Championship Phase 3 também já está disponível no lançamento, uma vez que o escopo e a direção de desenvolvimento de todos os seis carros incluídos já foram definidos. O pacote contempla os modelos Cortex V8, Lux V8 Evo, Lanzo V8, Blackhorn V8, Toyama V8 e Nisumo V6, com os demais carros sendo lançados progressivamente ao longo dos próximos 12 meses.",
    url: "https://www.youtube.com/watch?v=EAlv-WXp78U",
  },
  {
    id: 2,
    title: "Semana do Piloto Virtual - Tecnicas de Acelador",
    description:
      "Vem ai a Semana do Piloto Virtual, um evento dedicado a te transformar em um piloto fora da curva nos simuladores.",
    url: "https://www.youtube.com/watch?v=jUQ-wjd6C9s",
  },
];

const ngmDrivers = [
  {
    id: 0,
    name: "Pietro Fit",
    number: 22,
    state: "RJ",
    image: "/public/img/drivers/driver-1.png",
    wallpaper: "/public/img/drivers/w-driver-1.png",
  },
  {
    id: 1,
    name: "Giovane Barbosa",
    number: 33,
    state: "AC",
    image: "/public/img/drivers/driver-2.png",
    wallpaper: "/public/img/drivers/w-driver-2.png",
  },
];

// import SwiperNav from "@/components/SliderNavigation";
import { useState, useEffect } from "react";
// Hooks
import { useNews } from "@/hooks/useNews";
import { useDrivers } from "@/hooks/useDrivers";

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
      <section className="p-2 ">
        <Container>
          <div title="Ultimas Noticias">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                {news.slice(0, 1).map((item) => (
                  <Card key={item.id} item={item} variant="featured" />
                ))}
              </div>
              <div
                className={`grid grid-cols-2 md:grid-cols-2 flex flex-col gap-4`}
              >
                {news.slice(1).map((item) => (
                  <Card key={item.id} item={item} variant="news" />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mais Informações */}
      <div className="bg-navy">
        <section className="min-h-[60svh] flex items-center p-2 ">
          <Container className="grid lg:grid-cols-3 gap-6 justify-around">
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
        {/* Videos */}
        <div className=" p-4">
          <Container>
            <Header title="Videos" />
            <div className="grid gap-4 md:grid-cols-[6fr_3fr_3fr]">
              {videos.map((item) => {
                const videoId = new URL(item.url).searchParams.get("v");

                return (
                  <article
                    key={item.id}
                    className="flex h-full flex-col overflow-hidden rounded-xl bg-zinc-950"
                  >
                    <div className="flex aspect-video w-full h-80 bg-red-500">
                      <iframe
                        className="h-full w-full"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={item.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm text-zinc-400 ellipsis-2">
                        {item.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </Container>
        </div>
        {/* Pilotos */}
        <section>
          <Container>
            <Header title="Pilotos" />
            <div className="grid md:grid-cols-2 gap-6">
              {ngmDrivers.map((item) => (
                <div
                  className="flex w-full bg-red-500 overflow-hidden"
                  key={item.id}
                >
                  <img
                    src={item.wallpaper}
                    className="w-full  object-cover"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </Container>
        </section>
        {/* Carro 2026        */}
        <section className="bg-black min-h-[80svh] md:h-svh flex  flex-col gap-4 justify-center items-center ">
          <Container className="flex justify-center gap-2 items-center relative h-[400px]">
            <h2 className="flex flex-col md:flex-row font-bold justify-center items-center  leading-[5rem] select-none no-drag">
              <span className="text-blue-600 text-[30vw] md:text-[25rem]">
                NGM
              </span>
              <span className="text-white text-[30vw] md:text-[25rem]">27</span>
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
        <section className="">
          <Container>
            <Header title="Shopping" />
            <div className="grid gap-4 grid-cols-2 md:grid-cols-4 md:gap-[2rem]">
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
            </div>
          </Container>
        </section>
      </div>

      {/* Parceiros */}
      <section className="flex items-center min-h-svh  bg-zinc-900">
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
