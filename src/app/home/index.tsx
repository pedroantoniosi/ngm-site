import { useEffect, useState } from "react";

// Componentes
import MainTemplate from "@/components/MainTemplate";
import Container from "@/components/Container";
import Card from "@/components/Card";
import Standings from "@/components/Standings";
import PartnerLogo from "@/components/Partners";
import Header from "@/components/Header";
import Button from "@/components/Button";

// Hooks
import { useNews } from "@/hooks/useNews";
import { useDrivers } from "@/hooks/useDrivers";

// ===============================
// VIDEOS
// ===============================

interface VideoProps {
  id: number;
  title: string;
  description: string;
  url: string;
}

const videos: VideoProps[] = [
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
      "O GT-M Lanzo V8 é o terceiro carro do nosso pacote GT-M Phase 3. Equipado com um motor V8 biturbo — uma novidade na linhagem Lanzo —, este carro apresenta as especificações mais completas para a temporada de 2026, incluindo sistemas exclusivos para auxiliar no equilíbrio de desempenho (BoP) específico da categoria, sistemas de energia e muito mais.",
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

// ===============================
// NGM DRIVERS
// ===============================

interface NgmDriver {
  id: number;
  name: string;
  number: number;
  state: string;
  image: string;
  wallpaper: string;
}

const ngmDrivers: NgmDriver[] = [
  {
    id: 0,
    name: "Pietro Fit",
    number: 22,
    state: "RJ",
    image: "/img/drivers/driver-1.png",
    wallpaper: "/img/drivers/w-driver-1.png",
  },
  {
    id: 1,
    name: "Giovane Barbosa",
    number: 33,
    state: "AC",
    image: "/img/drivers/driver-2.png",
    wallpaper: "/img/drivers/w-driver-2.png",
  },
];

// ===============================
// CAR
// ===============================

const car = [
  {
    id: 0,
    name: "NGM",
    model: "27",
    year: "2027",
    image: "/img/car.webp",
  },
];

// ===============================
// PRODUCTS
// ===============================

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}

export default function Home() {
  const { news } = useNews();
  const { drivers } = useDrivers();
  console.log("DRIVERS NO HOME:", drivers);

  const [products, setProducts] = useState<Product[]>([]);

  // ===============================
  // PRODUCTS API
  // ===============================

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/products`,
        );

        if (!response.ok) {
          throw new Error("Erro ao buscar produtos");
        }

        const data: Product[] = await response.json();

        setProducts(data);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <MainTemplate>
      {/* Noticias */}
      <section>
        <Container>
          <div title="Ultimas Noticias">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                {news.slice(0, 1).map((item) => (
                  <Card key={item.id} item={item} variant="featured" />
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                {news.slice(1).map((item) => (
                  <Card key={item.id} item={item} variant="news" />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mais Informações */}
      <div className="flex flex-col gap-2 bg-navy">
        {/* Tabela de Pilotos */}
        <section className="flex items-center">
          <Container className="grid gap-6 lg:grid-cols-3 justify-around">
            <Standings items={drivers} variant="standingsHome" />

            {/* Highlights */}
            <div className="flex flex-col">
              <h2 className="py-4 text-3xl font-bold">Ultima Corrida</h2>

              <div className="flex items-end">
                <div className="card overflow-hidden">
                  <img
                    src="/img/race-week.webp"
                    alt=""
                    className="aspect-video rounded-lg object-cover transition duration-[.3s] hover:scale-[1.1]"
                  />
                </div>
              </div>
            </div>

            {/* Galeria de Fotos */}
            <div className="flex flex-col">
              <h2 className="py-4 text-3xl font-bold">Galeria de Fotos</h2>

              <div className="flex items-end">
                <div className="card overflow-hidden">
                  <img
                    src="/img/galeria.webp"
                    alt=""
                    className="aspect-video rounded-lg object-cover transition duration-[.3s] hover:scale-[1.1]"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Videos */}
        <section>
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
                    <div className="flex h-80 w-full aspect-video">
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
        </section>

        {/* Pilotos */}
        <section>
          <Container>
            <Header title="Pilotos" />

            <div className="grid gap-6 md:grid-cols-2">
              {ngmDrivers.map((item) => (
                <div className="flex w-full overflow-hidden" key={item.id}>
                  <img
                    src={item.wallpaper}
                    className="w-full object-cover"
                    alt={item.name}
                  />
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Carro 2027 */}
        <section className="bg-black md:min-h-[50svh]">
          <Container className="flex flex-col">
            <h2 className="text-center text-[25vw] font-bold lg:text-[18rem]">
              NGM27
            </h2>

            {car.map((item) => (
              <div className="flex h-full w-full flex-col" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="relative mx-auto block w-full max-w-270 lg:top-[-150px]"
                />
              </div>
            ))}
          </Container>
        </section>

        {/* Shopping */}
        <section>
          <Container className="flex flex-col gap-6">
            <Header title="Shopping" />

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-[2rem]">
              {[...products]
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((item) => (
                  <div key={item.id} className="rounded-2xl bg-zinc-950 p-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="aspect-square w-full object-cover"
                    />

                    <div className="p-2">
                      <h2 className="text-md text-zinc-200">{item.name}</h2>

                      <p className="text-xl font-semibold">
                        R$ <span>{item.price}</span>
                      </p>
                    </div>
                  </div>
                ))}
            </div>

            <Button variant="secondary" className="mx-auto mt-4 max-w-fit">
              Ver Todos Produtos
            </Button>
          </Container>
        </section>
      </div>

      {/* Parceiros */}
      <section className="flex min-h-[80svh] items-center bg-zinc-950">
        <Container>
          <div className="grid grid-cols-2 gap-4 px-4 md:gap-8 lg:grid-cols-4">
            <PartnerLogo />
          </div>
        </Container>
      </section>
    </MainTemplate>
  );
}
