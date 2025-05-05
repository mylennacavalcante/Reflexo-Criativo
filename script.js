const barras = document.querySelector('.barras');
const barrasMenu = document.getElementById('barrasMenu');

barras.addEventListener("click", () => {
    barrasMenu.classList.toggle("barrasOculto")
})