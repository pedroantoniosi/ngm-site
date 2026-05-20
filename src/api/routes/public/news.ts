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
    console.error(err);

    return res.status(500).json({
      error: "Erro ao buscar notícias",
    });
  }
});

export default router;
