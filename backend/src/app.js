import express from "express";
import cors from "cors";
import path from "node:path";
import routes from "./routes/index.js";

const app = express();
app.use(cors());
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src", "views"));

app.use(routes);

// Manejo de errores
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error("❌ Error:", err);
  res.status(500).json({ error: "internal_error" });
});

export default app;
