import express from "express";
import type { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

const router = express.Router();

router.get("/news", async (_req: Request, res: Response) => {
  try {
    const news = await prisma.news.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json(news);
  } catch (err) {
    console.error("ERRO AO BUSCAR NOTÍCIAS:", err);

    return res.status(500).json({
      error: "Erro ao buscar notícias",
      details: err instanceof Error ? err.message : String(err),
    });
  }
});

router.get("/news/:slug", async (req: Request, res: Response) => {
  const { slug } = req.params;

  if (typeof slug !== "string") {
    return res.status(400).json({
      error: "Slug inválido",
    });
  }

  try {
    const news = await prisma.news.findUnique({
      where: {
        slug,
      },
    });

    if (!news) {
      return res.status(404).json({
        error: "Notícia não encontrada",
      });
    }

    return res.status(200).json(news);
  } catch (err) {
    console.error("ERRO AO BUSCAR NOTÍCIA:", err);

    return res.status(500).json({
      error: "Erro ao buscar notícia",
    });
  }
});

export default router;
