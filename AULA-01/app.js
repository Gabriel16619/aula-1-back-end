/*******************************************************************
 * objetivo: Apresentar comandos basicos do node.js
 * Autor: Gabriel
 * Data: 29/07/2025
 * Versão: 1.0
********************************************************************/

//Comentario em linha
/*
    comentario em bloco
*/

//import da classe readline do node.js
var readline = require('readline')

//cria uma interface de entrada e saida de dados interagindo com o usuario
//interagir com o usuario
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//callback -> devolve o resultado de uma função ao encaminhar uma String, como um recebimento e um retorno, o metodo que chama.
entradaDeDados.question('Digite seu nome:', function(nome){

    var nomeUsuario = nome
//modo de mandar uma mensagem de erro caso o ampo tenha ficado vazio.
    if(nomeUsuario ==''){
//mensagem de erro 
    console.log('ERRO: Não foi possivel processar a requisição, campo obrigatorio')
    }else{
//converte uma variavel em classe String
//toUpperCase() -> converte o conteudo de uma variavel em MAIUSCULO
    console.log('o nome digitado foi:' + String(nomeUsuario).toUpperCase())
    console.log(nome)
    }
})

/*

//console.log permite escrever um conteudo de uma String ou objeto no terminal
console.log('Aula 01 de node.js')

//comando "var" permite criar uma variavel
var nome = 'Gabriel'
//exemplo de contatenação de uma variavel com uma String (String + variavel)
console.log('O nome digitado foi: ' + nome + '!')
// maneira mais "simples" de contatenar, utilizando a crace nos lugares das aspas, para colocar a variavel dentro do bloco
console.log(`O nome digitado foi: ${nome}!`)
//typeof() -> Permite que retrone o tipo de dados de uma variavel ou objeto
console.log(typeof(nome))

*/
