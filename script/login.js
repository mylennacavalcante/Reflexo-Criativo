const login = document.querySelector('.bntLogin');
const fechar = document.querySelector('.fechar');
const caixaLogin = document.querySelector('.ocultoLogin');

login.addEventListener("click", () => {
    caixaLogin.classList.remove("ocultoLogin")
})


fechar.addEventListener("click", () => {
    caixaLogin.classList.add("ocultoLogin")
})