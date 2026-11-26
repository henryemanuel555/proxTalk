


// Histórico inicial
const historico = {
    "Maria Silva": [
        { tipo: "recebida", texto: "Oi! Tudo bem?" },
        { tipo: "recebida", texto: "Você já terminou a serie que recomendei?" }
    ],
    "João Pedro": [
        { tipo: "enviada", texto: "E aí João, vai poder jogar hoje?" },
        { tipo: "recebida", texto: "Infelizmente não estou ocupado!" }
    ],
    "Carla Souza": [
        { tipo: "recebida", texto: "Vamos testar gta VI quando?" }
    ]
};

let contatoAtual = "Maria Silva";

const caixaMensagens = document.getElementById("caixa-mensagens");
const nomeAtivo = document.getElementById("nome-ativo");
const statusAtivo = document.getElementById("status-ativo");
const formEnvio = document.getElementById("form-envio");
const campoMsg = document.getElementById("campo-msg");
const itensContato = document.querySelectorAll(".contato-item");


function renderizarMensagens() {
    caixaMensagens.innerHTML = "";
    const mensagens = historico[contatoAtual] || [];

    mensagens.forEach((item) => {
        const div = document.createElement("div");
        div.classList.add("msg", item.tipo);
        div.textContent = item.texto;
        caixaMensagens.appendChild(div);
    });

    // Rola para a última mensagem
    caixaMensagens.scrollTop = caixaMensagens.scrollHeight;
}

// Troca a conversa ao clicar em um contato
itensContato.forEach((item) => {
    item.addEventListener("click", () => {
        itensContato.forEach((el) => el.classList.remove("ativo"));
        item.classList.add("ativo");

        contatoAtual = item.dataset.contato;
        nomeAtivo.textContent = contatoAtual;
        statusAtivo.textContent = item.dataset.status;

        renderizarMensagens();
    });
});

// Envia uma mensagem e atualiza a prévia
formEnvio.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const texto = campoMsg.value.trim();
    if (texto === "") return;

    historico[contatoAtual].push({ tipo: "enviada", texto: texto });

    const contatoAtivoEl = document.querySelector(".contato-item.ativo .contato-preview");
    if (contatoAtivoEl) {
        contatoAtivoEl.textContent = "Você: " + texto;
    }

    campoMsg.value = "";
    renderizarMensagens();
});

// Carrega a conversa ao abrir a página
renderizarMensagens();