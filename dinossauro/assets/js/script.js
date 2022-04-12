// constantes para selecionar os objetos do jogo
// neste caso o dino e o background
// sao constantes pois essas posicoes nao irao mudar
const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
const placar = document.querySelector('.placar');

// inicializa as flags de jumping e gameover
// essas flags evitam que vc pule enquanto esta pulando
// inicializa a posicao em zero
let isJumping = false;
let isGameOver = false;
let position = 0;
let pontos = 0;

// funcao para testar quando a tecla pressionada se levantou
function handleKeyUp(event) {
  // a tecla 32 é o codigo do espaço
  // keycode.info 
  if (event.keyCode === 32) {
    if (!isJumping) {
      // ? chama a função jump()
      jump();
    }
  }
}

// funcao para simular o pulo
function jump() {
  // altera o flag
  isJumping = true;

  // funcao que seta intervalos
  let upInterval = setInterval(() => {
    // testa a posicao y para ver se chegou a 150px
    // parando o objeto dino
    if (position >= 150) {
      // Descendo
      // limpa o contador do intervalo
      clearInterval(upInterval);
      // mesma logica de subida
      let downInterval = setInterval(() => {
        //testa se o objeto chegou na posicao zero da 'descida'
        if (position <= 0) {
          // chegando em zero, limpa o intervalo e muda o flag dizendo que nao esta pulando
          // assim nao da bug no dinossauro
          clearInterval(downInterval);
          isJumping = false;
        } else {
          // ao descer decrementamos o valor da posicao no css
          position -= 20;
          dino.style.bottom = position + 'px';
        }
        // a cada 20 milisegundos esse bloco é repetido
      }, 20);
    } else {
      // Subindo
      //  soma 20px a posicao y inicial
      position += 20;
      // altera o estilo bottom no css da classe dino
      // fazendo ele subir
      dino.style.bottom = position + 'px';
    }
    // a cada 20 milisegundos esse bloco é repetido
  }, 20);
}

// essa funcao cria elementos dinamicos na pagina html
// criando as divs que serao inclusas os cactos
function createCactus() {
  // cria uma div no documento e coloca esse objeto na constante cactus
  const cactus = document.createElement('div');
  // posiciona o cactus a direita da tela posicao 1000px
  let cactusPosition = 1000;
  // cria um valor randomico de até 6000 milisegundos para criar os cactus 
  let randomTime = Math.random() * 6000; 

  // testa se nao acabou o joga antes de dar spawn em novos cactus
  // se o jogo acabou ele sai do loop
  if (isGameOver) return;

  // cria uma classe chamada cactus na div criada
  cactus.classList.add('cactus');
  // dentro da div background colocamos o filho cactus
  background.appendChild(cactus);
  // pega a propriedade left do css e atualiza a posicao
  cactus.style.left = cactusPosition + 'px';

  // novamente usamos o setinterval para rodar em loop esse bloco de codigo
  // que sao a criacao e o movimento dos cactus
  let leftTimer = setInterval(() => {
    // testa se o cactus sai da tela
    if (cactusPosition < -60) {
      // limpa o intervalo
      clearInterval(leftTimer);
      // remove o elemento cactus da html
      background.removeChild(cactus);
      // marca a pontuacao
      pontos = pontos + 100;
      placar.innerHTML = pontos;

      // aqui ele testa se a posicao do cactus e a posicao do dinossauro estao se sobrepondo
      // alterei a posicao para 80 pois dei 20px de margem esquerda no dino no css
    } else if (cactusPosition > 0 && cactusPosition < 80 && position < 60) {
      // se as posicoes se sobrepuserem o jogo acaba, pois o dinossauro bateu no cactus
      // Game over
      clearInterval(leftTimer);
      // seta o flag para true
      isGameOver = true;
      // modifica todo o corpo do html para mostrar essa mensagem
      document.body.innerHTML = `<h1 class="game-over">Fim de jogo <br/><br/> Você conseguiu ${pontos} pontos</h1>`;
      // se o cactus nao sair da tela, continua andando
    } else {
      // aqui é o px de deslocamento do cactus para a esquerda
      cactusPosition -= 10;
      cactus.style.left = cactusPosition + 'px';
    }
    // a cada 20 milisegundos essa funcao se repete
  }, 20);

  // funcao que pega um numero aleatorio para criar novos cactus no jogo
  // assim aumenta a dificuldade e a aleatoriedade do aparecimento dos cactus
  // chamada recursiva da funcao createcactus
  setTimeout(createCactus, randomTime);
}

// coloca a pontuacao no jogo
placar.innerHTML = pontos;
createCactus();
document.addEventListener('keyup', handleKeyUp);
