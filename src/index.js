'use strict'
import { deletarProdutos } from "./js/deletarProdutos.js"
const pegarProdutos = async function(){
    const url = 'http://localhost:8080/produtos'
    const response = await fetch(url)
    const respostaProdutos = await response.json()
    return respostaProdutos
}
const criarDivParaOsProdutos = function(produtos){
    const id = document.createElement('h1')
    const nome = document.createElement('h1')
    const categorias = document.createElement('h1')
    const preco = document.createElement('h1')
    const desconto = document.createElement('h1')
    const imagem = document.createElement('h1')
    const descricao = document.createElement('h1')
    const quantidade = document.createElement('h1')
    const ingredientes = document.createElement('h1')
    const botaoDeletar = document.createElement("button")
    id.textContent = produtos.id
    nome.textContent = produtos.nome
    categorias.textContent = produtos.categorias
    preco.textContent = produtos.preco
    desconto.textContent = produtos.desconto
    imagem.textContent = produtos.imagem
    descricao.textContent = produtos.descricao
    quantidade.textContent = produtos.quantidade
    ingredientes.textContent = produtos.ingredientes
    botaoDeletar.textContent = "deletar produto"
    const conteiner = document.createElement('div')
    botaoDeletar.setAttribute("id", "botaoDeletarProduto")
    botaoDeletar.addEventListener("click", function(){
        deletarProdutos(produtos.id)
    })
    const botaoAtualize = document.createElement('button')
    botaoAtualize.textContent = 'atualize um produto'
    botaoAtualize.setAttribute("id", "botaoAtualizarProduto")
    botaoAtualize.addEventListener("click", function(){
        window.location.href = "./pages/atualizeUmProduto.html"
        atualizeProduto(produtos, produtos.id)
        atualizeUmProduto(produtos)
    })
    conteiner.classList.add("border", "flex", "gap-1", "flex-col", "items-start")
    conteiner.append(id, nome, categorias, preco, desconto, imagem, descricao, quantidade, ingredientes, botaoDeletar, botaoAtualize)
    return conteiner
}
const mostrarProdutos = async function(){
    const conteiner = document.getElementById("conteiner")
    const produtos = await pegarProdutos()
    produtos.forEach(function(produtoss){
        const divParaOsProdutos = criarDivParaOsProdutos(produtoss)
        console.log(divParaOsProdutos)
        console.log(produtoss)
        console.log(produtos)
        console.log(conteiner);
        conteiner.appendChild(divParaOsProdutos)
    })
}
const botaoAdicionarProduto = document.getElementById('botaoAdicionarProduto')
botaoAdicionarProduto.addEventListener('click', function(){
    window.location.href = './pages/adicionarProdutos.html'
})
mostrarProdutos()