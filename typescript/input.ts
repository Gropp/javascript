//para informar para o TS que esse input é um input element do HTML, se usa o as...
//como vc esta declarando a constante e ela nao existe, vc coloca o as element no final...
const input = document.getElementById('input') as HTMLInputElement
//cria um pool para o evento de input do html
input.addEventListener('input', (event)=> {
    console.log('Digitei')
    // i vai armazenando os caracteres digitados
    const i = event.currentTarget as HTMLInputElement
    console.log(i.value)
})
