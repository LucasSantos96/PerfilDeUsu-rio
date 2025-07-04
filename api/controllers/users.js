// Importa a conexão com o banco de dados
import { db } from "../db.js";

// Função para buscar todos os usuários da tabela 'profile'
export const getUser = (_, res) => {
  // Query SQL para selecionar todos os registros da tabela 'profile'
  const q = "SELECT * FROM profile";

  // Executa a query no banco de dados
  db.query(q, (err, data) => {
    // Se houver erro, retorna o erro em formato JSON
    if (err) return res.json(err);

    // Se não houver erro, retorna os dados com status 200
    return res.status(200).json(data);
  });
};
