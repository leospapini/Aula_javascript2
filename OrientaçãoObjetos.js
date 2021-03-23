// Herança: Baseada em protótipos(prototype), variável que armazena as definições do nosso objeto
// baseado no constructor, é criado um prototype que é armazenado no __proto__, o .js faz por baixo dos panos
// 'use strict';

// const myText = String('Hello prototype!');
// console.log(myText.__proto__.split);

// to usando um função construtura que chama string, toda função construtura tem um prototype atrelado a ela
// e toda vez que eu crio uma variável a partir de uma função construtora, eu vou ter essa referência do proto nela
// ou seja, console.log(String.prototype.split); o split está sendo carregado no prototype da função construtora string

// const myText = String('Hello prototype!');
// console.log(myText.__proto__.split === String.prototype.split)'; //true

// prototype aponta pro prototype da função, e __proto__ pro prototype da string
// __proto__ -> prototype -> constructor

// const myText = 'Hello prototype!';
// myText.constructor -> String
// myTexto.__proto__ -> String.prototype

// function Animal() {
// 	this.qtdePatas = 4;
// }
// const cachorro = new Animal();
// console.log(cachorro.qtdePatas); //4

// operador new: um novo objeto é criado, herdando o .prototype, ou seja, o __proto__ apontará para a função onde o new 
// está apontando. A função construtora é chamada com os argumentos especificados e com o "this" vinculado ao novo
// objeto criado. Caso a função construtora tenha um retorno explícito, será respeitado o seu 'return'. Senão, será retornado
// o objeto criado no passo 1.

// function Pessoa() {
// 	this.name = name;
// }
// const p = new Pessoa('Leonardo')
// console.log(p) //Pessoa {name: "Leonardo"}

// instanceof: mostra a instância do que foi conectado
// function Animal() {
// 	this.qtdePatas = 4;
// }
// const cachorro = new Animal();
// console.log(cachorro instanceof Animal); //true
// console.log(cachorro instanceof Function); //false



// Classes: Simplificação da herança de protótipos, palavra chave *class*
// class Person {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }
// class PessoaF extends Person {
// 	constructor(name, cpf) {
// 		super(name);
// 		this.cpf = cpf;
// 	}
// }
// neste caso ocorre a mesma coisa que com herança, mas ao invés de utilizarmos
// o new, utilizamos o extends, indicamos o constructor a parte e nomeamos ele tbm,
// e fica mto mais simples.

// 'use strict';

// class Animal {
//     constructor() {
//         this.qtdePatas = 0;
//     }
    
//     movimentar(){}
// }

// class Cachorro extends Animal {
//     constructor(morde) {
//         super();
//         this.qtdePatas = 4;
//         this.morde = morde;
//     }

//     latir() {
//         console.log('Au! au!');
//     }
// }

// const pug = new Cachorro(false);
// const pitbull = new Cachorro(true);

// Modificadores de acesso: JavaScript não possui, mas irá possuir.
// controle do que é privado e do que é público dentro da minha classe

// function Person(initialName) {
// 	let name = initialName;
	
// 	this.getName = function() {
// 		return name;
// 	}
	
// 	this.setName = Function(newName) {
// 	name = newName;
// 	}
// }
// const p = new Person('Leonardo');
// //anterior, com função
// //nova versão, com class
// class Person {
// 	#name = '';
// 	constructor(initialName) {
// 		this.#name = initialName;
// 	}

// 	setName(name) {
// 		this.#name = name;
// 	}
	
// 	getName() {
// 	return this.#name;
// 	}
// }

// Encapsulamento:Ocultar detalhes de um funcionamento interno
// //antigo, por funções
// function Person(initialName) {
// 	var name = initialName;
// 	object.defineProperty(this, 'name', {
// 		get: function() {
// 			return name;
// 		}
// 		set: function(value) {
// 			name = value;
// 		}
// 	});
// }

// //novo, com class
// class Person {
// 	#name = '';
// 	constructor(name) {
// 		this.#name = name;
// 	}
// 	get name() {
// 		return this.#name;
// 	}
// 	set name(name) {
// 		this.#name = name;
// 	}
// }

// Static: acessar métodos/atributos sem instanciar
// //com funções
// function Person() {}

// Person.walk = function() {
// 	console.log('walking...');
// }
// console.log(Person.walk()); //walking...

// //com class
// class Person {
// 	static walk() {
// 		console.log('walking...');
// 	}
// }

// console.log(Person.walk()); //walking...

