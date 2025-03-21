//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Lista para guardar os amigos
let amigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
    // Pegar a caixa de texto onde o nome foi digitado
    let caixaDeTexto = document.getElementById('amigo');
    // Pegar o nome digitado
    let nome = caixaDeTexto.value;
    
    // Verificar se escreveu algum nome
    if (nome == '') {
        alert('Ei! Você precisa digitar um nome!');
        return;
    }
    
    // Guardar o nome na lista
    amigos.push(nome);
    
    // Limpar a caixa de texto
    caixaDeTexto.value = '';

    // Chamar função para mostrar na tela
    mostrarNaTela();
}

// Função para mostrar os amigos na tela
function mostrarNaTela() {
    // Pegar a lista do HTML
    let lista = document.getElementById('listaAmigos');
    
    // Limpar a lista
    lista.innerHTML = '';
    
    // Colocar cada amigo na lista
    for (let i = 0; i < amigos.length; i++) {
        // Criar novo item da lista
        let novoAmigo = document.createElement('li');
        // Colocar o nome do amigo no item
        novoAmigo.textContent = amigos[i];
        // Adicionar o item na lista
        lista.appendChild(novoAmigo);
    }
}

// Função para sortear um amigo
function sortearAmigo() {
    // Verificar se tem amigos suficientes
    if (amigos.length < 2) {
        alert('Preciso de pelo menos 2 amigos para sortear!');
        return;
    }
    
    // Escolher um número aleatório
    let numero = Math.floor(Math.random() * amigos.length);
    
    // Pegar o amigo sorteado
    let amigoSorteado = amigos[numero];
    
    // Mostrar o resultado
    let lugarDoResultado = document.getElementById('resultado');
    lugarDoResultado.innerHTML = '';
    
    let textoResultado = document.createElement('li');
    textoResultado.textContent = 'O amigo sorteado é: ' + amigoSorteado;
    lugarDoResultado.appendChild(textoResultado);
}