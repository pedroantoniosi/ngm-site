import "dotenv/config";

import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  console.log("🚀 Iniciando seed...");

  //
  // ===============================
  // CLEAN DATABASE
  // ===============================
  //

  await prisma.driver.deleteMany();
  await prisma.product.deleteMany();
  await prisma.news.deleteMany();

  console.log("🗑️ Dados antigos removidos");

  //
  // ===============================
  // DRIVERS
  // ===============================
  //

  await prisma.driver.createMany({
    data: [
      {
        name: "Pietro Fit",
        state: "Brazil",
        team: "TBT",
        points: 0,
      },
      {
        name: "Lucas Murno",
        state: "Brazil",
        team: "TBT",
        points: 0,
      },
      {
        name: "Arianderso Melo",
        state: "Brazil",
        team: "TBT",
        points: 0,
      },
      {
        name: "Juscelino Honorato",
        state: "Brazil",
        team: "TBT",
        points: 0,
      },
      {
        name: "Felipe Ferreira",
        state: "Brazil",
        team: "TBT",
        points: 0,
      },
      {
        name: "Jonathan Holohan",
        state: "Brazil",
        team: "TBT",
        points: 0,
      },
      {
        name: "Felipe Muniz",
        state: "Brazil",
        team: "TBT",
        points: 0,
      },
      {
        name: "Roberto Gelinski Jr",
        state: "Brazil",
        team: "TBT",
        points: 0,
      },
      {
        name: "Lázaro Rocha",
        state: "Brazil",
        team: "TBT",
        points: 0,
      },
      {
        name: "Antônio Isaias",
        state: "Brazil",
        team: "TBT",
        points: 0,
      },
      {
        name: "Nathan Marchon",
        state: "Brazil",
        team: "TBT",
        points: 0,
      },
      {
        name: "Romero Jr.",
        state: "Brazil",
        team: "TBT",
        points: 0,
      },
      {
        name: "Eduardo Silvestre",
        state: "Brazil",
        team: "TBT",
        points: 0,
      },
      {
        name: "Giovane Barbosa",
        state: "Brazil",
        team: "NGM eSports",
        points: 0,
      },
      {
        name: "Willian Rodrigues",
        state: "Brazil",
        team: "TBT",
        points: 0,
      },
      {
        name: "Gabriel Almeida",
        state: "Brazil",
        team: "TBT",
        points: 0,
      },
      {
        name: "Miguel Quirino",
        state: "Brazil",
        team: "TBT",
        points: 0,
      },
      {
        name: "Daniel Amorim",
        state: "Brazil",
        team: "TBT",
        points: 0,
      },
      {
        name: "Eduardo Amorim",
        state: "Brazil",
        team: "TBT",
        points: 0,
      },
      {
        name: "Gabriel Krefta",
        state: "Brazil",
        team: "TBT",
        points: 0,
      },
      {
        name: "Gabriel Pecly",
        state: "Brazil",
        team: "TBT",
        points: 0,
      },
      {
        name: "Caio Viana",
        state: "Brazil",
        team: "NGM eSports",
        points: 0,
      },
      {
        name: "Gustavo Brudszenski",
        state: "Brazil",
        team: "TBT",
        points: 0,
      },
      {
        name: "Rafael Danin",
        state: "Brazil",
        team: "TBT",
        points: 0,
      },
    ],
  });

  console.log("✅ Drivers enviados");

  //
  // ===============================
  // PRODUCTS
  // ===============================
  //

  await prisma.product.createMany({
    data: [
      {
        name: "Camisa Oficial",
        image: "",
        price: 89.99,
        tag: "camisas",
        model: "oficial",
      },
      {
        name: "Camisa Alternativa",
        image: "",
        price: 79.99,
        tag: "camisas",
        model: "alternative",
      },
      {
        name: "Boné Oficial",
        image: "",
        price: 89.99,
        tag: "bones",
        model: "oficial",
      },
      {
        name: "Boné Alternativo",
        image: "",
        price: 79.99,
        tag: "bones",
        model: "alternative",
      },
      {
        name: "Mochila Oficial",
        image: "",
        price: 89.99,
        tag: "acessorios",
        model: "oficial",
      },
      {
        name: "Mochila Alternativa",
        image: "",
        price: 79.99,
        tag: "acessorios",
        model: "alternative",
      },
      {
        name: "Bandeira Oficial",
        image: "",
        price: 79.99,
        tag: "acessorios",
        model: "oficial",
      },
      {
        name: "Bandeira Alternativa",
        image: "",
        price: 79.99,
        tag: "acessorios",
        model: "alternative",
      },
    ],
  });

  console.log("✅ Products enviados");

  //
  // ===============================
  // NEWS
  // ===============================
  //

  await prisma.news.createMany({
    data: [
      {
        image: "/src/assets/img/news1.png",
        title: "Testes no Bahrain",
        text: "O motor voltou a roncar e o coração da equipe também! Entramos em uma nova temporada com sede de vitória, paixão renovada e a mesma garra que nos trouxe até aqui. 2025 promete emoções de tirar o fôlego!",
        url: "",
        tag: "videos",
      },
      {
        image: "/src/assets/img/news2.png",
        title: "Uniforme 2026",
        text: "De torcedor para torcedor: criamos um site feito para você viver o automobilismo virtual de perto. Notícias, resultados, bastidores e uma nova forma de sentir a equipe tudo reunido em um só lugar.",
        url: "",
        tag: "fotos",
      },
      {
        image: "/src/assets/img/news3.jpg",
        title: "Aprsentação do carro 2026",
        text: "Prepare o carrinho (e o coração)! Em breve, você poderá vestir as cores da equipe e levar um pedaço da nossa história para casa. Roupas, acessórios e colecionáveis que todo fã vai querer ter.",
        url: "",
        tag: "noticias",
      },
      {
        image: "/src/assets/img/news4.png",
        title: "Adeus 2025",
        text: "Mais que uma cor, uma declaração. Apresentamos o novo visual dos nossos carros: moderno, ousado e cheio de energia. Cada traço carrega o espírito da equipe e o brilho de quem acredita no impossível.",
        url: "",
        tag: "noticias",
      },
      {
        image: "/src/assets/img/news5.png",
        title: "Do virtual ao real: nasce o programa de formação de pilotos",
        text: "Sonhar em ser piloto nunca foi tão possível. Lançamos nosso programa de aprendizagem virtual, criado para descobrir e preparar os talentos que vão acelerar com a gente nas próximas temporadas.",
        url: "",
        tag: "artigos",
      },
    ],
  });

  console.log("✅ News enviados");

  console.log("🎉 Banco populado com sucesso");
}

main()
  .catch((error) => {
    console.error("❌ Erro no seed:");
    console.error(error);

    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
