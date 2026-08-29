import express from "express";
import cors from "cors";

import publicRoutes from "./routes/public";
import privateRoutes from "./routes/private";

const app = express();

app.use(cors());
app.use(express.json());

// PUBLIC ROUTES
app.use("/", publicRoutes);

// PRIVATE ROUTES
app.use("/admin", privateRoutes);

// SERVER
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
