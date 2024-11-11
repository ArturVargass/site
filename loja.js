// Array para armazenar os produtos no carrinho
let carrinho = [];

// Função para adicionar produtos ao carrinho
function adicionarAoCarrinho(nome, preco) {
    const produto = { nome, preco };
    carrinho.push(produto);
    atualizarCarrinho();
}

// Função para atualizar a quantidade de itens no carrinho
function atualizarCarrinho() {
    const qtdCarrinho = document.getElementById('qtd-carrinho');
    qtdCarrinho.textContent = carrinho.length;
}

// Função para exibir o carrinho
function mostrarTelaCarrinho() {
    const telaCarrinho = document.getElementById('tela-carrinho');
    const carrinhoLista = document.getElementById('carrinho-lista');

    if (carrinho.length === 0) {
        carrinhoLista.innerHTML = '<p>Não há produtos no carrinho.</p>';
    } else {
        carrinhoLista.innerHTML = '';
        carrinho.forEach((produto, index) => {
            carrinhoLista.innerHTML += `
                <div class="produto-carrinho">
                    <span>${produto.nome} - R$ ${produto.preco.toFixed(2)}</span>
                    <button onclick="removerDoCarrinho(${index})">Remover</button>
                </div>
            `;
        });
    }

    telaCarrinho.style.display = 'block';
    document.getElementById('tela-pedidos').style.display = 'none';
    document.querySelector('main').style.display = 'none';
}

// Função para exibir a tela de pedidos
function mostrarTelaPedidos() {
    const telaPedidos = document.getElementById('tela-pedidos');
    const listaPedidos = document.getElementById('lista-pedidos');

    if (carrinho.length === 0) {
        listaPedidos.innerHTML = '<p>Não há produtos no carrinho.</p>';
    } else {
        listaPedidos.innerHTML = '';
        carrinho.forEach((produto, index) => {
            listaPedidos.innerHTML += `
                <div class="produto-pedido">
                    <span>${produto.nome} - R$ ${produto.preco.toFixed(2)}</span>
                </div>
            `;
        });
    }

    telaPedidos.style.display = 'block';
    document.getElementById('tela-carrinho').style.display = 'none';
    document.querySelector('main').style.display = 'none';
}

// Função para voltar para a tela de produtos
function voltarParaProdutos() {
    document.querySelector('main').style.display = 'block';
    document.getElementById('tela-carrinho').style.display = 'none';
    document.getElementById('tela-pedidos').style.display = 'none';
}

// Função para remover um produto do carrinho
function removerDoCarrinho(index) {
    carrinho.splice(index, 1); // Remove o produto do carrinho
    alert('Produto removido do carrinho!');
    atualizarCarrinho();
    mostrarTelaCarrinho(); // Atualiza a tela do carrinho
}

// Função de busca de produtos
function searchProducts() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const products = document.querySelectorAll('.product-card');

    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(searchInput)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Função para adicionar produtos aos botões "Adicionar ao carrinho" no HTML
document.querySelectorAll('.product-card button').forEach((button, index) => {
    button.addEventListener('click', () => {
        const productName = button.closest('.product-card').querySelector('h3').textContent;
        const productPrice = parseFloat(button.closest('.product-card').querySelector('p').textContent.replace('R$ ', '').replace(',', '.'));
        adicionarAoCarrinho(productName, productPrice);
    });
});