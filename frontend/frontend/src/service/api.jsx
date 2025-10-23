import axios from "axios";

export const api = axios.create({
  baseURL: "", // ⬅️ relativo. NO pongas http://localhost:8000
  headers: { "Content-Type": "application/json" },
});

export const PeopleAPI = {
  list: async () => (await api.get("/api/people")).data,
  get: async (id) => (await api.get(`/api/people/${id}`)).data,
  create: async (payload) => (await api.post("/api/people", payload)).data,
  update: async (id, payload) => (await api.put(`/api/people/${id}`, payload)).data,
  remove: async (id) => (await api.delete(`/api/people/${id}`)).data,
};

export const ChameAPI = {
  getFullName: async () => (await api.get("/chame")).data,
};
