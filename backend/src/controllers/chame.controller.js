import { ChameModel } from "../models/chame.model.js";

export const ChameController = {
  json(req, res) {
    res.json(ChameModel.getFullName());
  },
  view(req, res) {
    const data = ChameModel.getFullName();
    res.render("index", { title: "Bienvenido", fullName: data.fullName });
  },
};
