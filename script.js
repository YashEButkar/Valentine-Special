function showSurprise() {
    document.getElementById("surprise").classList.toggle("hidden");
}
// Set the date for countdown (YYYY, MM-1, DD)
const countDownDate = new Date("2028-01-01T14:23:50").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = countDownDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeLeft < 0) {
        document.getElementById("countdown").innerHTML = "It's Time for Our Special Moment! ❤️";
    }
}

setInterval(updateCountdown, 1000);
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 500);

const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

galleryImages.forEach(image => {
    image.addEventListener("click", () => {
        lightbox.classList.remove("hidden");
        lightboxImg.src = image.src;
    });
});

function closeLightbox() {
    lightbox.classList.add("hidden");
}
function playMusic() {
    const music = document.getElementById("bg-music");
    music.play();
}



