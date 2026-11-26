document.getElementById('formlg').addEventListener('submit', (e) =>{
    e.preventDefault();
    const email = document.getElementById('email').value;
    const senha =document.getElementById('senha').value;

    if (email.trim() === ''){
        alert('Preencha o email!');
    } else if (senha.trim() === ''){
        alert('Preencha sua senha!');
    } else {
        window.location = 'homepg.html';
    }    
});