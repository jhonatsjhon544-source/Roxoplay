// RoxoPlay AI

const RoxoPlayAI = {
    nome: "RoxoPlay IA",

    responder: function(mensagem) {
        mensagem = mensagem.toLowerCase();

        if (mensagem.includes("olá") || mensagem.includes("oi")) {
            return "Olá! Eu sou a RoxoPlay IA 🤖 Como posso ajudar?";
        }

        if (mensagem.includes("jogo")) {
            return "Posso ajudar com informações sobre jogos 🎮";
        }

        if (mensagem.includes("criar")) {
            return "Vamos criar algo incrível juntos 🚀";
        }

        return "Ainda estou aprendendo, mas vou tentar ajudar você!";
    }
};

function perguntarIA() {
    let entrada = document.getElementById("mensagem").value;
    let chat = document.getElementById("chat");

    let resposta = document.createElement("p");
    resposta.innerHTML = "<b>RoxoPlay IA:</b> " + RoxoPlayAI.responder(entrada);

    chat.appendChild(resposta);
}
