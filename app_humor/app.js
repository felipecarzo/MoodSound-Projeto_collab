document.addEventListener("DOMContentLoaded", () => {
    const moodButtons = document.querySelectorAll(".mood");
    const songsList = document.getElementById("songs-list");

    moodButtons.forEach(button => {
        button.addEventListener("click", () => {
            const mood = button.getAttribute("data-mood");
            fetchPlaylistsFromBackend(mood);
        });
    });

    function fetchPlaylistsFromBackend(mood) {
        songsList.innerHTML = "<li>Carregando...</li>";
        
        const moodQuery = {
            happy: "happy",
            sad: "sad",
            relaxed: "chill",
            energetic: "workout"
        };

        const query = moodQuery[mood] || "pop";
        const url = `http://localhost:4000/search?query=${query}`;

        console.log("🔍 Buscando playlists para:", query);
        console.log("📡 URL da requisição:", url);

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("📥 Dados recebidos da API Spotify:", data);

                songsList.innerHTML = "";
                if (data?.playlists?.items?.length > 0) {
                    data.playlists.items
                        .filter(playlist => playlist !== null) // 🔹 Filtra playlists nulas
                        .slice(0, 5)
                        .forEach(playlist => {
                            console.log("🎵 Playlist encontrada:", playlist);

                            const imageUrl = playlist.images?.[0]?.url || "https://via.placeholder.com/100";

                            const li = document.createElement("li");
                            li.innerHTML = `
                                <img src="${imageUrl}" alt="Playlist Cover" width="100">
                                <div>
                                    <strong>${playlist.name}</strong>
                                    <br>
                                    <a href="${playlist.external_urls.spotify}" target="_blank">🎵 Ouça no Spotify</a>
                                </div>
                            `;
                            songsList.appendChild(li);
                        });
                } else {
                    songsList.innerHTML = "<li>Nenhuma playlist encontrada.</li>";
                }
            })
            .catch(error => {
                console.error("❌ Erro ao buscar playlists:", error);
                songsList.innerHTML = `<li>Erro ao carregar playlists: ${error.message}</li>`;
            });
    }
