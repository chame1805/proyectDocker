import "dotenv/config";
import app from "./app.js";
import { getPool } from "./config/db.js";

const PORT = process.env.API_PORT || 8000;

(async () => {
  await getPool(); // prueba conexión y crea tabla si falta
  app.listen(PORT, () => {
    console.log(`✅ API MVC corriendo en http://localhost:${PORT}`);
  });
})();
