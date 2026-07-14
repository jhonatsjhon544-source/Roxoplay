// =========================
// RoxoPlay IA - Script Principal
// =========================

// Botão de iluminação
const lightButton = document.getElementById("lightButton");

let lightOn = true;

if (lightButton) {

    lightButton.addEventListener("click", () => {

        lightOn = !lightOn;

        document.body.classList.toggle("lightOff");

        lightButton.textContent =
            "Iluminação do site: " + (lightOn ? "ON" : "OFF");

    });

}

// =========================
// Jogos de exemplo
// =========================

const jogos = [

{
nome:"Snake Neon",
descricao:"A clássica cobrinha em estilo neon."
},

{
nome:"Runner Roxo",
descricao:"Corra desviando de obstáculos."
},

{
nome:"Puzzle IA",
descricao:"Resolva desafios criados por IA."
},

{
nome:"Galaxy Shooter",
descricao:"Destrua naves inimigas."
},

{
nome:"Labirinto 3D",
descricao:"Encontre a saída do labirinto."
}

];

const lista = document.getElementById("gameList");

if(lista){

jogos.forEach(jogo=>{

const card=document.createElement("div");

card.className="game";

card.innerHTML=`

<h3>${jogo.nome}</h3>

<p>${jogo.descricao}</p>

<button class="glass">
Jogar
</button>

`;

lista.appendChild(card);

});

}

// =========================
// Futuro sistema de IA
// =========================

function criarJogoIA(descricao){

alert(
"Em uma versão futura, a IA irá criar um jogo baseado em:\n\n"+descricao
);

}

// =========================
// Publicação de jogos
// =========================

function publicarJogo(nome,descricao){

const novo=document.createElement("div");

novo.className="game";

novo.innerHTML=`

<h3>${nome}</h3>

<p>${descricao}</p>

<button class="glass">
Jogar
</button>

`;

lista.appendChild(novo);

}

// =========================
// Animação dos cards
// =========================

window.addEventListener("scroll",()=>{

document.querySelectorAll(".card").forEach(card=>{

const topo=card.getBoundingClientRect().top;

if(topo<window.innerHeight-80){

card.style.opacity="1";

card.style.transform="translateY(0px)";

}

});

});
const botaoLuz = document.getElementById("lightButton");

if (botaoLuz) {

    botaoLuz.addEventListener("click", function(){

        document.body.classList.toggle("claro");

        if(document.body.classList.contains("claro")){

            botaoLuz.innerHTML = "Iluminação do site: OFF";

        } else {

            botaoLuz.innerHTML = "Iluminação do site: ON";

        }

    });

}
