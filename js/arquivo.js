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
            // Função para formatar o CPF
            function formatarCPF(event) {
                let cpf = event.target.value.replace(/\D/g, ''); // Remove tudo que não for número
                if (cpf.length <= 3) {
                    cpf = cpf.replace(/(\d{3})(\d{1,})/, '$1.$2');
                } else if (cpf.length <= 6) {
                    cpf = cpf.replace(/(\d{3})(\d{3})(\d{1,})/, '$1.$2.$3');
                } else if (cpf.length <= 9) {
                    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{1,})/, '$1.$2.$3-$4');
                } else {
                    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
                }
                event.target.value = cpf;
            }
    
            // Função para formatar o Telefone
            function formatarTelefone(event) {
                let telefone = event.target.value.replace(/\D/g, ''); // Remove tudo que não for número
                if (telefone.length <= 2) {
                    telefone = telefone.replace(/(\d{2})(\d{1,})/, '($1) $2');
                } else if (telefone.length <= 6) {
                    telefone = telefone.replace(/(\d{2})(\d{4})(\d{1,})/, '($1) $2-$3');
                } else {
                    telefone = telefone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
                }
                event.target.value = telefone;
            }
    
            // Adicionando os event listeners para os campos CPF e Telefone
            window.onload = function() {
                document.getElementById('cpf').addEventListener('input', formatarCPF);
                document.getElementById('telefone').addEventListener('input', formatarTelefone);
            };
            
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("ativo");
            menuIcone.src = "img/menu.png"; 
            menuAberto = false;
        });
    });
    const checkboxTermos = document.getElementById('termos');
    const btnEnviar = document.getElementById('btnEnviar');
    const formulario = document.querySelector('form');
    
    // Habilita ou desabilita o botão
    checkboxTermos.addEventListener('change', function () {
        btnEnviar.disabled = !this.checked;
    });
    
    // Ao tentar enviar o formulário
    formulario.addEventListener('submit', function (event) {
        if (!checkboxTermos.checked) {
            event.preventDefault(); // Impede o envio
            alert("ACEITE OS TERMOS E CONDIÇÕES PARA PODER PROSSEGUIR");
        }
    });
    
});

