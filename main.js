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
const inputNome = document.getElementById('inputNome');
const erroElement = document.getElementById('erro');
let blurValue = 15;
const reducaoBlur = 4;
let tentativasRestantes = 5;
let pontos = 0;
const score = document.getElementById('contagem');
let nomeParcial = '';

// Atualiza a pontuação
score.textContent = `Score: ${pontos}`;

// Função para atualizar a pontuação
function atualizarPontuacao() {
  score.textContent = `Score: ${pontos}`;
}

// Função para exibir uma imagem aleatória, exceto a imagem atual
function exibirImagemAleatoria() {
  const container = document.getElementById('container');
  container.innerHTML = ''; // Limpa o contêiner

  // Seleciona uma imagem aleatória, exceto a imagem atual
  let novaImagem;
  do {
    novaImagem = imagens[Math.floor(Math.random() * imagens.length)];
  } while (novaImagem === imagemAtual);

  // Cria um elemento de imagem
  const imgElement = document.createElement('img');
  imgElement.src = novaImagem.url;
  imgElement.style.maxWidth = '100%'; // Define a largura máxima como 100%
  imgElement.style.maxHeight = '100%'; // Define a altura máxima como 100%
  imgElement.style.objectFit = 'contain'; // Ajusta a escala para caber no contêiner
  imgElement.style.backgroundColor = '#455559';
  imgElement.style.filter = `blur(${blurValue}px)`; // Aplica o blur

  // Adiciona a imagem ao contêiner
  container.appendChild(imgElement);

  // Atualiza a imagem atual
  imagemAtual = novaImagem;

  // Limpa a mensagem de erro
  erroElement.textContent = '';

  // Reseta o valor do blur
  blurValue = 15;
  imgElement.style.filter = `blur(${blurValue}px)`;

  // Redefine o número de tentativas restantes para 5
  tentativasRestantes = 5;

  // Limpa o nome parcial (dica)
  nomeParcial = '';
  document.getElementById('dica').textContent = getDicaFormatada(
    novaImagem.nome,
    nomeParcial
  );
}

// Verifica se o texto inserido corresponde ao nome da imagem atual
function verificarResposta() {
  if (inputNome.value.trim().toLowerCase() === imagemAtual.nome.toLowerCase()) {
    inputNome.value = ''; // Limpa o campo de entrada
    pontos++; // Soma 1 ponto
    atualizarPontuacao(); // Atualiza a pontuação
    exibirImagemAleatoria();
  } else {
    blurValue -= reducaoBlur; // Subtrai o valor de reducaoBlur do blur
    if (blurValue < 0) {
      blurValue = 0; // Define o valor mínimo do blur como 0
    }
    const container = document.getElementById('container');
    const imgElement = container.querySelector('img');
    imgElement.style.filter = `blur(${blurValue}px)`; // Atualiza o valor do blur na imagem
    tentativasRestantes--; // Reduz o número de tentativas restantes
    if (tentativasRestantes === 0) {
      exibirMensagemPerdeu();
    } else {
      const nome = imagemAtual.nome;
      let letrasDisponiveis = getLetrasDisponiveis(nome, nomeParcial);
      let letraDica =
        letrasDisponiveis[Math.floor(Math.random() * letrasDisponiveis.length)];
      nomeParcial += letraDica;
      erroElement.textContent = `Errou, tente novamente.
Tentativas restantes: ${tentativasRestantes}
Dica: ${getDicaFormatada(nome, nomeParcial)}`;
    }
  }
}

// Função para obter as letras disponíveis para a dica
function getLetrasDisponiveis(nomeCompleto, nomeParcial) {
  const letrasDisponiveis = [];
  for (let i = 0; i < nomeCompleto.length; i++) {
    const char = nomeCompleto[i];
    if (char !== ' ' && nomeParcial.indexOf(char) === -1) {
      letrasDisponiveis.push(char);
    }
  }
  return letrasDisponiveis;
}

// Função para obter a dica formatada com espaços
function getDicaFormatada(nomeCompleto, nomeParcial) {
  let dicaFormatada = '';
  for (let i = 0; i < nomeCompleto.length; i++) {
    const char = nomeCompleto[i];
    if (char === ' ') {
      dicaFormatada += ' '; // Mantém o espaço na dica
    } else if (nomeParcial.indexOf(char) !== -1) {
      dicaFormatada += char; // Mostra as letras corretas da dica
    } else {
      dicaFormatada += '_'; // Substitui as letras faltantes por underscores
    }
  }
  return dicaFormatada;
}

// Exibe a mensagem de perda e reinicia o jogo
function exibirMensagemPerdeu() {
  exibirImagemAleatoria();
  erroElement.textContent = 'PERDEU BOBÃO';
  pontos = 0; // Reseta o score para zero
  atualizarPontuacao(); // Atualiza a pontuação
  nomeParcial = '';

  setTimeout(() => {
    erroElement.textContent = '';
  }, 3000);
}

// Evento de tecla Enter no campo de entrada
inputNome.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    verificarResposta();
  }
});

// Exibe a primeira imagem
exibirImagemAleatoria();
