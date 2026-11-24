
let personagemSelecionado = null;

// ABRIR A ESCOLHA DE PERSONAGEM

function iniciar() {
    document.getElementById("inicio").style.display = "none";

    document.getElementById("selecao").style.display = "flex";
}


// SELECIONAR PERSONAGEM

function selecionarPersonagem(nome, elemento) {

    personagemSelecionado = nome;

    // Retirar seleção dos outros personagens
    document.querySelectorAll(".personagem").forEach(function(personagem) {
        personagem.classList.remove("selecionado");
    });

    // Destacar personagem escolhido
    elemento.classList.add("selecionado");
}


// CONFIRMAR ESCOLHA E COMEÇAR O JOGO

function confirmarPersonagem() {

    if (personagemSelecionado === null) {
        alert("Escolha um personagem antes de continuar!");
        return;
    }

    document.getElementById("selecao").style.display = "none";

    document.getElementById("jogo").style.display = "flex";

    let emojis = {
        "Luna": "👩🏻‍🔬",
        "Theo": "👨🏽‍🔬",
        "Mia": "👩🏽‍🔬",
        "Leo": "👨🏻‍🔬"
    };

    document.getElementById("personagemEscolhido").innerHTML =
        emojis[personagemSelecionado];

    document.getElementById("mensagem").innerHTML =
        "Olá, " + personagemSelecionado +
        "! Seja bem-vindo à Science Island! " +
        "Prepare-se para explorar nossa feira de ciências!";
}
