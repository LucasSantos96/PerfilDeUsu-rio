// Importa a conexão já configurada do arquivo db.js
import connection from "./db.js";



console.log("HOST:", process.env.DB_HOST);
console.log("USER:", process.env.DB_USER);
console.log("PASSWORD:", process.env.DB_PASSWORD ? "***" : "NÃO DEFINIDA");
console.log("DB:", process.env.DB_NAME);
console.log("PORT:", process.env.DB_PORT);


// Executa a query para alterar o tamanho da coluna 'nome' na tabela 'usuarios'
connection.query(
    `ALTER TABLE usuarios 
    MODIFY COLUMN nome VARCHAR(255),
    MODIFY COLUMN rua VARCHAR(100),
    MODIFY COLUMN estado VARCHAR(255),
    MODIFY COLUMN bairro VARCHAR(255),
    MODIFY COLUMN biografia VARCHAR(500),
    MODIFY COLUMN imagem TEXT,
    MODIFY COLUMN idade INT;`,
    (err, results) => {
        if (err) {
            // Se ocorrer um erro, exibe a mensagem de erro no console
            console.error("Erro ao alterar coluna:", err);
        } else {
            // Se der certo, exibe mensagem de sucesso
            console.log("Coluna alterada com sucesso!", results);
        }
        // Encerra a conexão com o banco de dados
        connection.end();
    }
);
