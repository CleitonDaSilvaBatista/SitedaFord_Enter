document.addEventListener("DOMContentLoaded", function () {
    class Menu {
        constructor(menuIconeSelector, navMenuSelector) {
            this.menuIcone = document.querySelector(menuIconeSelector);
            this.navMenu = document.querySelector(navMenuSelector);
            this.menuAberto = false;

            this.menuIcone.addEventListener("click", () => this.toggleMenu());
            document.querySelectorAll("nav a").forEach(link => {
                link.addEventListener("click", () => this.fecharMenu());
            });
        }

        toggleMenu() {
            this.navMenu.classList.toggle("ativo");
            this.menuAberto = !this.menuAberto;
            this.menuIcone.src = this.menuAberto ? "img/close.png" : "img/menu.png";
        }

        fecharMenu() {
            this.navMenu.classList.remove("ativo");
            this.menuIcone.src = "img/menu.png";
            this.menuAberto = false;
        }
    }

    class Carrossel {
        constructor(carrosselSelector, prevBtnSelector, nextBtnSelector) {
            this.slides = document.querySelectorAll(`${carrosselSelector} .slide`);
            this.legendas = document.querySelectorAll(`${carrosselSelector} .legenda`);
            this.slideIndex = 0;
            this.slideInterval = null;

            document.querySelector(prevBtnSelector).addEventListener("click", () => this.moverSlide(-1, 3000));
            document.querySelector(nextBtnSelector).addEventListener("click", () => this.moverSlide(1, 300));

            this.iniciarCarrossel();
        }

        mostrarSlide() {
            this.slides.forEach(slide => slide.style.display = 'none');
            this.legendas.forEach(legenda => legenda.style.display = 'none');

            this.slides[this.slideIndex].style.display = 'block';
            this.legendas[this.slideIndex].style.display = 'block';
        }

        moverSlide(n, delay = 2000) {
            this.slideIndex += n;
            if (this.slideIndex >= this.slides.length) {
                this.slideIndex = 0;
            } else if (this.slideIndex < 0) {
                this.slideIndex = this.slides.length - 1;
            }
            this.mostrarSlide();

            clearInterval(this.slideInterval);
            setTimeout(() => this.iniciarCarrossel(), delay);
        }

        iniciarCarrossel() {
            this.mostrarSlide();
            this.slideInterval = setInterval(() => this.moverSlide(1, 2000), 2000);
        }
    }

    // Inicializa as classes
    new Menu(".menuicone img", "nav");
    new Carrossel(".carrossel", ".prev", ".next");
});
