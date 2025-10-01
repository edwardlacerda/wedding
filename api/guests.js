import pkg from "pg";
const { Pool } = pkg;

if (!globalThis._pgPool) {
  globalThis._pgPool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });
}
const pool = globalThis._pgPool;

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const result = await pool.query("SELECT * FROM guests ORDER BY id");
      return res.status(200).json(result.rows);
    }

    if (req.method === "POST") {
      const { name } = req.body;
      const result = await pool.query(
        "UPDATE guests SET confirmed = true WHERE name = $1 RETURNING *",
        [name]
      );

      if (result.rowCount === 0)
        return res.status(404).json({ message: "Convidado não encontrado" });

      return res
        .status(200)
        .json({ message: "Presença confirmada!", guest: result.rows[0] });
    }

    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro interno" });
  }
}
