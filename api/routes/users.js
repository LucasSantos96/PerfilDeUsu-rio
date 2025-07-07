// Importa o framework Express para criar rotas
import express from "express";
// Importa as funções createUser, getUser, getUserImage, updateUser e deleteUser do controller de usuários
import { createUser, getUser, getUserImage, updateUser, deleteUser } from "../controllers/users.js";
import multer from "multer";

// Cria um roteador do Express para definir rotas relacionadas a usuários
const router = express.Router();

// Configuração do multer para armazenar a imagem em memória (para salvar como BLOB)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Define a rota GET / que chama a função getUser para listar usuários
router.get("/", getUser);

// Define a rota POST /create que chama a função createUser para criar um novo usuário
router.post("/create", upload.single("imagem"), createUser);

// Rota para servir a imagem do usuário
router.get("/imagem/:id", getUserImage);

// Rota para atualizar perfil
router.put("/update/:id", upload.single("imagem"), updateUser);

// Rota para deletar perfil
router.delete("/delete/:id", deleteUser);

// Exporta o roteador para ser usado em outros arquivos
export default router;
