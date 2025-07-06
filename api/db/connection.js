// Importa o módulo mysql para conectar com o banco de dados MySQL
import mysql from "mysql";
// Carrega as variáveis de ambiente do arquivo .env
import dotenv from "dotenv";
dotenv.config()

// Cria uma conexão com o banco de dados MySQL usando as variáveis do .env
const db = mysql.createConnection({
  host: process.env.DB_HOST, // Endereço do servidor MySQL
  user: process.env.DB_USER, // Usuário do banco de dados
  password: process.env.DB_PASSWORD, // Senha do banco de dados
  database: process.env.DB_NAME, // Nome do banco de dados
  port: process.env.DB_PORT, // Porta do banco de dados
});

// Tenta conectar ao banco de dados e exibe mensagem de sucesso ou erro
db.connect((err) => {
  if (err) {
    console.log("Erro ao Conectar no My SQL:", err);
  } else {
    console.log("Conectado");
  }
});
// Exporta a conexão para ser utilizada em outros arquivos do projeto
export default db;
