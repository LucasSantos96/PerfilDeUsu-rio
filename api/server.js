// Importa o framework Express para criar o servidor HTTP
import express from "express";

import cors from 'cors';


import dotenv from "dotenv";
dotenv.config()

// Cria uma instância da aplicação Express
const app = express();

const allowedOrigins = [
  'https://profileuser.vercel.app',
  'http://localhost:3000'
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

// Configura o Express para aceitar requisições com corpo em JSON
app.use(express.json());

// Importa as rotas de usuário definidas em outro arquivo
import userRoutes from "./routes/users.js";



// Usa as rotas de usuário na raiz do servidor
app.use("/", userRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
