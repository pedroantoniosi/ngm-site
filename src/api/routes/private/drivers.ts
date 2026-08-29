import express from "express";
import type { Request, Response } from "express";

import { prisma } from "../../lib/prisma";

const router = express.Router();

// Criar piloto
router.post("/drivers", async (req: Request, res: Response) => {
  const { name, state, team, pts } = req.body;

  if (!name || !state || !team) {
    return res.status(400).json({
      error: "name, state e team são obrigatórios",
    });
  }

  try {
    const driver = await prisma.drivers.create({
      data: {
        name,
        state,
        team,
        pts: Number(pts) || 0,
      },
    });

    return res.status(201).json(driver);
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      error: "Erro ao criar piloto",
    });
  }
});

// Buscar pilotos
router.get("/drivers", async (_req: Request, res: Response) => {
  try {
    const drivers = await prisma.drivers.findMany({
      orderBy: {
        points: "desc",
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
