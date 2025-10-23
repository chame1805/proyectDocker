import { Router } from "express";
import { PeopleController } from "../controllers/people.controller.js";

const r = Router();

// CRUD
r.post("/",      PeopleController.create); // CREATE
r.get("/",       PeopleController.list);   // READ ALL
r.get("/:id",    PeopleController.get);    // READ ONE
r.put("/:id",    PeopleController.update); // UPDATE
r.delete("/:id", PeopleController.remove); // DELETE

export default r;
