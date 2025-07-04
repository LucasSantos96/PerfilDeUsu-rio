// Importa o módulo mysql para conectar com o banco de dados MySQL
import mysql from "mysql";

// Cria uma conexão com o banco de dados MySQL usando as credenciais fornecidas
export const db = mysql.createConnection({
  host: "localhost", // Endereço do servidor MySQL
  user: "root", // Usuário do banco de dados
  password: "629321", // Senha do banco de dados
  database: "profileuser", // Nome do banco de dados
});
