function atualizarPlaceholders() {
    var quantidadeTotal = parseInt(document.getElementById('tamanho-palavra').value) || 0;
    
    document.getElementById('quantidade-letras').setAttribute('placeholder', 'Máximo: ' + quantidadeTotal + ' caracteres');
    document.getElementById('quantidade-numeros').setAttribute('placeholder', 'Máximo: ' + quantidadeTotal + ' caracteres');
    document.getElementById('quantidade-especiais').setAttribute('placeholder', 'Máximo: ' + quantidadeTotal + ' caracteres');
}

function valoresDinamicos() {
    var quantidade = parseInt(document.getElementById('tamanho-palavra').value) || 0;
    var letras = parseInt(document.getElementById('quantidade-letras').value) || 0;
    var numeros = parseInt(document.getElementById('quantidade-numeros').value) || 0;
    var especiais = parseInt(document.getElementById('quantidade-especiais').value) || 0;
    
    var restante = quantidade - letras - numeros - especiais;

    document.getElementById('quantidade-letras').setAttribute('placeholder', 'Restante: ' + (restante + letras) + ' caracteres');
    document.getElementById('quantidade-letras').setAttribute('max', restante + letras);
    
    document.getElementById('quantidade-numeros').setAttribute('placeholder', 'Restante: ' + (restante + numeros) + ' caracteres');
    document.getElementById('quantidade-numeros').setAttribute('max', restante + numeros);
    
    document.getElementById('quantidade-especiais').setAttribute('placeholder', 'Restante: ' + (restante + especiais) + ' caracteres');
    document.getElementById('quantidade-especiais').setAttribute('max', restante + especiais);

    if (letras + numeros + especiais > quantidade) {
        window.alert("A soma dos campos não pode ser maior que a quantidade total.");
    }
}

function selecionarValor(valor) {
    document.getElementById('tamanho-palavra').value = valor;
}

function uptadeValueInput(value){
    let valor = value;
    document.getElementById('quantidade-letras').setAttribute('placeholder', 'Máximo: ' + valor + ' caracteres');
    document.getElementById('quantidade-numeros').setAttribute('placeholder', 'Máximo: ' + valor + ' caracteres');
    document.getElementById('quantidade-especiais').setAttribute('placeholder', 'Máximo: ' + valor + ' caracteres');
}

function doubleFunctionValues(value){
    let valor = value;
    selecionarValor(valor);
    uptadeValueInput(valor);
}

function ocultarBlocos(){
    let palavra =Number(document.getElementById('tamanho-palavra').value);
    let botoaoProximoLetras = document.getElementById('avancar-letras');
    let botaoProximoNumeros = document.getElementById('avancar-numeros');
    let botaovoltarEspeciais =document.getElementById('voltar-especiais');
    let personalizarSenhaLetras =document.getElementById('gerar-personalizada1');
    let personalizarSenhaNumeros = document.getElementById('gerar-personalizada2');
    let personalizarSenhaEspeciais =document.getElementById('gerar-personalizada3');
    let letras = Number(document.getElementById('quantidade-letras').value);
    let numeros = Number(document.getElementById('quantidade-numeros').value);
    let especiais = Number(document.getElementById('quantidade-especiais').value); 

    if (palavra == letras){
        botoaoProximoLetras.style.display = 'none'
        personalizarSenhaLetras.style.display ="inline-block"
    }
    if (palavra == numeros){
        botaoProximoNumeros.style.display = 'none'
        personalizarSenhaNumeros.style.display ="inline-block"
    }
}
function doubleFunctionButton(){
    valoresDinamicos();
    ocultarBlocos();
}