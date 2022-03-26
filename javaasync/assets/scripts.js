// fixa a url que prove a api
// colocar a url completa, com todas as barras
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const btn = document.getElementById('change-cat');

// cria uma arrow funcao assincrona getCats
const getCats = async () => {
	// CONSUMINDO/RECEBENDO UMA API 
	// UTILIZANDO OS METODOS DO FETCH
	const data = await fetch(BASE_URL)
		// entao coloca o resultado do fetch em res, convert res para json
		.then((res) => res.json())
		// se der erro, jogue o erro para o console
		.catch((e) => console.log(e));
	// retorne o valor da chave webpurl da constante data
	return data.webpurl;
};
	
		// UTILIZANDO O METODO TRY-CATCH
		// usamos um try e um catch para testar e apurar os erros
		//  try {
		// 	// como o que retorna é uma promisse, precisamos sempre usar o await antes de invocar os metodos
		// 	// para consumir a api damos um await para que pare a execucao e chame fetch o endereco da api
		// 	// vamos jogar o resultado em uma constante chamada data
		// 	const data = await fetch(BASE_URL);
		// 	// transformamos os dados da constante data em json e salvamos em outra constante chamada json
		// 	const json = await data.json();
		// 	// dentro da estrutura recebida, agora um json, tem uma chave chamada webpurl, que direciona para imagens em webp. por serem imagens mais leves vamos utilizar esse formato.
		// 	// o valor dessa chave é uma url para imagens de gatos em webp
		// 	return json.webpurl;
		// } catch (e) {
		// 	console.log(e.message);
		// }
	//};

	// arrow function - constante para manipular os elementos do DOM
	// funca assyncrona
	// detro da TAG HTML IMG ele joga a imagem buscada na api pela funcao getCats
const loadImg = async () => {
	//const img = document.getElementsByTagName('img')[0];
	const catImg = document.getElementById('cat');
	// img.src = await getCats();
	catImg.src = await getCats();
};

// // cria um evento de escuta para ficar vigiando o botao com o id change-cat
// // assim que o botao é clicado ele executa a funcao assincrona loadimag
btn.addEventListener('click', loadImg);

// chama o loadimg para a pagina ja carregar com uma imagem
loadImg();