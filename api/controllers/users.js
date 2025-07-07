// Importa a conexão com o banco de dados
import db from "../db/connection.js";

// Função para criar um novo usuário na tabela 'profile'
export const createUser = (req, res) => {
  // Extrai os dados do corpo da requisição
  const { nome, idade, rua, estado, bairro, biografia } = req.body;

  // Extrai o buffer da imagem enviada (caso exista)
  const imagem = req.file ? req.file.buffer : null;
  const tipo_imagem = req.file ? req.file.mimetype : null;

  // Query SQL para inserir um novo usuário, incluindo o campo imagem e tipo_imagem
  const q =
    "INSERT INTO profile (nome, idade, rua, estado, bairro, biografia, imagem, tipo_imagem) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

  // Monta o array de valores para a query
  const values = [nome, idade, rua, estado, bairro, biografia, imagem, tipo_imagem];

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

// Função para buscar a imagem de um usuário pelo id
export const getUserImage = (req, res) => {
  const { id } = req.params;
  const q = "SELECT imagem, tipo_imagem FROM profile WHERE id = ?";
  db.query(q, [id], (err, results) => {
    if (err || results.length === 0 || !results[0].imagem) {
      return res.status(404).send('Imagem não encontrada');
    }
    res.setHeader('Content-Type', results[0].tipo_imagem || 'image/jpeg');
    res.send(results[0].imagem);
  });
};

// Função para atualizar um usuário pelo id
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { nome, idade, rua, estado, bairro, biografia } = req.body;
  let q = "UPDATE profile SET nome=?, idade=?, rua=?, estado=?, bairro=?, biografia=?";
  const values = [nome, idade, rua, estado, bairro, biografia];

  // Se uma nova imagem foi enviada, atualiza também imagem e tipo_imagem
  if (req.file) {
    q += ", imagem=?, tipo_imagem=?";
    values.push(req.file.buffer, req.file.mimetype);
  }
  q += " WHERE id=?";
  values.push(id);

  db.query(q, values, (err, result) => {
    if (err) {
      console.error("Erro MySQL:", err);
      return res.status(500).json({ error: err });
    }
    return res.status(200).json({ message: "Perfil atualizado com sucesso" });
  });
};

// Função para deletar um usuário pelo id
export const deleteUser = (req, res) => {
  const { id } = req.params;
  const q = "DELETE FROM profile WHERE id = ?";
  db.query(q, [id], (err, result) => {
    if (err) {
      console.error("Erro MySQL:", err);
      return res.status(500).json({ error: err });
    }
    return res.status(200).json({ message: "Perfil deletado com sucesso" });
  });
};
