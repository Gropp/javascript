// Codigo em JS de uma calculadora
// Curso Dio.me

// funcao com nome - Declarativa
function calculadora() {
    // coloca em uma constante a opção digitada no prompt pelo usuario
    // as opcoes tambem tem que ser numeros para testar nos ifs ou cases
    //  converte a entrada do prompt para tipo NUMERO!
    const operacao =  Number(prompt('Escolha uma operação: \n 1 - Soma (+)\n 2 - Subtraçãp (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira - Resto (%)\n 6 - Potenciação (**)\n 7 - SAIR'));

    // testar a entrada dos dados - validar
    // !operacao testa se o que foi digitado nao é numero, ja que operacao é number
    // como tem 6 operacoes, nao tem opcao maior que 6
    if (!operacao || operacao > 7) {
        alert('Operacao INVALIDA');
        calculadora();
    } else if(operacao == 7) { 
        alert('Finalizado pelo usuário!')
    } else {
        // cria duas variaveis LOCAIS para receber os operandos
        // o prompt assume que os valores recebidos sao strings
        //converter
        let n1 = Number(prompt('Insira o primeiro valor: '));
        // testar as variaveis - se o usuario nao digitar um numero!
        // negativa o tipo da funcao - n1 nao numero ou n2 nao numero
        if (!n1){
            alert('Erro - digite um valor numérico!')
            n1 = Number(prompt('Insira o primeiro valor: '));
        }
        let n2 = Number(prompt('Insira o segundo valor: '));
        if (!n2) {
            alert('Erro - digite um valor numérico!');
            n2 = Number(prompt('Insira o segundo valor: '));
        }
        // declara uma variavel sem inicializar - undefined
        let resultado;
        
        function soma(){
            resultado = n1 + n2;
            alert(`Resultado: ${n1} + ${n2} = ${resultado}`);
            novaoperacao();
        }
        
        function subtracao(){
            resultado = n1 - n2;
            alert(`Resultado: ${n1} - ${n2} = ${resultado}`);
            novaoperacao();
        }
        
        function multiplicacao(){
            resultado = n1 * n2;
            alert(`Resultado: ${n1} * ${n2} = ${resultado}`);
            novaoperacao();
        }

        function divisao(){
            resultado = n1 / n2;
            alert(`Resultado: ${n1} / ${n2} = ${resultado}`);
            novaoperacao();
        }

        function resto(){
            resultado = n1 % n2;
            alert(`Resultado: ${n1} % ${n2} = ${resultado}`);
            novaoperacao();
        }

        function potencia(){
            resultado = n1 ** n2;
            alert(`Resultado: ${n1} ^ ${n2} = ${resultado}`);
            novaoperacao();
        }

        //Mante o programa ativo ou fecha
        function novaoperacao() {
            let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');

            // if aninhados para testar as possibilidades de opçoes e tratar erro - opçao invalida
            if (opcao == 1) {
                calculadora();
            }else if (opcao == 2) {
                alert('FIM!');
            }else {
                alert('OPÇÃO INVALIDA!');
                novaoperacao();
            }
        }


        switch (operacao){
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisao();
                break;
            case 5:
                resto();
                break;
            case 6:
                potencia();
                break;
        }

        // if (operacao == 1) {
        //     soma();
        // } else if (operacao == 2) {
        //     subtracao();
        // } else if (operacao == 3) {
        //     multiplicacao();
        // } else if (operacao == 4) {
        //     divisao();
        // } else if (operacao == 5) {
        //     resto();
        // } else if (operacao == 6) {
        //     potencia();
        // }
    }
}
calculadora();