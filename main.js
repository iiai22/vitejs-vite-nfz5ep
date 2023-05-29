// Array de imagens com nomes associados
const imagens = [
  { nome: 'BMW XM 02', url: 'bmw-xm-02.jpg' },
  { nome: 'Mercedes GTR', url: 'download.jpg' },
  { nome: 'Porsche 911', url: 'porsche.jpg' },
];

let imagemAtual = null;
const inputNome = document.getElementById('inputNome');
const erroElement = document.getElementById('erro');
let blurValue = 15;

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
  imgElement.style.filter = `blur(${blurValue}px)`; // Aplica o blur

  // Adiciona a imagem ao contêiner
  container.appendChild(imgElement);

  // Atualiza a imagem atual
  imagemAtual = novaImagem;

  // Limpa a mensagem de erro
  erroElement.textContent = '';
}

// Verifica se o texto inserido corresponde ao nome da imagem atual
function verificarResposta() {
  if (inputNome.value.trim().toLowerCase() === imagemAtual.nome.toLowerCase()) {
    exibirImagemAleatoria();
    inputNome.value = ''; // Limpa o campo de entrada
    blurValue = 15; // Reseta o valor do blur
  } else {
    blurValue -= 5; // Subtrai 5px do blur
    if (blurValue < 0) {
      blurValue = 0; // Define o valor mínimo do blur como 0
    }
    const container = document.getElementById('container');
    const imgElement = container.querySelector('img');
    imgElement.style.filter = `blur(${blurValue}px)`; // Atualiza o valor do blur na imagem
    erroElement.textContent = 'Errou, tente novamente.'; // Exibe a mensagem de erro
  }
}

// Chama a função para exibir a primeira imagem quando a página carrega
window.onload = function () {
  exibirImagemAleatoria();
  inputNome.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Impede o envio do formulário ao pressionar Enter
      verificarResposta();
    }
  });
};
