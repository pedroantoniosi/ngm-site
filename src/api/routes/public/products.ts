import express from "express";
import type { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

const router = express.Router();

router.get("/products", async (_req: Request, res: Response) => {
  try {
    const products = await prisma.products.findMany({
      orderBy: {
        id: "asc",
      },
    });

    return res.status(200).json(products);
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      error: "Erro ao buscar produtos",
    });
  }
});

export default router;
