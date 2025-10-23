import { Router } from "express";
import { ChameController } from "../controllers/chame.controller.js";

const r = Router();

r.get("/", ChameController.json);
r.get("/view", ChameController.view);

export default r;
