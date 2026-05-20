import express from "express";

import driversRoutes from "./drivers";
import newsRoutes from "./news";
import productsRoutes from "./products";

const router = express.Router();

router.use(driversRoutes);
router.use(newsRoutes);
router.use(productsRoutes);

export default router;
