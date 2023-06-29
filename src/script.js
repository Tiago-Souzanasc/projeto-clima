let email = document.querySelector("#contato-email")
let erro = document.querySelector(".mensagemErro")
let confirmado = document.querySelector(".confirmado")
const fecharConfirmado = document.querySelector(".fechar-confirmado")
const botao = document.querySelector(".botao")

function validarEmail(){
    if(!email.checkValidity()){
        erro.innerHTML = "E-mail inválido"
        email.classList.add("emailInvalido");
    } else {
        erro.innerHTML = "";
        email.classList.remove("emailInvalido");
        confirmado.classList.add("aberto");
    }
}

function fechar(){
    confirmado.classList.remove("aberto");
}

botao.addEventListener("click", validarEmail);
fecharConfirmado.addEventListener("click", fechar);