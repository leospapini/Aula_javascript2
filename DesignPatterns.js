//Factory
//Método 1
function Pessoa() {
    return {
        name: 'Leonardo',
        lastName: 'Segobia Papini'
    }
}

const p = Pessoa();
console.log(p);
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//Método 2
function Pessoa(name) {
    return {
        name,
        lastName: 'Segobia Papini'
    }
}

const p = Pessoa('Custom Name');
console.log(p);
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//Método 3
function Pessoa(customProperties) {
    return {
        name: 'Leonardo',
        lastName: 'Segobia Papini',
        ...customProperties //todas as outras customProperties, serão aceitadas do jeito que foram definidas
    }
}
const p = Pessoa({otherName: 'Custom Name', age: 24});
console.log(p);
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//Singleton
function Pessoa() {
    if (!Pessoa.instance) {
        Pessoa.instance = this;
    }
    return Pessoa.instance;
}

const p = Pessoa.call({ name: 'Leonardo'});
const p2 = Pessoa.call({ name: 'Custom Name'});
console.log(p);
console.log(p2);
//Após ter sido instanciado, mesmo que eu tente reatribuir ou chamar aquele objeto com outro nome
//ele sempre terá a mesma instância
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//Decorator
//vamos criar um decorator com .js sem a sintaxe de decorator, que me ajude a controlar
//que um usuário sempre seja autenticado
let loggedIn = false;
function callIfAuthenticated(fn) {
    return !!loggedIn && fn();
}

function sum(a, b) {
    return a + b;
}

console.log(callIfAuthenticated(() => sum(2, 3))); //false, só executará se o loggedIn for = true
loggedIn = true;
console.log(callIfAuthenticated(() => sum(2, 3))); //true, pois o valor foi alterado para true
loggedIn = false;
console.log(callIfAuthenticated(() => sum(2, 3))); //false, só executará se o loggedIn for = true
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//Exemplo com a sintaxe decorator @
function readOnly(target, name, descriptor) {
    descriptor.writable = false; //Não é mais disponível para escrita writable
    return descriptor;
}

class Job {
    @readOnly
    title() {return 'CEO'}
}
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//Observer
//Exemplo 1
class Observers {
    constructor() {
        this.Observers = [];
    }

    subscribe(f) {
        this.Observers.push(f);
    }

    unsubscribe(f) {
        this.otherName = this.Observers.filter(subscriber => subscriber !== f);
    }

    notify(data) {
        this.Observers.forEach(observer => observer(data));
    }
}
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//Exemplo 2
class observable {
    constructor() {
        this.observables = [];
    }

    subscribe(fn) { //permite que adicionemos novos itens
        this.observables.push(fn);
    }

    notify(data) { //precisa de um notify, pois ele recebe alguma coisa *data*
        this.observables.forEach(fn => fn(data));
    }

    unsubscribe(fn) {
        this.observables = this.observables.filter(obs => obs !== fn);
    }
}
const o = new observable();
const logData1 = data => console.log(`Subscribe 1: ${data}`);
const logData2 = data => console.log(`Subscribe 2: ${data}`);
const logData3 = data => console.log(`Subscribe 3: ${data}`);

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('notified 1'); //toda vez que eu chamar o notify, tudo que está na lista
                        //de subscribe será disparado/executado
o.unsubscribe(logData2);
o.notify('notified 2'); //Após remover o logdata2, a segunda notificação, não conterá o mesmo
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//Module
//Forma antiga de se usar o Module
(function($){
    //your plugin here
})(jQuery);
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//Forma de utilizar após o ES6 com o babel
// class Person {
//     constructor(name){
//         this.name = name;
//     }
// }

// export default Person;
// //utilizar Person
// import Person from './models/person';
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//Forma padrão de se utilizar
let name1 = 'default';
function getName() {
    return name1;
}

function setName(newName) {
    name1 = newName;
}

module.exports = { //tudo que ta dentro do module.exports será exportado
    getName,
    setName
};
