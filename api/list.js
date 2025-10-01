import { query } from '../db.js';

export default async function handler(req, res) {
  const { secret } = req.query;

  if (secret !== process.env.ADMIN_SECRET) {
    return res.status(401).json({ message: 'Acesso negado' });
  }

  const convidados = await query('SELECT * FROM guests');
  res.status(200).json(convidados);
}