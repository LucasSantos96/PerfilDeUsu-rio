// Importa a conexão com o banco de dados
import db from "../db/connection.js";

// Função para criar um novo usuário na tabela 'profile'
export const createUser = (req, res) => {
  // Extrai os dados do corpo da requisição
  const { nome, idade, rua, estado, bairro, biografia } = req.body;

  // Query SQL para inserir um novo usuário
  const q =
    "INSERT INTO profile (nome, idade, rua, estado, bairro, biografia) VALUES (?, ?, ?, ?, ?, ?)";

  // Monta o array de valores para a query
  const values = [nome, idade, rua, estado, bairro, biografia];

  // Executa a query no banco de dados
  db.query(q, values, (err, result) => {
    // Se houver erro, exibe o erro no console e retorna status 500 e o erro
    if (err) {
      console.error("Erro MySQL:", err);
      return res.status(500).json({ error: err });
    }
    // Se der certo, retorna mensagem de sucesso
    return res.status(201).json({ message: "Usuário criado com sucesso" });
  });
};

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
