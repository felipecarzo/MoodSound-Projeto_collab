const express = require("express");
const cors = require("cors");
const axios = require("axios");
const querystring = require("querystring");

const app = express();

require("dotenv").config();
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;


const PORT = process.env.PORT || 4000;


// 🔹 Insira seu CLIENT_ID e CLIENT_SECRET do Spotify
// const CLIENT_ID = "";
// const CLIENT_SECRET = "";
const TOKEN_URL = "https://accounts.spotify.com/api/token";
const SPOTIFY_API_URL = "https://api.spotify.com/v1";

app.use(cors());

// 🔹 Função para obter o token de acesso do Spotify
async function getSpotifyToken() {
    const response = await axios.post(TOKEN_URL, querystring.stringify({
        grant_type: "client_credentials"
    }), {
        headers: {
            "Authorization": "Basic " + Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
    return response.data.access_token;
}

// 🔹 Rota para buscar playlists baseadas no humor do usuário
app.get("/search", async (req, res) => {
    try {
        const { query } = req.query;
        if (!query) {
            return res.status(400).json({ error: "Query parameter is required" });
        }

        console.log(`Buscando playlists para: ${query}`);
        const token = await getSpotifyToken();
        
        const response = await axios.get(`${SPOTIFY_API_URL}/search`, {
            headers: { "Authorization": `Bearer ${token}` },
            params: { q: query, type: "playlist", limit: 5 }
        });

        res.json(response.data);
    } catch (error) {
        console.error("Erro ao buscar músicas:", error);
        res.status(500).json({ error: "Erro ao buscar músicas no Spotify" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});