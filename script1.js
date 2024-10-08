function gerarIndice(quant) {
    return Math.floor(Math.random() * quant);
}

function senhaAleatoria() {
    let quantidade = Number(document.getElementById("tamanho-palavra").value);
    const palavra = "|/}Ww:VvQqDd.,Uu@<JjCcv&*5{GgHhBb^+Mm-]_1=IiRr;2TtOoFf$7n3>KkYyEe[(Xx!Ll6%8Zz4Aa#9Pp";
    let senhaAleatoria = '';

    for (let i = 0; i < quantidade; i++) {
        let indiceAleatorio = gerarIndice(palavra.length);
        senhaAleatoria += palavra[indiceAleatorio];
    }
    return senhaAleatoria;
}

function gerarLetras() {
    let quantidadeLetras = Number(document.getElementById("quantidade-letras").value);

    const letras = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
    let senhaLetras = '';

    for (let i = 0; i < quantidadeLetras; i++) {
        let indiceAleatorio = gerarIndice(letras.length);
        senhaLetras += letras[indiceAleatorio];
    }
    return senhaLetras;
}

function gerarNumeros() {
    let quantidadeNumeros = Number(document.getElementById("quantidade-numeros").value);

    const numeros = "0123456789";
    let senhaNumeros = '';

    for (let i = 0; i < quantidadeNumeros; i++) {
        let indiceAleatorio = gerarIndice(numeros.length);
        senhaNumeros += numeros[indiceAleatorio];
    }
    return senhaNumeros;
}

function gerarEspeciais() {
    let quantidadeEspeciais = Number(document.getElementById("quantidade-especiais").value);

    const especiais = "!@#$%^&*()-_+={}[]|\\:;'<>?,./~`";
    let senhaEspeciais = '';

    for (let i = 0; i < quantidadeEspeciais; i++) {
        let indiceAleatorio = gerarIndice(especiais.length);
        senhaEspeciais += especiais[indiceAleatorio];
    }
    return senhaEspeciais;
}

function embaralharString(string) {
    return string.split('').sort(() => 0.5 - Math.random()).join('');
}

function senhaPersonalizada(){
    let senhaLetras = gerarLetras();
    let senhaNumeros = gerarNumeros();
    let senhaEspeciais = gerarEspeciais();

    let senhaCompleta = senhaLetras + senhaNumeros + senhaEspeciais;
    senhaCompleta = embaralharString(senhaCompleta);

    return senhaCompleta;
}

function gerarSenhaPersonalizada(){
    let senhaP = senhaPersonalizada()
    let letras = Number(document.getElementById("quantidade-letras").value);
    let numeros = Number(document.getElementById("quantidade-numeros").value);
    let especiais = Number(document.getElementById("quantidade-especiais").value);
    let quantidade = Number(document.getElementById("tamanho-palavra").value);
    let senhadiv = document.getElementById("senha")

    if (letras + numeros + especiais !== quantidade) {
        window.alert("A soma dos campos não corresponde à quantidade total desejada.");
        return;
    }
    if(quantidade > 0){
        let camposenha = document.getElementById("senha")
        camposenha.innerText = embaralharString(senhaP);
    
        let asteriscos =  document.getElementById("asteriscos")
        asteriscos.innerText = camposenha.textContent;
    }
    if(senhadiv.textContent !== 'SUA SENHA AQUI'){
        document.getElementById('boneco1').style.display ='none'
        document.getElementById('boneco2').style.display ='block'
    }

    let blocoEspeciais = window.getComputedStyle(document.getElementById('bloco-especiais')).display == 'flex';

    if(blocoEspeciais){
        document.getElementById('dado3').style.display='none'
        document.getElementById('dado3B').style.display='block'
    }
}

function gerarSenhaAleatoria() {
    let camposenha = document.getElementById("senha")
    let asteriscos = document.getElementById("asteriscos")
    let quantidade = Number(document.getElementById("tamanho-palavra").value);    
    let senha = senhaAleatoria()
    if(quantidade > 0){
        camposenha.innerText = embaralharString(senha);
        asteriscos.innerText = camposenha.textContent;
    }
    if(camposenha.textContent !== 'SUA SENHA AQUI'){
        document.getElementById('boneco1').style.display ='none'
        document.getElementById('boneco2').style.display ='block'
    }
}
