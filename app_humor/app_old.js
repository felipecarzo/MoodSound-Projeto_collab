document.addEventListener("DOMContentLoaded", () => {
    const moodButtons = document.querySelectorAll(".mood");
    const songsList = document.getElementById("songs-list");

    moodButtons.forEach(button => {
        button.addEventListener("click", () => {
            const mood = button.getAttribute("data-mood");
            fetchSongsFromBackend(mood);
        });
    });

    function fetchSongsFromBackend(mood) {
        songsList.innerHTML = "<li>Carregando...</li>";
        
        const moodQuery = {
            happy: "happy",
            sad: "sad",
            relaxed: "chill",
            energetic: "workout"
        };

        const query = moodQuery[mood] || "pop";
        const url = `http://localhost:4000/search?query=${query}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                songsList.innerHTML = "";
                if (data && data.data && data.data.length > 0) {
                    data.data.slice(0, 5).forEach(track => {
                        const li = document.createElement("li");
                        li.innerHTML = `
                            <img src="${track.album.cover_small}" alt="Album Cover">
                            <div>
                                <strong>${track.artist.name}</strong> - ${track.title}
                                <br>
                                <audio controls>
                                    <source src="${track.preview}" type="audio/mpeg">
                                    Seu navegador não suporta a reprodução de áudio.
                                </audio>
                                <br>
                                <a href="${track.link}" target="_blank">🔗 Ouça no Deezer</a>
                            </div>
                        `;
                        songsList.appendChild(li);
                    });
                } else {
                    songsList.innerHTML = "<li>Nenhuma música encontrada.</li>";
                }
            })
            .catch(error => {
                console.error("Erro ao buscar músicas:", error);
                songsList.innerHTML = `<li>Erro ao carregar músicas: ${error.message}</li>`;
            });
    }
});
