
const imagemGitHub = document.getElementById('imagemGitHub');
const creditosDiv = document.getElementById('creditos');

imagemGitHub.onmouseover = function() {
    creditosDiv.style.display = 'block';
};

imagemGitHub.onmouseout = function() {
    creditosDiv.style.display = 'none';
};

imagemGitHub.onclick = function() {
    creditosDiv.style.display = 'block';
};

function motrarRecadoComClique(){
    let creditos = document.getElementById("creditos");
    creditos.style.display = "inline-block";
}
function sumirCreditosComClique(){
    let creditos = document.getElementById("creditos");
    creditos.style.display = "none";
}
function motrarRecadoSemClique (){
    let creditos = document.getElementById("creditos");
    creditos.style.display = "inline-block";
}

function esconderSenha(){
    let olhoaberto = document.getElementById("olho-aberto");
    let olhofechado = document.getElementById("olho-fechado");
    olhoaberto.style.display = "none"
    olhofechado.style.display = "inline-block"

    let senha = document.getElementById('senha')
    let campoSenha = document.getElementById('asteriscos');
    let conteudo = campoSenha.textContent;
    let senhaOculta = ''

    for (let i = 0; i < conteudo.length; i++){
        senhaOculta += '*';
    }
    campoSenha.innerText = senhaOculta
    campoSenha.style.display = 'inline-block'
    senha.style.display = 'none'

}
function exibirSenha(){
    let olhoaberto = document.getElementById("olho-aberto");
    let olhofechado = document.getElementById("olho-fechado");
    olhoaberto.style.display = "inline-block"
    olhofechado.style.display = "none"

    document.getElementById('asteriscos').style.display = 'none';
    document.getElementById('senha').style.display = 'inline-block'
}
function apagarTamanhoPalavra(){
    let tamanhoPalavra = document.getElementById("tamanho-palavra");
    tamanhoPalavra.value = "";
}
function copiarParaAreaDeTransferencia() {
    const senhaDiv = document.getElementById('senha');
    const senhaTexto = senhaDiv.innerText;

    const textarea = document.createElement('textarea');
    textarea.value = senhaTexto;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

}
function compartilharFuncao(){

    let campoSenha = document.getElementById('senha').textContent;
    let blocoSenha = document.getElementById("senha-compartilhar");
    let senhaGerada = document.getElementById('senha').textContent

    let blocoContatos = document.getElementById('bloco-contatos')
    blocoContatos.style.display = 'block';

    if (senhaGerada !== 'SUA SENHA AQUI'){
        blocoContatos.style.display = 'block';
        setTimeout(function() {
            blocoContatos.classList.add('mostrar');
        }, 10);
    }else{
        blocoContatos.style.display = 'none';
        window.alert('Voce não gerou nenhuma senha!')
        return;
    }
}

function fecharCompartilhamento(){
    let opcoesDeCompartilhar = document.getElementById("bloco-contatos")
    opcoesDeCompartilhar.classList.remove('mostrar');
    opcoesDeCompartilhar.style.display = "none"
}

function shareViaWhatsApp() {
    let camposenha = document.getElementById("senha");
    if(camposenha.textContent !== 'SUA SENHA AQUI'){
        let senha = document.getElementById('senha').textContent;
        let valorCompartilhar = "SUA SENHA É: ";
        valorCompartilhar += senha;

        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(valorCompartilhar)}`, '_blank');
    }else{
        let valorCompartilhar = "NENHUMA SENHA GERADA";
        
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(valorCompartilhar)}`, '_blank');
    }
}

function shareViaSMS() {
    let camposenha = document.getElementById("senha");
    if(camposenha.textContent !== 'SUA SENHA AQUI'){
        let senha = document.getElementById('senha').textContent;
        let valorCompartilhar = "SUA SENHA É: ";
        valorCompartilhar += senha;

        window.location.href = `sms:?body=${encodeURIComponent(valorCompartilhar)}`;
    }else{
        let valorCompartilhar = "NENHUMA SENHA GERADA";
        window.location.href = `sms:?body=${encodeURIComponent(valorCompartilhar)}`;
    }

}


function mostrarBloco(blocoId) {
    let palavra =Number(document.getElementById("tamanho-palavra").value) || 0;

    if (palavra === 0 && palavra ==''){
        window.alert("Você precisa preencher a quantidade primeiro");
        return;
    }
        document.getElementById('campo-principal').style.display = 'none';
        document.getElementById('bloco-letras').style.display = 'none';
        document.getElementById('bloco-numeros').style.display = 'none';
        document.getElementById('bloco-especiais').style.display = 'none';

        document.getElementById(blocoId).style.display = 'flex';
}

function apagarNumeros(){
    document.getElementById('avancar-numeros').style.display ='inline-block'
    document.getElementById('voltar-numeros').style.display='inline-block'
    document.getElementById('gerar-personalizada2').style.display ='none'
    document.getElementById("quantidade-numeros").value = ''
}
function apagarLetras(){
    document.getElementById('avancar-letras').style.display ='inline-block'
    document.getElementById('voltar-letras').style.display='inline-block'
    document.getElementById('gerar-personalizada1').style.display ='none'
    document.getElementById("quantidade-letras").value = ''
}
function apagarEspeciais(){
    document.getElementById('voltar-especiais').style.display='inline-block'
    document.getElementById('gerar-personalizada3').style.display ='inline-block'
    document.getElementById("quantidade-especiais").value =''
}

function usarSite(){
    document.getElementById("aviso").style.display = 'none';
    document.getElementById("pagina").style.filter = 'none';
}