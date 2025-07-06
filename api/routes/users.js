// Importa o framework Express para criar rotas
import express from "express";
// Importa as funções createUser e getUser do controller de usuários
import { createUser, getUser } from "../controllers/users.js";

// Cria um roteador do Express para definir rotas relacionadas a usuários
const router = express.Router();

// Define a rota GET / que chama a função getUser para listar usuários
router.get("/", getUser);

// Define a rota POST /create que chama a função createUser para criar um novo usuário
router.post("/create", createUser);

// Exporta o roteador para ser usado em outros arquivos
export default router;
