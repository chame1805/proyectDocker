import { PeopleModel } from "../models/people.model.js";

function bad(res, msg) {
  return res.status(400).json({ error: msg });
}

export const PeopleController = {
  // CREATE
  async create(req, res, next) {
    try {
      const { first_name, last_name } = req.body || {};
      if (!first_name || !last_name) return bad(res, "first_name and last_name are required");
      const created = await PeopleModel.create({
        first_name: String(first_name).trim(),
        last_name: String(last_name).trim(),
      });
      res.status(201).json(created);
    } catch (e) { next(e); }
  },

  // READ ALL
  async list(req, res, next) {
    try {
      const rows = await PeopleModel.findAll();
      res.json(rows);
    } catch (e) { next(e); }
  },

  // READ ONE
  async get(req, res, next) {
    try {
      const person = await PeopleModel.findById(req.params.id);
      if (!person) return res.status(404).json({ error: "Not found" });
      res.json(person);
    } catch (e) { next(e); }
  },

  // UPDATE
  async update(req, res, next) {
    try {
      const { first_name, last_name } = req.body || {};
      if (!first_name || !last_name) return bad(res, "first_name and last_name are required");
      const updated = await PeopleModel.update(req.params.id, {
        first_name: String(first_name).trim(),
        last_name: String(last_name).trim(),
      });
      if (!updated) return res.status(404).json({ error: "Not found" });
      res.json(updated);
    } catch (e) { next(e); }
  },

  // DELETE
  async remove(req, res, next) {
    try {
      const ok = await PeopleModel.remove(req.params.id);
      if (!ok) return res.status(404).json({ error: "Not found" });
      res.status(204).end();
    } catch (e) { next(e); }
  }
};
