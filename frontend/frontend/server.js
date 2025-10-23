// frontend/server.js
import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const FRONT_PORT = Number(process.env.FRONT_PORT || 3000);
// En Docker Compose usaremos: http://chame-backend:8000
const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8000";

// Proxy a API/CHAME
app.use("/api",   createProxyMiddleware({ target: BACKEND_URL, changeOrigin: true }));
app.use("/chame", createProxyMiddleware({ target: BACKEND_URL, changeOrigin: true }));

// Servir build de Vite
app.use(express.static(path.join(__dirname, "dist")));// ✅ compatible con Express 5
app.get(/.*/, (_req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});


app.listen(FRONT_PORT, () => {
  console.log(`Frontend listening on :${FRONT_PORT}, proxy -> ${BACKEND_URL}`);
});
