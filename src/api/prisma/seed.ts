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

  //
  // ===============================
  // CLEAN DATABASE
  // ===============================
  //

  await prisma.drivers.deleteMany();
  await prisma.products.deleteMany();
  await prisma.news.deleteMany();

  console.log("🗑️ Dados antigos removidos");

  //
  // ===============================
  // DRIVERS
  // ===============================
  //

  await prisma.drivers.createMany({
    data: rawDrivers.map((driver) => ({
      name: driver.name,
      state: driver.state,
      team: driver.team,
      points: driver.points,
    })),
  });

  console.log("✅ Drivers enviados");

  //
  // ===============================
  // PRODUCTS
  // ===============================
  //

  await prisma.products.createMany({
    data: rawProducts.map((product) => ({
      name: product.name,
      image: product.image,
      price: product.price,
      tag: product.tag,
      model: product.model,
    })),
  });

  console.log("✅ Products enviados");

  //
  // ===============================
  // NEWS
  // ===============================
  //

  await prisma.news.createMany({
    data: rawNews.map((news) => ({
      image: news.img,
      title: news.title,
      text: news.text,
      url: news.url,
      tag: news.tag,
    })),
  });

  console.log("✅ News enviados");

  //
  // ===============================
  // VALIDATION
  // ===============================
  //

  const driversCount = await prisma.drivers.count();
  const productsCount = await prisma.products.count();
  const newsCount = await prisma.news.count();

  console.log("📊 Dados no banco:");
  console.log(`Drivers: ${driversCount}`);
  console.log(`Products: ${productsCount}`);
  console.log(`News: ${newsCount}`);

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
