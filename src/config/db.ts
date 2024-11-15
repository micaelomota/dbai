import { Pool } from "pg";

const pool = new Pool({
  user: "root",
  host: "localhost",
  password: "root",
  database: "local",
  port: 5432,
});

export const query = async (text: string, params?: any[]) => {
  try {
    const res = await pool.query(text, params);
    return res.rows;
  } catch (err) {
    console.error("Database Query Error:", err);
    throw err;
  }
};
