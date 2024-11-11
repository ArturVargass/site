// Função para adicionar um usuário ao Local Storage
document.getElementById("addUserForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio do formulário

    // Captura os dados do formulário
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;

    // Cria um objeto usuário
    const novoUsuario = {
        nome: nome,
        cpf: cpf,
        login: login,
        senha: senha
    };

    // Obtém a lista de usuários armazenada no Local Storage (ou cria uma lista vazia, se não houver)
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Adiciona o novo usuário à lista
    usuarios.push(novoUsuario);

    // Salva a lista de usuários no Local Storage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // Exibe uma mensagem de sucesso
    const messageElement = document.getElementById("message");
    messageElement.innerText = "Usuário cadastrado com sucesso!";

    // Limpa os campos do formulário
    document.getElementById("addUserForm").reset();
});
