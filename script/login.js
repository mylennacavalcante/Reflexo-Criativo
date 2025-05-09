const login = document.querySelector('.bntLogin');
const caixaLogin = document.querySelector('#contaLogin');

login.addEventListener("click", () => {
    caixaLogin.classList.remove("ocultoLogin")
})