// Importa o framework Express para criar o servidor HTTP
import express from "express";

import cors from 'cors'


import dotenv from "dotenv";
dotenv.config()

// Cria uma instância da aplicação Express
const app = express();

// Habilita o CORS para todas as rotas
app.use(cors({
    origin: 'https://profileuser.vercel.app',
    credentials: true
}));

// Configura o Express para aceitar requisições com corpo em JSON
app.use(express.json());

// Importa as rotas de usuário definidas em outro arquivo
import userRoutes from "./routes/users.js";



// Usa as rotas de usuário na raiz do servidor
app.use("/", userRoutes);

// Inicia o servidor na porta 3001
app.listen(3001);
