// Importa o framework Express para criar rotas
import express from "express";
// Importa a função getUser do controller de usuários
import { getUser } from "../controllers/users.js";

// Cria um roteador do Express para definir rotas relacionadas a usuários
const router = express.Router();

// Define a rota GET / que chama a função getUser
router.get("/", getUser);

// Exporta o roteador para ser usado em outros arquivos
export default router;
