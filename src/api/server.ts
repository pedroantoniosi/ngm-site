import express from "express";

import publicRoutes from "./routes/public";
import privateRoutes from "./routes/private";

const app = express();

app.use(express.json());

//
// ===============================
// PUBLIC ROUTES
// ===============================
//

app.use("/", publicRoutes);

//
// ===============================
// PRIVATE ROUTES
// ===============================
//

app.use("/admin", privateRoutes);

//
// ===============================
// SERVER
// ===============================
//

app.listen(3001, () => {
  console.log("Servidor rodando com sucesso");
});
