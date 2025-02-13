document.getElementById("noButton").addEventListener("mouseover", function () {
    const button = this;
    const maxX = window.innerWidth - button.clientWidth;
    const maxY = window.innerHeight - button.clientHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    button.style.position = "absolute";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
});
