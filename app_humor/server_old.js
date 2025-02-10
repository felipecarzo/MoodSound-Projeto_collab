const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

app.get("/search", async (req, res) => {
    try {
        const { query } = req.query;
        if (!query) {
            return res.status(400).json({ error: "Query parameter is required" });
        }

        console.log(`Buscando músicas para: ${query}`); // Log para depuração

        const response = await axios.get(`https://api.deezer.com/search?q=${query}`, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
            }
        });

        res.json(response.data); // Retorna os dados para o frontend
    } catch (error) {
        console.error("Erro ao buscar músicas:", error);
        res.status(500).json({ error: "Erro ao buscar músicas no Deezer" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});