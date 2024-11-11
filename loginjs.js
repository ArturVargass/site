

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const loginInput = document.getElementById("login").value;
    const senhaInput = document.getElementById("senha").value;

    // Recupera os usuários armazenados no localStorage
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verifica se existe um usuário com login e senha válidos
    let usuarioValido = false;

    for (let usuario of usuarios) {
        // Ignora usuários com campos vazios
        if (usuario.login && usuario.senha) {
            if (usuario.login === loginInput && usuario.senha === senhaInput) {
                usuarioValido = true;
                break;
            }
        }
    }

    if (usuarioValido) {
        // Se o login for válido, redireciona para a página inicial
        window.location.href = "index.html";
    } else {
        // Se o login ou senha estiver errado, exibe uma mensagem
        alert("Login ou senha inválidos!");
    }
});

