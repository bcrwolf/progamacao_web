function adicionarNome(tentativas) {

    var nomeJogador = document.getElementById("nomeJogador1").value

    var tabela = document.getElementsByTagName('table')[0]
    var novaLinha = tabela.insertRow(tabela.length)
    celula1 = novaLinha.insertCell(0)
    celula1.innerHTML = nomeJogador
    celula1 = novaLinha.insertCell(1)
    celula1.innerHTML = tentativas
}






function reset() {

    document.getElementById("nomeJogador1").value = ""
    document.getElementById("numeroDigitado").value = ""
    document.getElementById("numeroAdivinhar").value = ""
    tentativas = 0

}


var numeroPensado = Math.round(Math.random() * 100) //gerador de numero
var tentativas = 0

function verificar() {

    var numeroDigitado = document.getElementById("numeroDigitado").value

    if ((numeroPensado == numeroDigitado)) {
        alert("ACERTOOOOOU MIZERÁVIIII !!!");
        alert(numeroPensado)
        tentativas++
        var m = adicionarNome(tentativas)
            /**var m = adicionarNome(tentativas);**/
        numeroPensado = Math.round(Math.random() * 100)


    } else if ((numeroDigitado > numeroPensado)) {
        alert("VOCE ERRRRRRRROOOOOOU... TENTE NOVAMENTE!, Seu lance foi muito alto ");
        tentativas++
        var n = adicionarNome(tentativas)


    } else if ((numeroDigitado < numeroPensado)) {
        alert("VOCE ERRRRRRRROOOOOOU... TENTE NOVAMENTE!, Seu lance foi muito baixo ");
        tentativas++
        var n = adicionarNome(tentativas)
    }

}

function verificar2() {
    var numeroAdvinhar = document.getElementById("numeroAdivinhar").value
    var numeroDigitado = document.getElementById("numeroDigitado").value
    var mostrar = numeroAdvinhar

    if ((numeroAdvinhar === numeroDigitado)) {
        alert("ACERTOOOOOU GENIIOOO !!!");
        var m = adicionarNome(tentativas);
        numeroAdivinhar = document.getElementById("numeroAdivinhar")

    } else if ((numeroDigitado > numeroAdvinhar)) {
        alert("VOCE ERRRRRRRROOOOOOU... TENTE NOVAMENTE!, Seu lance foi muito alto ");
        tentativas++
        var n = adicionarNome(tentativas)


    } else if ((numeroDigitado < numeroAdvinhar)) {
        alert("VOCE ERRRRRRRROOOOOOU... TENTE NOVAMENTE!, Seu lance foi muito baixo ");
        tentativas++
        var n = adicionarNome(tentativas)

    }


}