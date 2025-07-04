// Importa o framework Express para criar o servidor HTTP
import express from "express";

// Importa as rotas de usuário definidas em outro arquivo
import userRoutes from "./routes/users.js";

// Importa o middleware CORS para permitir requisições de outros domínios
import cors from "cors";

// Cria uma instância da aplicação Express
const app = express();

// Configura o Express para aceitar requisições com corpo em JSON
app.use(express.json());

// Habilita o CORS para todas as rotas
app.use(cors());

// Usa as rotas de usuário na raiz do servidor
app.use("/", userRoutes);

// Inicia o servidor na porta 8800
app.listen(8800);
