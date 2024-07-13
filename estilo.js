
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
}
function exibirSenha(){
    let olhoaberto = document.getElementById("olho-aberto");
    let olhofechado = document.getElementById("olho-fechado");
    
    olhoaberto.style.display = "inline-block"
    olhofechado.style.display = "none"
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

    alert('Senha copiada para a área de transferência!');
}
function compartilharFuncao(){
   let opcoesDeCompartilhar = document.getElementById("contatos")
   opcoesDeCompartilhar.style.display = "block"
   senha = "aaaaa"
   let blocoSenha = document.getElementById("senha-compartilhar");
   blocoSenha.innerText += senha

}
function fecharCompartilhamento(){
    let opcoesDeCompartilhar = document.getElementById("contatos")
    opcoesDeCompartilhar.style.display = "none"
}

function shareViaWhatsApp() {
    var valorCompartilhar = "Este é o valor que será compartilhado!";
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(valorCompartilhar)}`, '_blank');
}

function shareViaSMS() {
    var valorCompartilhar = "Este é o valor que será compartilhado!";
    window.location.href = `sms:?body=${encodeURIComponent(valorCompartilhar)}`;
}

function shareViaInstagram() {
    var valorCompartilhar = "Este é o valor que será compartilhado!";
    var url = `https://www.instagram.com/direct/inbox/?hl=en&text=${encodeURIComponent(valorCompartilhar)}`;
    window.open(url, '_blank');
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

        document.getElementById(blocoId).style.display = 'block';
}
