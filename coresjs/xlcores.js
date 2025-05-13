document.addEventListener("DOMContentLoaded", function () {
    const menuIcone = document.querySelector(".menuicone img");
    const navMenu = document.querySelector("nav");
    let menuAberto = false; 

    menuIcone.addEventListener("click", function () {
        navMenu.classList.toggle("ativo");
        menuAberto = !menuAberto; 

        if (menuAberto) {
            menuIcone.src = "img/close.png"; 
        } else {
            menuIcone.src = "img/menu.png"; 
        }
    });
    


    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("ativo");
            menuIcone.src = "img/menu.png"; 
            menuAberto = false;
        });
    });
});
const colorOptions = document.querySelectorAll('.color-option');
const carImage = document.getElementById('carImage');

colorOptions.forEach(option => {
    option.addEventListener('click', () => {
        // Muda a imagem do carro
        carImage.src = `img_xl/${option.getAttribute('data-color')}`;


        // Remove a seleção anterior e adiciona na nova
        document.querySelector('.selected')?.classList.remove('selected');
        option.classList.add('selected');
    });
});
