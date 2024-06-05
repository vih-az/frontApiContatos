'use strict'
const atualizeUmProduto = function(){
    const nome = document.getElementById("nome")
    const categorias = document.getElementById("categorias")
    const preco = document.getElementById("preco")
    const desconto = document.getElementById('desconto')
    const imagem = document.getElementById('imagem')
    const descricao = document.getElementById('descricao')
    const quantidade = document.getElementById('quantidade')
    const ingredientes = document.getElementById('ingredientes')
    const id = document.getElementById('id')
    const novoProdutos = {}
    novoProdutos.nome = nome.value
    novoProdutos.categorias = categorias.value
    novoProdutos.preco = preco.value
    novoProdutos.desconto = desconto.value
    novoProdutos.imagem = imagem.value
    novoProdutos.descricao = descricao.value
    novoProdutos.quantidade = quantidade.value
    novoProdutos.ingredientes = ingredientes.value
    novoProdutos.id = id.value
    cadProd(novoProdutos)
    return novoProdutos
}
const atualizeProduto = async function(prod, id){
    const url = 'http://localhost:8080/produtos/' + id
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(prod)
    }
    const response = await fetch(url, options)
    return response.ok
}
const botao = document.getElementById('botao')
const trocarPagina = function(){
    if(cadastrarProdutos()){
        window.location.href = '../index.html'
    }
}
botao.addEventListener('click', atualizeUmProduto)
const produtos = function(produtos){
    const nome = document.getElementById("nome")
    const categorias = document.getElementById("categorias")
    const preco = document.getElementById('preco')
    const desconto = document.getElementById('desconto')
    const imagem = document.getElementById('imagem')
    const descricao = document.getElementById('descricao')
    const quantidade = document.getElementById('quantidade')
    const ingredientes = document.getElementById('ingredientes')
    const id = document.getElementById('id')
    nome.value = produtos.nome
    categorias.value = produtos.categorias
    preco.value = produtos.preco
    desconto.value = produtos.desconto
    imagem.value = produtos.imagem
    descricao.value = produtos.descricao
    quantidade.value = produtos.quantidade
    ingredientes.value = produtos.ingredientes
    id.value = produtos.id
}
produtos()