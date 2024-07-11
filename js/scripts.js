document.addEventListener("DOMContentLoaded", function() {
    const musicCards = document.querySelectorAll(".music-card");
    const audioPlayer = document.getElementById("audio-player");
    let currentCard = null;

    musicCards.forEach(card => {
        card.addEventListener("click", function() {
            if (currentCard && currentCard !== card) {
                currentCard.classList.remove("expanded");
            }
            if (currentCard !== card) {
                card.classList.add("expanded");
                audioPlayer.src = card.getAttribute("data-audio");
                audioPlayer.play();
                currentCard = card;
            } else {
                card.classList.remove("expanded");
                audioPlayer.pause();
                currentCard = null;
            }
        });
    });
});
