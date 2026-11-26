const btn1 = document.getElementById('btn-seguir-1');
const btn2 = document.getElementById('btn-seguir-2');
const btn3 = document.getElementById('btn-seguir-3');
const btn4 = document.getElementById('btn-seguir-4');
const btn5 = document.getElementById('btn-seguir-5');
const btn6 = document.getElementById('btn-seguir-6');

function alternarSeguir(botao) {
    botao.classList.toggle('membro');

    if (botao.classList.contains('membro')) {
        botao.textContent = 'Membro';
    } else {
        botao.textContent = 'Participar';
    }
}

btn1.addEventListener('click', () => alternarSeguir(btn1));
btn2.addEventListener('click', () => alternarSeguir(btn2));
btn3.addEventListener('click', () => alternarSeguir(btn3));
btn4.addEventListener('click', () => alternarSeguir(btn4));
btn5.addEventListener('click', () => alternarSeguir(btn5));
btn6.addEventListener('click', () => alternarSeguir(btn6));