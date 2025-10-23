import { getPool } from "../config/db.js";

export const PeopleModel = {
  async findAll() {
    const pool = await getPool();
    const [rows] = await pool.query(
      "SELECT id, first_name, last_name, created_at FROM people ORDER BY id DESC"
    );
    return rows;
  },

  async findById(id) {
    const pool = await getPool();
    const [rows] = await pool.query(
      "SELECT id, first_name, last_name, created_at FROM people WHERE id = ?",
      [id]
    );
    return rows[0] || null;
  },

  async create({ first_name, last_name }) {
    const pool = await getPool();
    const [result] = await pool.query(
      "INSERT INTO people (first_name, last_name) VALUES (?, ?)",
      [first_name, last_name]
    );
    return this.findById(result.insertId);
  },

  async update(id, { first_name, last_name }) {
    const pool = await getPool();
    const [result] = await pool.query(
      "UPDATE people SET first_name=?, last_name=? WHERE id=?",
      [first_name, last_name, id]
    );
    if (result.affectedRows === 0) return null;
    return this.findById(id);
  },

  async remove(id) {
    const pool = await getPool();
    const [result] = await pool.query("DELETE FROM people WHERE id=?", [id]);
    return result.affectedRows > 0;
  }
};
