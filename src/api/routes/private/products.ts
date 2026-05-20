import express from "express";
import type { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

const router = express.Router();

router.post("/products", async (req: Request, res: Response) => {
  const { name, image, price, tag, model } = req.body;

  if (!name || !price || !tag || !model) {
    return res.status(400).json({
      error: "name, price, tag e model são obrigatórios",
    });
  }

  try {
    const product = await prisma.product.create({
      data: {
        name,
        image: image || "",
        price,
        tag,
        model,
      },
    });

    return res.status(201).json(product);
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      error: "Erro ao criar produto",
    });
  }
});

export default router;
