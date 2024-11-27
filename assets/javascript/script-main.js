const noticias = document.querySelectorAll(".noticia-item");
const indicadores = document.querySelectorAll(".indicador");
let indexAtual = 0;
let temporizador;

function changeNoticia(index) {
  noticias.forEach((noticia, i) => {
    noticia.classList.toggle("active", i === index);
    indicadores[i].classList.toggle("active", i === index);
  });
}

function autoRotateNoticias() {
  indexAtual = (indexAtual + 1) % noticias.length;
  changeNoticia(indexAtual);
}

function restartTimer() {
  clearInterval(temporizador);
  temporizador = setInterval(autoRotateNoticias, 10000);
}

changeNoticia(indexAtual);
temporizador = setInterval(autoRotateNoticias, 10000);

indicadores.forEach((indicador, index) => {
  indicador.addEventListener("click", () => {
    indexAtual = index;
    changeNoticia(indexAtual);
    restartTimer();
  });
});
