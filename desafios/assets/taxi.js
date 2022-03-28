let lines = gets().split('\n');

// cria um array onde cada elemento é carregado com a funcao map fazendo um parseFloat de cada entrada.
const [precoAlcool, precoGasolina, rendimentoAlcool, rendimentoGasolina] = lines[0].split(' ').map(x => parseFloat(x));

const precoPorKmAlcool = precoAlcool/rendimentoAlcool;
const precoPorKmGasolina  = precoGasolina/rendimentoGasolina;

const maisEconomico = precoPorKmGasolina <= precoPorKmAlcool? 'G' : 'A';
print(maisEconomico);