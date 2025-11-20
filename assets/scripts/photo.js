const driveImages = [
  "https://lh3.googleusercontent.com/d/1GXLcZ0pCWpYbUa07UHMnADxg3R44_Soc",
  "https://lh3.googleusercontent.com/d/1q2-cGb-0PFMtwuyXaaSeEo4271K0gcER",
  "https://lh3.googleusercontent.com/d/1O-TNBtAFlke1N1crEn-HPJOU3hzpfs7n",
  "https://lh3.googleusercontent.com/d/1ufyKkIjuAjGzuQpxFNld10ORSImi65m7",
  "https://lh3.googleusercontent.com/d/1vq3Ge5LnulLApMKU6koLMlHaybIr8h36",
  "https://lh3.googleusercontent.com/d/1u2LC3Y_TbMpldnTL2iLBUlaIornJ31MM",
  "https://lh3.googleusercontent.com/d/1Vtssh3XLssJ24J03RHZuHyOhH56o6rNL",
  "https://lh3.googleusercontent.com/d/14EeaLrD1i246P8rdxz05GzT7dQNhQMa2",
  "https://lh3.googleusercontent.com/d/1aQu2gCdH5cIh4lqul76OFpof-EJWFq1_",
  "https://lh3.googleusercontent.com/d/1BX3R_2BtBnYFzcXRHoeOvYhakxo_ZgKX",
  "https://lh3.googleusercontent.com/d/1OBreaUPOf08CAHnm0EePiEawTb_1QvcX",
  "https://lh3.googleusercontent.com/d/1rRC3qGBEfArZqftmYqacCwAEqcjmw9St",
  "https://lh3.googleusercontent.com/d/1Rv3YyrT6LsPAVo4ysNr2AbapkLm6NlJi",
  "https://lh3.googleusercontent.com/d/1c5IUnLoFkTbSvRqvsrh92bnY6CEIeeZE",
  "https://lh3.googleusercontent.com/d/1f6sY7uakmQKaORuLGj5QJjWgyrnG4Gle",
  "https://lh3.googleusercontent.com/d/1U7xcdPVkbJq8WNiY_-JZq_5vg967Gf0i",
  "https://lh3.googleusercontent.com/d/12pd34HeRuUteHgs9xArwlQ6QYnPHJcaK",
  "https://lh3.googleusercontent.com/d/1lsAwrh6VFg83xOYEPtwTFmq-kUCLo-rf",
  "https://lh3.googleusercontent.com/d/1D5gqKJUT3AO73eSFn-dwtYECsA5q6BXu",
  "https://lh3.googleusercontent.com/d/1",
  "https://lh3.googleusercontent.com/d/1",
  "https://lh3.googleusercontent.com/d/1",
  "https://lh3.googleusercontent.com/d/1",
  "https://lh3.googleusercontent.com/d/1",
  "https://lh3.googleusercontent.com/d/1",
  "https://lh3.googleusercontent.com/d/1",
  "https://lh3.googleusercontent.com/d/1",  
  "https://lh3.googleusercontent.com/d/1",  
  "https://lh3.googleusercontent.com/d/1",  
  "https://lh3.googleusercontent.com/d/1",  
  "https://lh3.googleusercontent.com/d/1",  
  "https://lh3.googleusercontent.com/d/1",  
  "https://lh3.googleusercontent.com/d/1",  
  "https://lh3.googleusercontent.com/d/1",  

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