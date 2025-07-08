# 📱 Sistema de Perfil de Usuários

Um sistema completo para criação, visualização, edição e exclusão de perfis de usuários com upload de imagens.

## 🚀 Tecnologias Utilizadas

### Frontend
- **Next.js 15.3.5** - Framework React com App Router
- **React 19.0.0** - Biblioteca para interface do usuário
- **Tailwind CSS 4** - Framework CSS utilitário
- **ESLint** - Linter para qualidade do código

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js 5.1.0** - Framework web para Node.js
- **MySQL 2.18.1** - Banco de dados relacional
- **Multer 2.0.1** - Middleware para upload de arquivos
- **CORS** - Middleware para Cross-Origin Resource Sharing
- **Nodemon** - Reinicia automaticamente o servidor durante desenvolvimento

## 📁 Estrutura do Projeto

```
PerfilDeUsuarios/
├── api/                    # Backend - API REST
│   ├── controllers/        # Controladores da aplicação
│   │   └── users.js       # Lógica de negócio para usuários
│   ├── db/                # Configuração do banco de dados
│   │   └── connection.js  # Conexão com MySQL
│   ├── routes/            # Rotas da API
│   │   └── users.js       # Endpoints para usuários
│   ├── server.js          # Servidor Express
│   └── package.json       # Dependências do backend
├── frontend/              # Frontend - Next.js
│   ├── src/
│   │   ├── app/           # Páginas do App Router
│   │   ├── components/    # Componentes reutilizáveis
│   │   │   ├── Input.jsx
│   │   │   └── UploadBox.jsx
│   │   └── pages/         # Páginas da aplicação
│   │       ├── CreateProfile.jsx
│   │       └── ViewProfile.jsx
│   └── package.json       # Dependências do frontend
└── README.md
```

## 🛠️ Funcionalidades

### ✨ Principais Recursos
- **Criação de Perfil**: Formulário completo com upload de imagem
- **Visualização de Perfil**: Exibição dos dados do usuário com foto
- **Edição de Perfil**: Modificação de dados existentes
- **Exclusão de Perfil**: Remoção completa do perfil
- **Upload de Imagens**: Suporte a upload e exibição de fotos
- **Validação de Campos**: Verificação de preenchimento obrigatório
- **Interface Responsiva**: Design adaptável com Tailwind CSS

### 📋 Campos do Perfil
- **Nome Completo** (obrigatório)
- **Idade** (obrigatório)
- **Endereço**: Rua, Bairro, Estado (obrigatórios)
- **Biografia** (obrigatório, máximo 500 caracteres)
- **Foto de Perfil** (obrigatória na criação, opcional na edição)

## 🔧 Configuração e Instalação

### Pré-requisitos
- Node.js (versão 18 ou superior)
- MySQL (versão 8.0 ou superior)
- Git

### 1. Clone o repositório
```bash
git clone <https://github.com/LucasSantos96/PerfilDeUsu-rio>
cd PerfilDeUsuarios
```

### 2. Configure o banco de dados
Crie um banco de dados MySQL e configure as variáveis de ambiente:

```bash
# Na pasta api/, crie um arquivo .env
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
DB_PORT=3306
```

### 3. Instale as dependências

#### Backend
```bash
cd api
npm install
```

#### Frontend
```bash
cd frontend
npm install
```

### 4. Execute o projeto

#### Backend (Terminal 1)
```bash
cd api
npm start
```
O servidor estará rodando em `http://localhost:3001`

#### Frontend (Terminal 2)
```bash
cd frontend
npm run dev
```
A aplicação estará disponível em `http://localhost:3000`

## 🗄️ Estrutura do Banco de Dados

### Tabela: usuarios
```sql
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    idade INT NOT NULL,
    rua VARCHAR(255) NOT NULL,
    bairro VARCHAR(255) NOT NULL,
    estado VARCHAR(100) NOT NULL,
    biografia TEXT NOT NULL,
    imagem LONGBLOB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🔌 API Endpoints

### GET `/`
- **Descrição**: Lista todos os usuários
- **Resposta**: Array de objetos com dados dos usuários

### POST `/create`
- **Descrição**: Cria um novo perfil de usuário
- **Body**: FormData com campos do perfil + imagem
- **Resposta**: Confirmação de criação

### GET `/imagem/:id`
- **Descrição**: Retorna a imagem do usuário
- **Parâmetros**: `id` - ID do usuário
- **Resposta**: Imagem em formato blob

### PUT `/update/:id`
- **Descrição**: Atualiza um perfil existente
- **Parâmetros**: `id` - ID do usuário
- **Body**: FormData com campos atualizados
- **Resposta**: Confirmação de atualização

### DELETE `/delete/:id`
- **Descrição**: Remove um perfil
- **Parâmetros**: `id` - ID do usuário
- **Resposta**: Confirmação de exclusão

## 🎨 Componentes Principais

### CreateProfile.jsx
- Formulário de criação de perfil
- Validação de campos obrigatórios
- Upload de imagem obrigatório
- Redirecionamento após criação

### ViewProfile.jsx
- Exibição dos dados do perfil
- Modo de edição inline
- Funcionalidade de exclusão
- Atualização automática após mudanças

### UploadBox.jsx
- Componente para upload de imagens
- Preview da imagem selecionada
- Validação de tipo de arquivo

### Input.jsx
- Componente reutilizável para campos de entrada
- Estilização consistente com Tailwind CSS

## 🚀 Deploy

### Frontend (Vercel)
1. Conecte seu repositório à Vercel
2. Configure as variáveis de ambiente para a URL da API
3. Deploy automático a cada push

### Backend (Railway)
1. **Criar conta**: Acesse [railway.app](https://railway.app) e faça login com GitHub
2. **Conectar repositório**: 
   - Clique em "New Project" → "Deploy from GitHub repo"
   - Selecione seu repositório
   - Configure Root Directory como `api`
3. **Configurar variáveis de ambiente**:
   ```env
   DB_HOST=seu_host_mysql
   DB_USER=seu_usuario
   DB_PASSWORD=sua_senha
   DB_NAME=nome_do_banco
   DB_PORT=3306
   FRONTEND_URL=https://seu-frontend.vercel.app
   ```
4. **Banco de dados**: 
   - Opção A: Use MySQL externo (PlanetScale, AWS RDS)
   - Opção B: Crie MySQL no Railway (New → Database → MySQL)
5. **Deploy automático**: A cada push na branch main
6. **URL da API**: Copie a URL gerada pelo Railway para usar no frontend

## 🔒 Segurança

- **CORS** configurado para permitir comunicação entre frontend e backend
- **Validação** de campos obrigatórios
- **Sanitização** de dados de entrada
- **Upload seguro** de imagens com Multer

## 🐛 Solução de Problemas

### Erro de conexão com banco de dados
- Verifique as variáveis de ambiente no arquivo `.env`
- Confirme se o MySQL está rodando
- Teste a conexão manualmente

### Erro de upload de imagem
- Verifique se o arquivo é uma imagem válida
- Confirme o tamanho máximo permitido
- Verifique as permissões de escrita

### Erro de CORS
- Confirme se o backend está rodando na porta 3001
- Verifique se o CORS está configurado corretamente

## 👨‍💻 Desenvolvedor

**Lucas Santos** - Desenvolvedor Full Stack

## 📄 Licença

Este projeto está sob a licença ISC.

---

⭐ Se este projeto foi útil, considere dar uma estrela no repositório! 