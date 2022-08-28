const main = document.getElementById("main");
const placarTag = document.getElementById("placar");
const buttonEncerrar = document.getElementById("encerrar");
let click01 = null;
let click02 = null;
let encontrados = 0;
let placar = 0;

renderizarCartas();

buttonEncerrar.addEventListener("click", () => {
  window.location.assign("../../index.html");
});

function renderizarCartas() {
  const arrDuplicado = [...personagens, ...personagens];
  const personagensEmbaralhados = shuffleArray(arrDuplicado);
  console.log(personagensEmbaralhados);

  for (let i = 0; i < personagensEmbaralhados.length; i++) {
    let carta = document.createElement("img");

    carta.id = personagensEmbaralhados[i].id;

    carta.addEventListener("click", clickCarta);

    carta.src = "./src/img/QuestionBlock.png";
    main.appendChild(carta);
  }
}

function clickCarta(event) {
  const imgClicada = event.target;
  let idClicado = event.target.id;

  let personagemClicado = personagens.find(
    (elemento) => elemento.id == idClicado
  );
  imgClicada.src = personagemClicado.img;

  if (click01 == null) {
    click01 = imgClicada;
  } else {
    click02 = imgClicada;
    testPar();
  }
}

function testPar() {
  if (click01.id == click02.id) {
    console.log("encontrei um par!");
    encontrados++;
    click01 = null;
    click02 = null;

    if (encontrados == 4) {
      placar++;
      placarTag.innerHTML = placar;
      encontrados = 0;

      setTimeout(() => {
        main.innerHTML = "";
        renderizarCartas();
      }, 2000);
    }
  } else {
    setTimeout(() => {
      click01.src = "./src/img/QuestionBlock.png";
      click02.src = "./src/img/QuestionBlock.png";
      click01 = null;
      click02 = null;
    }, 1000);

    console.log("não é par");
  }
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
