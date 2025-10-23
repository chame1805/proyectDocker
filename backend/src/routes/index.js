import { Router } from "express";
import chameRoutes from "./chame.routes.js";
import peopleRoutes from "./people.routes.js";

const r = Router();

r.use("/chame", chameRoutes);
r.use("/api/people", peopleRoutes);

r.get("/health", (req, res) => res.json({ ok: true }));

export default r;
