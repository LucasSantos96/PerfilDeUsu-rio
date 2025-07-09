# Perfil de Usuários

Sistema fullstack para cadastro, visualização, edição e exclusão de perfis de usuários, com upload de imagem.

## Tecnologias
- **Frontend:** Next.js (Vercel)
- **Backend:** Node.js + Express + MySQL (Railway)
- **Banco:** MySQL na nuvem (Railway)

## Como rodar

### 1. Clonar o repositório
```bash
git clone https://github.com/LucasSantos96/PerfilDeUsu-rio.git
```

### 2. Instalar dependências
```bash
cd api && npm install
cd ../frontend && npm install
```

### 3. Configurar variáveis de ambiente

No Railway (backend), configure:
```
DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT, FRONTEND_URL, NODE_ENV
```
No Vercel (frontend), configure:
```
NEXT_PUBLIC_API_URL=https://SEU_BACKEND.up.railway.app/
```

### 4. Criar tabela no MySQL
Execute no banco:
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
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## Deploy

- **Frontend:** [profileuser.vercel.app](https://profileuser.vercel.app/)
- **Backend:** [perfildeusu-rio.up.railway.app](https://perfildeusu-rio.up.railway.app/)

## Observações

- O backend está configurado para aceitar requisições CORS do frontend em produção.
- As URLs da API no frontend já apontam para o backend em produção.
- Para rodar local, ajuste as URLs conforme necessário.

---

**Desenvolvido por Lucas Santos** 
