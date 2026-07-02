import express from "express";
import type { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

const router = express.Router();

router.get("/drivers", async (_req: Request, res: Response) => {
  try {
    const drivers = await prisma.drivers.findMany({
      orderBy: {
        id: "asc",
      },
    });

    return res.status(200).json(drivers);
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      error: "Erro ao buscar pilotos",
    });
  }
});

export default router;
