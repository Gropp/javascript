let N = 10 //parseInt(gets()); numero total de figurinhas
let M = 7  //parseInt(gets()); numero de figurinhas compradas
let album = []; //matriz resultado - figurinhas nao repetidas
let fig = [1,2,4,3,7,3,6]; //matriz exemplo de figurinhas com repeticoes

for (let i = 0; i < M; i++) {
  //parseInt(gets());
  console.log(fig[i])
  //procura no album resultado se ja existe a figurinha na matriz fig[i]
  //se o valor na posicao i nao existe no array resultado -1, ele inclui
  //com esse teste recursivo, ele vai inserir somente uma vez na matriz resultados os valores nao
  //repetidos do array original fig
  if (album.indexOf(fig[i]) === -1) {
    //se o valor na posicao i do array fig nao existir na matriz album, ele é incluido na matriz.
    album.push(fig[i]);
  }
}
console.log(album);
console.log(N - album.length);