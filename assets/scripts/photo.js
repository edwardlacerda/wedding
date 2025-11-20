const driveImages = [];

// Gerar as imagens (mesmo que faltem arquivos)
for (let i = 1; i <= 873; i++) {
driveImages.push(`assets/images/fotos-casamento/Casamento-N&E-${i}.jpg`);
}

const grid = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Índice atual e controle de direção
let currentIndex = 0;
let lastMove = "next";

// --------------------------
// Criação do grid
// --------------------------
driveImages.forEach((src, index) => {
const img = document.createElement("img");
img.src = src;
img.classList.add("grid-img");

// se a imagem não existir, remover do grid
img.onerror = () => img.remove();

img.addEventListener("click", () => {
currentIndex = index;
openLightbox();
});

grid.appendChild(img);
});

// --------------------------
// Abrir lightbox
// --------------------------
function openLightbox() {
lightbox.style.display = "flex";
lightboxImg.src = driveImages[currentIndex];

// se a imagem não existir, pula automaticamente
lightboxImg.onerror = () => {
if (lastMove === "next") {
nextImage();
} else {
prevImage();
}
};
}

// --------------------------
// Navegação
// --------------------------
function nextImage() {
lastMove = "next";
currentIndex++;
if (currentIndex >= driveImages.length) currentIndex = 0;
openLightbox();
}

function prevImage() {
lastMove = "prev";
currentIndex--;
if (currentIndex < 0) currentIndex = driveImages.length - 1;
openLightbox();
}

// Botões
nextBtn.addEventListener("click", (e) => {
e.stopPropagation();
nextImage();
});

prevBtn.addEventListener("click", (e) => {
e.stopPropagation();
prevImage();
});

// --------------------------
// Fechamento
// --------------------------
lightboxClose.addEventListener("click", () => {
lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
if (e.target === lightbox) lightbox.style.display = "none";
});

// --------------------------
// Teclado
// --------------------------
document.addEventListener("keydown", (e) => {
if (lightbox.style.display !== "flex") return;

if (e.key === "ArrowRight") nextImage();
if (e.key === "ArrowLeft") prevImage();
if (e.key === "Escape") lightbox.style.display = "none";
});
