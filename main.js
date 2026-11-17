
let x = 48;
let y = 48;
let velocidade = 2;
let etapa = 0;

// INICIAR JOGO

function iniciar() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("jogo").style.display = "block";

    mostrarDialogo(
        "Olá! Seja bem-vindo à Science Island! " +
        "Prepare-se para conhecer nossa Feira de Ciências!"
    );
}

// MOSTRAR DIÁLOGO

function mostrarDialogo(texto) {
    document.getElementById("fala").innerText = texto;
    document.getElementById("dialogo").style.display = "block";
}

// FECHAR E CONTINUAR

function fecharDialogo() {
    document.getElementById("dialogo").style.display = "none";

    if (etapa === 0) {
        mostrarDialogo(
            "Sua missão é explorar as barracas e descobrir " +
            "experimentos incríveis de diferentes áreas da ciência!"
        );
    }

    else if (etapa === 1) {
        document.getElementById("hud").innerHTML =
            "🔬 SCIENCE ISLAND<br>Missão: Explore a feira!";

        document.getElementById("dialogo").style.display = "none";
    }

    etapa++;
}

// MOVIMENTAÇÃO

document.addEventListener("keydown", function(event) {

    if (document.getElementById("jogo").style.display === "none") return;

    if (document.getElementById("dialogo").style.display === "block") return;

    let tecla = event.key.toLowerCase();

    if (tecla === "arrowup" || tecla === "w") y -= velocidade;
    if (tecla === "arrowdown" || tecla === "s") y += velocidade;
    if (tecla === "arrowleft" || tecla === "a") x -= velocidade;
    if (tecla === "arrowright" || tecla === "d") x += velocidade;

    // LIMITES DO CENÁRIO

    x = Math.max(0, Math.min(96, x));
    y = Math.max(0, Math.min(90, y));

    // ATUALIZAR PERSONAGEM

    let jogador = document.getElementById("jogador");

    jogador.style.left = x + "%";
    jogador.style.top = y + "%";

});

