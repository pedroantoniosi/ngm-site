import express from "express";
import type { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

const router = express.Router();

router.post("/news", async (req: Request, res: Response) => {
  const { img, title, text, url, tag } = req.body;

  if (!img || !title || !text || !tag) {
    return res.status(400).json({
      error: "img, title, text e tag são obrigatórios",
    });
  }

  try {
    const news = await prisma.news.create({
      data: {
        img,
        title,
        text,
        url: url || "",
        tag,
      },
    });

    return res.status(201).json(news);
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      error: "Erro ao criar notícia",
    });
  }
});

export default router;
