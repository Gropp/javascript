// funcao principal
function changeMode() {
	// chama a funcao que muda as classes (mudando os stylos no css)
	changeClasses();
	// chama a funcao que muda os textos do html
	changeText();
}

// Essa funcao troca as classes, inclui as classes nas tags com a funcao toggle, poe se nao tem, e tira se tem :)
function changeClasses() {
	button.classList.toggle(darkModeClass);
	h1.classList.toggle(darkModeClass);
	body.classList.toggle(darkModeClass);
	footer.classList.toggle(darkModeClass);
}

// altera os textos do botao e da pagina
function changeText() {
	// criamos os status em constantes
	const lightMode = 'Light Mode';
	const darkMode = 'Dark Mode';

	// testa o que esta escrito DENTRO DO BOTAO
	// se estiver no modo darkmode ele muda os textos do botao e do h1 e sai da funcao
	// senao ele sai do if e executa o codigo que faz o inverso
	if (body.classList.contains(darkModeClass)) {
		button.innerHTML = lightMode;
		h1.innerHTML = darkMode + ' ON';
		return;
	}
	// altera o texto do botao e do h1 caso o if nao seja true
	button.innerHTML = darkMode;
	h1.innerHTML = lightMode + ' ON';
}

// joga em constate todos os apontadores para os elementos que irao ser manipulados
// por id
const button = document.getElementById('mode-selector');
// por id
const h1 = document.getElementById('page-title');
// por tag name - retorna um array - objetos - o index 0 é o primeiro elemento do array
// seleciona todo o corpo da pagina
const body = document.getElementsByTagName('body')[0];
// selecionamos o elemento footer - que vai ter um comportamento diferente do body
const footer = document.getElementsByTagName('footer')[0];
// joga o nome da classe definida em uma constante
const darkModeClass = 'dark-mode';

// cria um "escutador" de eventos no botao - evento desejado é o clique
button.addEventListener('click', changeMode);
