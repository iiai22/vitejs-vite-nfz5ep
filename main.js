// Array de imagens com nomes associados
const imagens = [
  { nome: 'BMW XM ', url: 'https://i.imgur.com/QOyhDrc.jpg' },
  { nome: 'Mercedes GTR', url: 'https://i.imgur.com/1EKcZtW.jpg' },
  { nome: 'Porsche 911', url: 'https://i.imgur.com/ckbtkUK.jpg' },
  { nome: 'PORSCHE 911 GT3RS', url: 'https://i.imgur.com/K62jye3.jpg' },
  { nome: 'HONDA CIVIC', url: 'https://i.imgur.com/ZweUXz0.jpg' },
  { nome: 'SUBARU BRZ', url: 'https://i.imgur.com/06xMuTm.jpg' },
  { nome: 'SUBARU IMPREZA', url: 'https://i.imgur.com/9VXG7ze.jpg' },
  { nome: 'NISSAN GTR R34', url: 'https://i.imgur.com/0rTdw7e.jpg' },
  { nome: 'NISSAN GTR R35', url: 'https://i.imgur.com/KcnK1Da.jpg' },
  { nome: 'Ford Mustang', url: 'https://i.imgur.com/7e9Qv2m.jpg' },
  { nome: 'Chevrolet Camaro', url: 'https://i.imgur.com/2cLKJSA.jpg' },
  { nome: 'BMW 3 Series', url: 'https://i.imgur.com/VZzWKEL.jpg' },
  { nome: 'Toyota Camry', url: 'https://i.imgur.com/BCCNQId.jpg' },
  { nome: 'Mercedes-Benz E-Class', url: 'https://i.imgur.com/xn0C8H0.jpg' },
  { nome: 'Audi A4', url: 'https://i.imgur.com/gQwSa3U.jpg' },
  { nome: 'Volkswagen Golf', url: 'https://i.imgur.com/B5qn3eL.jpg' },
  { nome: 'Nissan Altima', url: 'https://i.imgur.com/sexRJYz.jpg' },
  { nome: 'Hyundai Sonata', url: 'https://i.imgur.com/osT8Ihd.jpg' },
  { nome: 'Kia Optima', url: 'https://i.imgur.com/j1I233U.jpg' },
  { nome: 'Mazda Rx7', url: 'https://i.imgur.com/MV3t2gs.jpg' },
  { nome: 'Tesla Model S', url: 'https://i.imgur.com/fk3xj4j.jpg' },
  { nome: 'Jaguar F-Type', url: 'https://i.imgur.com/1VHV8Hj.jpg' },
  { nome: 'Jeep Wrangler', url: 'https://i.imgur.com/Za5Mlbh.jpg' },
  { nome: 'Volvo XC90', url: 'https://i.imgur.com/LN6pNe9.jpg' },
  { nome: 'Lamborghini Aventador SVJ', url: 'https://i.imgur.com/4gUsLAw.jpg' },
  { nome: 'McLaren 720s', url: 'https://i.imgur.com/B3rPwbq.jpg' },
  { nome: 'McLaren Senna', url: 'https://i.imgur.com/ouzkkMn.jpg' },
  { nome: 'McLaren P1', url: 'https://i.imgur.com/Z4hUa3J.jpg' },
  { nome: 'Toyota Sprinter Trueno', url: 'https://i.imgur.com/kTPW9pS.jpg' },
  { nome: 'Toyota Supra', url: 'https://i.imgur.com/kOdF2BX.jpg' },
  { nome: 'Mitsubishi Eclipse', url: 'https://i.imgur.com/F5jfyBQ.jpg' },
  { nome: 'Mitsubishi Lancer', url: 'https://i.imgur.com/USz1FlS.jpg' },
  { nome: 'Audi R8', url: 'https://i.imgur.com/6SYSpld.jpg' },
  { nome: 'Fiat Uno', url: 'https://i.imgur.com/EGrdvpt.jpg' },
  { nome: 'BMW E36', url: 'https://i.imgur.com/AqEDxds.png' },
  { nome: 'Bugatti Chiron', url: 'https://i.imgur.com/1Id4GSq.jpg' },
  { nome: 'Ferrari 488 Spider', url: 'https://i.imgur.com/5rJzOXo.png' },
  { nome: 'Porsche Carrera GT', url: 'https://i.imgur.com/0IVXlE9.jpg' },
  { nome: 'Lexus LFA', url: 'https://i.imgur.com/1O8TNBs.jpg' },
  { nome: 'Audi RS6', url: 'https://i.imgur.com/7Y86HOC.png' },
  { nome: 'Ferrari F40', url: 'https://i.imgur.com/5qWqCpQ.jpg' },
];

let imagemAtual = null;
let blurValue = 15;
const reducaoBlur = 4;
let tentativasRestantes = 5;
let pontos = 0;
let nomeParcial = '';

const inputNome = document.getElementById('inputNome');
const erroElement = document.getElementById('erro');
const score = document.getElementById('contagem');
const dicaElement = document.getElementById('dica');
const ultimosScoresElement = document.querySelector('.data-container-r ul');
const bestScoreElement = document.querySelector('.data-container-l ul');

// Obter os últimos scores do localStorage ou inicializar um array vazio
let scores = JSON.parse(localStorage.getItem('scores')) || [];

// Atualizar a pontuação
function atualizarPontuacao() {
  score.textContent = `Score: ${pontos}`;
}

// Atualizar a lista de melhores scores no HTML
function atualizarMelhoresScores() {
  bestScoreElement.innerHTML = '';

  for (let i = scores.length - 1; i >= 0; i--) {
    const bestScoreValue = scores[i];
    if (bestScoreValue !== 0) {
      const bestLiElement = document.createElement('li');
      bestLiElement.textContent = `Score: ${bestScoreValue}`;
      bestScoreElement.appendChild(bestLiElement);
    }
  }
}

// Atualizar a lista de últimos scores no HTML
function atualizarUltimosScores() {
  ultimosScoresElement.innerHTML = '';

  for (let i = scores.length - 1; i >= 0; i--) {
    const scoreValue = scores[i];
    if (scoreValue !== 0) {
      const liElement = document.createElement('li');
      liElement.textContent = `Score: ${scoreValue}`;
      ultimosScoresElement.appendChild(liElement);
    }
  }
}

// Exibir uma imagem aleatória, exceto a imagem atual
function exibirImagemAleatoria() {
  atualizarUltimosScores();
  atualizarMelhoresScores();

  const container = document.getElementById('container');
  container.innerHTML = '';

  let novaImagem;
  do {
    novaImagem = imagens[Math.floor(Math.random() * imagens.length)];
  } while (novaImagem === imagemAtual);

  const imgElement = document.createElement('img');
  imgElement.src = novaImagem.url;
  imgElement.style.maxWidth = '100%';
  imgElement.style.maxHeight = '100%';
  imgElement.style.objectFit = 'contain';
  imgElement.style.backgroundColor = '#455559';
  imgElement.style.filter = `blur(${blurValue}px)`;

  container.appendChild(imgElement);

  imagemAtual = novaImagem;
  erroElement.textContent = '';

  blurValue = 15;
  imgElement.style.filter = `blur(${blurValue}px)`;

  tentativasRestantes = 5;

  nomeParcial = '';
  dicaElement.textContent = getDicaFormatada(novaImagem.nome, nomeParcial);
}

// Verificar se o texto inserido corresponde ao nome da imagem atual
function verificarResposta() {
  if (inputNome.value.trim().toLowerCase() === imagemAtual.nome.toLowerCase()) {
    inputNome.value = '';
    pontos++;
    atualizarPontuacao();
    exibirImagemAleatoria();
  } else {
    blurValue -= reducaoBlur;
    if (blurValue < 0) {
      blurValue = 0;
    }

    const container = document.getElementById('container');
    const imgElement = container.querySelector('img');
    imgElement.style.filter = `blur(${blurValue}px)`;

    tentativasRestantes--;
    erroElement.textContent = `Tentativas restantes: ${tentativasRestantes}`;

    if (tentativasRestantes === 0) {
      inputNome.value = '';
      scores.push(pontos); // Adicionar a pontuação atual ao array de scores
      localStorage.setItem('scores', JSON.stringify(scores)); // Salvar os scores no localStorage
      exibirImagemAleatoria();
      pontos = 0;
      atualizarPontuacao();
    }
  }
}

inputNome.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    verificarResposta();
  }
});

exibirImagemAleatoria();
