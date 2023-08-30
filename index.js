//1 + 2 + 3 ... + 9 + 10

function rapidinha (numero) {
  
}

// function rapidinha (numero) {
//   return numero >= 0 ?
//     Promise.resolve(numero / 2 + (numero + 1))
//     :
//     Promise.reject(`Número deve ser pelo menos zero`)
// }

rapidinha(10)
.then(res => console.log(`Deu certo; ${res}`))
.catch(erro => console.log(`Falhou: ${erro}`));

// function demorada (numero) {
//     const p = new Promise(function(resolve, reject) {
//       if (numero >= 0) {
//       let res = 0;
//       for (let i = 1; i <= numero; i++) 
//         res += 1;
//       resolve(res);
//   }
//   else {
//     reject(`{numero} deve ser pelo menos zero.`)
//   }
// });
// return p;
// }

const minhaPromise = demorada(10);
minhaPromise
.then((resultado) => {
  console.log(`Deu certo: ${resultado}.`)
})
.catch((resultado) => {
  console.log(`Não deu certo: {erro}`)
})

demorada

// function demorada(numero){
//   let p = new Promise(function(resolve, reject){
//     let res = 0
//     for (let i = 1; i <= numero; i++)
//       res += i
//     resolve(res)
//   })
//   return p
// }
// //then: especificamos a função que executa quando a computação terminar com sucesso
// //catch: especificamos a função que executa quando a computação terminar com erro
// demorada(10)
// .then((resultado) => console.log(resultado))
// .catch((erro) => console.log(erro))

// function f(){
//   return 2
// }
// const resultado = f()
// console.log('oi')

// const fs = require('fs')
// const abrirArquivo = function(nomeArquivo){
//   const exibirConteudo = function(erro, conteudo){
//     if(erro)
//       console.log('Deu erro')
//     else{
//       console.log(conteudo.toString())
//       const dobro = 2 * Number(conteudo.toString())
//       const terminou = function (erro){
//         console.log(
//           erro ?
//           'Deu erro':
//           'Blz, escreveu'
//         )
//       }
//       fs.writeFile(
//         'dobro.txt', 
//         dobro.toString(), 
//         terminou
//       )

//     }
//   }
//   fs.readFile(nomeArquivo, exibirConteudo)
// }
// abrirArquivo('arquivo.txt')

// // setTimeout(function(){
// //   console.log('Dentro da timeout')
// // }, 1000)
// // const atual = new Date().getTime() + 5000;
// // while(new Date().getTime() <= atual);
// // console.log('fora da timeout')


// //computação síncrona(bloqueante) e assíncrona(não bloqueante)
// // function demorada(){
// //   const atualMais2Segundos = new Date().getTime() + 2000
// //   while (new Date().getTime() <= atualMais2Segundos){

// //   }
// //   const d = 8 + 4
// //   return d
// // }
// // const a = 2 + 3
// // const b = 5 + 9

// // setTimeout(function(){
// //   const d = demorada()
// //   console.log(`d: ${d}`)
// // }, 500)

// // const e = 2 + a + b
// // console.log(e)
// // const a = 2 + 7
// // const b = 5 + 7
// // console.log(a + b)
// // console.log('Eu primeiro')
// // calculadora.somar(2, 2)
// // console.log('Agora eu')
// // console.log('Sempre vou ser a última...:(')






// // //ela deve fazer soma e subtração
// // //soma com arrow function sem {}
// // //subtração com function regular
// // //testar: 
// // //somar 1 + 2
// // //subtrair 2 - 1
// // const calculadora = {
// //   somar: (a, b) => a + b,
// //   subtrair: function (a, b){
// //     return a - b
// //   }
// // }

// // console.log(calculadora.somar(1, 2))
// // console.log(calculadora.subtrair(2, 1))

// // // //uma concessionária tem cnpj e endereço. Endereço tem logradouro e numero. Ela possui uma quantidade arbitraria de veiculos. Cada veiculo possui placa, ano de fabricação, modelo e marca.
// // // const concessionaria = {
// // //   cnpj: '12345678901000',
// // //   endereco: {
// // //     logradouro: 'Rua B',
// // //     numero: 12
// // //   },
// // //   veiculos: [
// // //     {
// // //       placa: 'ABC-1234',
// // //       anoFabricacao: 1990,
// // //       modelo: 'Fusca',
// // //       marca: 'VW'
// // //     } 
// // //     ,
// // //     {
// // //       placa: 'DFE-6655',
// // //       anoFabricacao: 2010,
// // //       modelo: 'Camaro',
// // //       marca: 'GM'
// // //     } 
// // //   ]
// // // }
// // // const veiculos = concessionaria.veiculos
// // // for (let veiculo of veiculos){
// // //   console.log(veiculo.anoFabricacao)
// // //   console.log('****************')
// // // }

// // // Nome_completo, idade
// // // Ana Silva, 22
// // // João,30
// // // pessoa['Nome completo']
// // //Objetos literais Javascript 
// // //JSON: JavaScript Object Notation
// // //coleção de pares chave/valor
// // //nome, idade e endereco
// // //endereco tem logradouro, numero e bairro
// // // let pessoaComEndereco = {
// // //   nome: 'Ana',
// // //   idade: 18,
// // //   endereco: {
// // //     logradouro: 'Rua B',
// // //     numero: 12,
// // //     bairro: 'Vila J'
// // //   }
// // // }
// // // console.log(`${pessoaComEndereco.endereco.bairro}`)
// // // console.log(`${pessoaComEndereco['endereco']['numero']}`)
// // // console.log(`${pessoaComEndereco['endereco'].logradouro}`)


// // // const pessoa = {
// // //   nome: 'Ana',
// // //   idade: 22
// // // }
// // // console.log (`Me chamo ${pessoa['nome']}`)
// // // console.log(`Tenho ${pessoa.idade} anos`)

// // // function eAgora(){
// // //   let cont = 1
// // //   function f1 (){
// // //     console.log(cont)
// // //     cont++
// // //   }
// // //   function f2(){
// // //     console.log(cont)
// // //   }
// // //   return [f1, f2]
// // // }

// // // let resultado = eAgora()
// // // resultado[0]()
// // // resultado[1]()

// // // // function saudacoesFactory (saudacao, nome){
// // // //   return function (){
// // // //     console.log(`${saudacao}, ${nome}!`)
// // // //   }
// // // // }

// // // // let olaJoao = saudacoesFactory('Olá', 'João');

// // // // let tchauJoao = saudacoesFactory('Tchau', 'João')

// // // // olaJoao()

// // // // tchauJoao()


// // // // function f(){
// // // //   //escopo externo da função g
// // // //   let nome = 'João'
// // // //   function g(){
// // // //     //escopo interno da função g
// // // //     console.log(nome)
// // // //   }
// // // //   g()
// // // // }
// // // // f()

// // // // app.get('/livros', function(req, res){})

// // // // function f (funcao){
// // // //   return funcao()
// // // // }
// // // // function g(){
// // // //   function outraFuncao(){
// // // //     console.log("fui criada pela g")
// // // //   }
// // // //   return outraFuncao
// // // // }
// // // // f(g)()
// // // // f(g())


// // // // app.get('/livros', function(req, res) {})

// // // // function g(){
// // // //   console.log("1")
// // // //   function outraFuncao(){
// // // //     console.log("2")
// // // //     return function(){
// // // //       console.log('4')
// // // //     }
// // // //   }
// // // //   console.log("3")
// // // //   outraFuncao()()()
// // // //   return outraFuncao
// // // // }
// // // // //1 3 2 4 2 4
// // // // g()()()
// // // // const gResult = g()
// // // // gResult()


// // // // function f(funcao){ //funcao é callable
// // // //   funcao()  
// // // // }
// // // // function auxiliar(){
// // // //   console.log("Sou a auxiliar")
// // // // }
// // // // f(auxiliar)

// // // // f(function (){
// // // //   console.log("Estou sendo passada para f")
// // // // })

// // // // f(function (){
// // // //   console.log("Estou sendo passada para f")
// // // // })




// // // // let umaFuncao = function () {
// // // //   console.log("Fui armazenada em uma variável")
// // // // }
// // // // umaFuncao()



// // // // class Pessoa{
// // // //   public void andar(){

// // // //   }

// // // //   public Method pegarUmMetodo(){
// // // //     return andar;
// // // //   }

// // // //   public static void main (String [] args){
// // // //     var meuMetodo = andar;
// // // //   }
// // // // }

// // // //arrow functions
// // // // const ehPar = (n) => {
// // // //   n % 2 === 0
// // // // }
// // // // console.log(ehPar(3))|
// // // // const dobro = n => n * 2 
// // // // const dobro = (n) => n * 2 
// // // // console.log(dobro(3));
// // // // const dobro = (n) => {return n * 2}

// // // // console.log(dobro(3));
// // // //arrow function, corpo sem chaves
// // // // const hello = () => console.log("Hello, arrow function sem chaves")

// // // // hello()
// // // //definimos a função
// // // // const hello = () => {console.log("Hello, Arrow functions")}

// // // // //colocamos em execução
// // // // hello()

// // // // //funções
// // // // //valor padrão para o parâmetro n
// // // // const triplo = function(n = 5){
// // // //   return n * 3
// // // // }
// // // // const res1 = triplo()
// // // // const res2 = triplo(20)
// // // // console.log(res1, res2)
// // // // const dobro = function  (n){
// // // //   return 2 * n
// // // // }
// // // // // const res = dobro(5)
// // // // // console.log(res)
// // // // // function soma (a, b){
// // // // //   return a + b
// // // // // }
// // // // // const resultado = soma(2, 3)
// // // // // console.log(resultado)

// // // // //jeito antigo de definir uma função em js
// // // // // function hello(){
// // // // //   console.log("Oi")
// // // // // }
// // // // // hello("fwafwea")
// // // // // function hello(nome){
// // // // //   console.log(`Hello, ${nome}`)
// // // // // }
// // // // // hello('Ana')


// // // // //vetores, coleções, listas
// // // // // const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina']
// // // // // //filter
// // // // // //arrow function
// // // // // function helloFunction(){
// // // // //   console.log('hello, function')
// // // // // }
// // // // // const helloArrowFunction = () => {
// // // // //   console.log('Hello, arrow function')
// // // // // }

// // // // // const somenteComA = 
// // // // //   nomes.filter((nome) => {return nome.startsWith("A")})
// // // // // console.log(somenteComA)

// // // // // //produza uma lista contendo as iniciais de cada nome
// // // // // //Ana Maria: A
// // // // // //Antonio: A
// // // // // //Rodrigo: R
// // // // // const iniciais = nomes.map((nome) => {return nome.charAt(0)})

// // // // // console.log(iniciais)

// // // // // const numeros = [1, 2, 3, 4, 5, 6]
// // // // // //1. produzir uma lista contendo apenas os pares
// // // // // const pares = numeros.filter((n) => {return n % 2 === 0})
// // // // // console.log(pares)
// // // // // //2. produzir uma lista contendo o quadrado de cada número
// // // // // const quadrados = numeros.map((n) => {return n * n})
// // // // // console.log(quadrados)

// // // // // const todosComecamComA = nomes.every((nome) => {return nome.startsWith("A")})

// // // // // console.log(todosComecamComA)

// // // // // const res = nomes.some((nome) => {return nome.startsWith("A")})
// // // // // console.log(res)

// // // // // const valores = [1, 2, 3, 4]
// // // // // const soma = valores.reduce((ac, v) => {return ac + v})
// // // // // console.log(soma)




// // // // // v2 = [2, "abc", true]
// // // // // for (let i = 0; i < v2.length ;i++)
// // // // //   console.log(v2[i])
// // // // // console.log(v2)
// // // // // console.log(v2.length)


// // // // //int [] v = new int[10];
// // // // //v[2] = 5;
// // // // // var lista = new ArrayList <Integer>();
// // // // //declaração/construção de um vetor ou lista
// // // // // v1 = []
// // // // // console.log(v1.length)
// // // // // v1[0] = 3.4
// // // // // v1[1] = 2
// // // // // v1[2] = "abc"
// // // // // console.log(v1.length)



// // // // // console.log([] == [])
// // // // // console.log([0, 2] == false)
// // // // // console.log(null == undefined)
// // // // // console.log(null == null)
// // // // // console.log(1 == [1])
// // // // // console.log(true == 1)
// // // // //não use o operador ==
// // // // //use o operador ===
// // // // // console.log (1 == 1)
// // // // // console.log(1 === 1)
// // // // // console.log(1 == "1")
// // // // // console.log(1 === "1")


// // // // // const n1 = 2
// // // // // const n2 = '3'
// // // // // const n3 = n1 + n2
// // // // // console.log(n3)
// // // // // const n4 = n1 + Number(n2)
// // // // // console.log(n4)
// // // // // public class Pessoa{
// // // // //   public void andar(){

// // // // //   }
// // // // //   public static void main (String [] args){
// // // // //     var meuMetodo = andar;
// // // // //   }
// // // // // }


// // // // //var, const e let
// // // // //não use var
// // // // // var idade = 18
// // // // // console.log (`Oi, ${nome}`)
// // // // // //içamento hoist
// // // // // if(idade >= 18){
// // // // //   var nome = "João"
// // // // //   console.log(`Parabéns, ${nome}. Você pode dirigir`)
// // // // // }
// // // // // console.log(`Até mais, ${nome}`)
// // // // // let linguagem = "Javascript"
// // // // // console.log(linguagem)
// // // // // let linguagem = "Java"
// // // // // console.log(linguagem)
// // // // // var linguagem = "Javascript"
// // // // // console.log ("Aprendendo " + linguagem)
// // // // // var linguagem = "Java"
// // // // // console.log("Aprendendo " + linguagem)
// // // // // var nome = "José"
// // // // // console.log(nome)
// // // // // nome = "Maria"
// // // // // console.log(nome)
// // // // // let nome = "Maria"
// // // // // console.log(typeof(nome))
// // // // // console.log(nome)
// // // // // nome = "Maria dos Santos"
// // // // // console.log(typeof(nome))
// // // // // console.log(nome)
// // // // // nome = 123
// // // // // console.log(typeof(nome))
// // // // // console.log(nome)
// // // // // const nome
// // // // // const nome = "José"
// // // // // console.log(nome)
// // // // // nome = "José da Silva"
// // // // // console.log(nome)
// // // // //declarar constantes
// // // // //js é dinamicamente tipada
// // // // //java: int a;
// // // // //a = 2;
// // // // //a.indexOf("abc");
// // // // //a = "abc";

// // // // //comentário de uma linha
// // // // /*
// // // //   comentário de múltiplas
// // // //   linhas
// // // // */