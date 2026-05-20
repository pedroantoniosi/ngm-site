import express from "express";
import type { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

const router = express.Router();

router.post("/drivers", async (req: Request, res: Response) => {
  const { name, state, team, pts } = req.body;

  if (!name || !state || !team) {
    return res.status(400).json({
      error: "name, state e team são obrigatórios",
    });
  }

  try {
    const driver = await prisma.driver.create({
      data: {
        name,
        state,
        team,
        pts: pts || 0,
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

export default router;
