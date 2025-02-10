document.addEventListener("DOMContentLoaded", () => {
    const gameCards = document.querySelectorAll(".game-card");

    gameCards.forEach(card => {
        card.addEventListener("click", () => {
            if (card.dataset.status === "coming-soon") {
                alert("This game is coming soon! Stay tuned.");
            } else {
                alert(`You selected ${card.querySelector("h3").textContent}`);
            }
        });
    });
});