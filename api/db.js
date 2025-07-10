// Importa o módulo mysql2 para conectar ao MySQL
import mysql from "mysql2";

// Importa o dotenv para carregar variáveis de ambiente do arquivo .env
import dotenv from "dotenv";
dotenv.config(); // Carrega as variáveis de ambiente 

// Cria a conexão com o banco de dados usando as variáveis do .env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,       // Endereço do banco
  user: process.env.DB_USER,       // Usuário do banco
  password: process.env.DB_PASSWORD, // Senha do banco
  database: process.env.DB_NAME,   // Nome do banco 
  port: process.env.DB_PORT,       // Porta do banco
});

// Exporta a conexão para ser usada em outros arquivos
export default connection;