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
}