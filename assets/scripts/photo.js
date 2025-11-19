const driveImages = [
  "https://lh3.googleusercontent.com/d/1GXLcZ0pCWpYbUa07UHMnADxg3R44_Soc",
  "https://lh3.googleusercontent.com/d/1q2-cGb-0PFMtwuyXaaSeEo4271K0gcER",
  "https://lh3.googleusercontent.com/d/",
  "https://lh3.googleusercontent.com/d/",
  "https://lh3.googleusercontent.com/d/",
  "https://lh3.googleusercontent.com/d/",
  "https://lh3.googleusercontent.com/d/",
  "https://lh3.googleusercontent.com/d/",
  "https://lh3.googleusercontent.com/d/",
  "https://lh3.googleusercontent.com/d/",
  "https://lh3.googleusercontent.com/d/",
  "https://lh3.googleusercontent.com/d/",
  "https://lh3.googleusercontent.com/d/",
  "https://lh3.googleusercontent.com/d/",
  "https://lh3.googleusercontent.com/d/",
  "https://lh3.googleusercontent.com/d/",
  "https://lh3.googleusercontent.com/d/",
  "https://lh3.googleusercontent.com/d/",
];

const grid = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");

// cria o grid
driveImages.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  img.classList.add("grid-img");

  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = src;
  });

  grid.appendChild(img);
});

// fechar lightbox
lightboxClose.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// fechar clicando no fundo escuro
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
