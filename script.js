"user strict";

// j'écoute l'évènement "click" de la première touche de ma télécommande
document.querySelector("main > ul > li:nth-of-type(1)").addEventListener("click", (event) => {
  let bruit = new Audio("https://lasonotheque.org/UPLOAD/mp3/1074.mp3"); // je créé un objet audio appelé "bruit"
  bruit.play(); // je joue ce bruit
});

// même chose avec les autres touches de ma télécommande

document.querySelector("main > ul > li:nth-of-type(2)").addEventListener("click", (event) => {
  let bruit = new Audio("https://lasonotheque.org/UPLOAD/mp3/1086.mp3");
  bruit.play();
});

document.querySelector("main > ul > li:nth-of-type(3)").addEventListener("click", (event) => {
  let bruit = new Audio("https://lasonotheque.org/UPLOAD/mp3/0924.mp3");
  bruit.play();
});

document.querySelector("main > ul > li:nth-of-type(4)").addEventListener("click", (event) => {
  let bruit = new Audio("https://lasonotheque.org/UPLOAD/mp3/2142.mp3");
  bruit.play();
});

document.querySelector("main > ul > li:nth-of-type(4)").addEventListener("click", (event) => {
    let bruit = new Audio("https://lasonotheque.org/UPLOAD/mp3/0920.mp3");
    bruit.play();
  });

document.querySelector("main > ul > li:nth-of-type(4)").addEventListener("click", (event) => {
    let bruit = new Audio("https://lasonotheque.org/UPLOAD/mp3/1607.mp3");
    bruit.play();
  });