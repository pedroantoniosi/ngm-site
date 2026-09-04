import "dotenv/config";

import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

import rawDrivers from "../data/drivers";
import rawNews from "../data/news";
import rawProducts from "../data/products";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  console.log("🚀 Iniciando seed...");

  await prisma.drivers.deleteMany();
  await prisma.products.deleteMany();
  await prisma.news.deleteMany();

  console.log("🗑️ Dados antigos removidos");

  await prisma.drivers.createMany({
    data: rawDrivers.map((driver) => ({
      name: driver.name,
      state: driver.state,
      team: driver.team,
      points: driver.points,
    })),
  });

  await prisma.products.createMany({
    data: rawProducts.map((product) => ({
      name: product.name,
      image: product.image,
      price: product.price,
      tag: product.tag,
      model: product.model,
    })),
  });

  await prisma.news.createMany({
    data: rawNews.map((news) => ({
      image: news.img,
      title: news.title,
      text: news.text,
      paragraphs: news.paragraphs,
      slug: news.slug,
      tag: news.tag,
    })),
  });

  console.log(`✅ Drivers: ${rawDrivers.length}`);
  console.log(`✅ Products: ${rawProducts.length}`);
  console.log(`✅ News: ${rawNews.length}`);
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
