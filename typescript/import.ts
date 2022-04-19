import jquery from 'jquery';

jquery();

$.fn.extend({
    novaFuncao(){
        console.log('Chamou nova funcao');
    }
});
$('body').novaFuncao();