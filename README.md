# MoodSound 🎵

## 📌 Sobre o Projeto
MoodSound é um aplicativo web que recomenda playlists do Spotify com base no humor do usuário. Com uma interface intuitiva, o usuário pode selecionar seu estado emocional e receber sugestões de playlists relacionadas, otimizando sua experiência musical.

🔗 **Repositório no GitHub:** [MoodSound-Projeto_collab](https://github.com/felipecarzo/MoodSound-Projeto_collab)

---

## 🚀 Conhecimentos Aplicados
- Integração com a **API do Spotify** para busca de playlists
- **Frontend com HTML, CSS e JavaScript**
- **Backend com Node.js e Express**
- Uso de **dotenv** para gerenciamento de credenciais
- Controle de versões com **Git e GitHub**

---

## 📂 Estrutura do Projeto
```
/MoodSound-Projeto_collab
│── /frontend
│   ├── index.html  # Página principal do projeto
│   ├── styles.css  # Estilos do projeto
│   ├── app.js  # Lógica do frontend
│
│── /backend
│   ├── server.js  # Servidor Node.js
│   ├── .env  # Configuração de credenciais do Spotify
│
│── README.md  # Documentação do projeto
```

---

## 🛠 Tecnologias Utilizadas
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **API:** Spotify Web API
- **Gerenciamento de dependências:** npm
- **Hospedagem:** (Opcional: Vercel, Heroku, Render, etc.)

---

## 🏗️ Passos para Instalação e Execução

### 1️⃣ Clonar este repositório
```sh
git clone https://github.com/felipecarzo/MoodSound-Projeto_collab.git
```

### 2️⃣ Acessar o diretório do projeto
```sh
cd MoodSound-Projeto_collab
```

### 3️⃣ Instalar as dependências do backend
```sh
cd backend
npm install
```

### 4️⃣ Criar um arquivo `.env` dentro da pasta `backend` e adicionar:
```plaintext
CLIENT_ID=SEU_CLIENT_ID
CLIENT_SECRET=SEU_CLIENT_SECRET
PORT=4000
```
🚨 Substitua `SEU_CLIENT_ID` e `SEU_CLIENT_SECRET` pelos valores reais do Spotify.

### 5️⃣ Rodar o servidor backend
```sh
node server.js
```
Se tudo estiver certo, verá a mensagem: `Servidor rodando na porta 4000`

### 6️⃣ Rodar o frontend
Caso esteja usando VS Code, pode abrir o `index.html` com **Live Server**.
Ou simplesmente abra o arquivo manualmente no navegador.
