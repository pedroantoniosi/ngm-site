import express from "express";
import type { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

const router = express.Router();

router.post("/news", async (req: Request, res: Response) => {
  const { image, title, text, paragraphs, slug, tag } = req.body;

  if (!image || !title || !text || !paragraphs || !slug || !tag) {
    return res.status(400).json({
      error: "image, title, text, paragraphs, slug e tag são obrigatórios",
    });
  }

  try {
    const news = await prisma.news.create({
      data: {
        image,
        title,
        text,
        paragraphs,
        slug,
        tag,
      },
    });

    return res.status(201).json(news);
  } catch (err) {
    console.error("Erro ao criar notícia:", err);

    return res.status(500).json({
      error: "Erro ao criar notícia",
    });
  }
});

export default router;
