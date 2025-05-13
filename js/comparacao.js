document.addEventListener("DOMContentLoaded", function () {
    const menuIcone = document.querySelector(".menuicone img");
    const navMenu = document.querySelector("nav");
    let menuAberto = false;

    // MENU RESPONSIVO
    menuIcone.addEventListener("click", function () {
        navMenu.classList.toggle("ativo");
        menuAberto = !menuAberto;

        menuIcone.src = menuAberto ? "img/close.png" : "img/menu.png";
    });

    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("ativo");
            menuIcone.src = "img/menu.png";
            menuAberto = false;
        });
    });

    // SELEÇÃO DE CARROS PARA COMPARAÇÃO
    const checkboxes = document.querySelectorAll("figure input[type='checkbox']");
    const btnComparar = document.querySelector(".btn-comparar");
    const modal = document.getElementById("modal-comparacao");
    const closeButton = document.querySelector(".close-buttom"); // Corrigido

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            let checkedBoxes = document.querySelectorAll("figure input[type='checkbox']:checked");

            if (checkedBoxes.length > 2) {
                this.checked = false; // Impede selecionar mais de dois
                alert("Você só pode selecionar até dois carros para comparar.");
            }
        });
    });

    btnComparar.addEventListener("click", function () {
        let selectedCars = document.querySelectorAll("figure input[type='checkbox']:checked");

        if (selectedCars.length !== 2) {
            alert("Selecione exatamente dois carros para comparar.");
            return;
        }

        let carsData = [];
        selectedCars.forEach(checkbox => {
            let figure = checkbox.closest("figure");
            let title = figure.querySelector("h4").innerText;
            let price = figure.querySelector("h6").innerText;

            // Coletando os dados adicionais de cada carro
            let image = figure.querySelector("img").src;
            let alturaCacamba = figure.querySelector(".altura-cacamba").innerText;
            let alturaVeiculo = figure.querySelector(".altura-veiculo").innerText;
            let alturaLivreSolo = figure.querySelector(".altura-livre-solo").innerText;
            let capacidadeCarga = figure.querySelector(".capacidade-carga").innerText;
            let motor = figure.querySelector(".motor").innerText;
            let potencia = figure.querySelector(".potencia").innerText;
            let volumeCacamba = figure.querySelector(".volume-cacamba").innerText;
            let roda = figure.querySelector(".roda").innerText;

            carsData.push({
                image,
                title,
                price,
                alturaCacamba,
                alturaVeiculo,
                alturaLivreSolo,
                capacidadeCarga,
                motor,
                potencia,
                volumeCacamba,
                roda
            });
        });

        exibirComparacao(carsData);
    });

    function exibirComparacao(cars) {
        let tabela = `
        
            <table>
            <tr>
                <th></th>
                <th><img src="${cars[0].image}" alt="${cars[0].title}" style="width: 150px;"></th>
                <th><img src="${cars[1].image}" alt="${cars[1].title}" style="width: 150px;"></th>
            </tr>
                <tr>
                    <th>Modelo</th>
                    <th>${cars[0].title}</th>
                    <th>${cars[1].title}</th>
                </tr>
                <tr>
                    <th>Preço</th>
                    <td>${cars[0].price}</td>
                    <td>${cars[1].price}</td>
                </tr>
                <tr>
                    <th>Altura da Caçamba (mm)</th>
                    <td>${cars[0].alturaCacamba}</td>
                    <td>${cars[1].alturaCacamba}</td>
                </tr>
                <tr>
                    <th>Altura do Veículo (mm)</th>
                    <td>${cars[0].alturaVeiculo}</td>
                    <td>${cars[1].alturaVeiculo}</td>
                </tr>
                <tr>
                    <th>Altura Livre do Solo (mm)</th>
                    <td>${cars[0].alturaLivreSolo}</td>
                    <td>${cars[1].alturaLivreSolo}</td>
                </tr>
                <tr>
                    <th>Capacidade de Carga (Kg)</th>
                    <td>${cars[0].capacidadeCarga}</td>
                    <td>${cars[1].capacidadeCarga}</td>
                </tr>
                <tr>
                    <th>Motor</td>
                    <td>${cars[0].motor}</th>
                    <td>${cars[1].motor}</td>
                </tr>
                <tr>
                    <th>Potência (cv)</td>
                    <td>${cars[0].potencia}</th>
                    <td>${cars[1].potencia}</td>
                </tr>
                <tr>
                    <th>Volume da Caçamba (L)</th>
                    <td>${cars[0].volumeCacamba}</td>
                    <td>${cars[1].volumeCacamba}</td>
                </tr>
                <tr>
                    <th>Roda</th>
                    <td>${cars[0].roda}</td>
                    <td>${cars[1].roda}</td>
                </tr>
            </table>
        `;

        document.getElementById("tabela-comparacao").innerHTML = tabela;
        modal.style.display = "flex";
    }

    document.querySelectorAll("figure").forEach(figure => {
        figure.addEventListener("click", function (event) {
            let checkbox = this.querySelector("input[type='checkbox']");

            if (event.target !== checkbox) {
                checkbox.checked = !checkbox.checked;
                checkbox.dispatchEvent(new Event("change")); // Garante que a lógica de limite funcione
            }
        });
    });

  
    if (closeButton) {
        closeButton.addEventListener("click", function () {
            modal.style.display = "none";
        });
    }
});
