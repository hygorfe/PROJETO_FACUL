const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("email")
const passwordInput = document.querySelector("#password")
const messageTextarea = document.querySelector("#message")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Verifica se o nome está vazio
    if (nameInput.value === "") {
        alert("Por favor, preencha seu nome");
        return;
    }

    // Verifica se p e-mail está preenchido e se é válido
    if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha seu email");
        return;
    }

    // Verificar se a situação foi selecionada
    if(jobSelect.value === ""){
        alert("Por favor, selecione a sua situação");
        return;
    }

    // Verifica se a mensagem está preeenchida
    if(messageTextarea.value === "") {
        alert("Por favor, escreva uma mensagem");
        return;
    }

    // Verifica se a está preenchida 
    if(!validatePassword(passwordInput.value)) {
        alert("A senha precisa de no mínimo 8 dígitos");
        return;

    }

    // Se todos os campos tiverem corretamente preenchidos, envie o form 
    form.submit();
})

// Função que valida e-mail
function isEmailValid(email) {

    // Cria um regex para validar email
    const emailRegex = new RegExp(
        // usuario@host.com.br
        /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ 
    );

    if(emailRegex.test(email)) {
        return true;
    }

    return false;

}

// Função que valida a senha
function validatePassword(password, minDigits) {
    if(password.lenght >= minDigits) {
        return true;
    }
    
    // Senha inválida 
    return false
}