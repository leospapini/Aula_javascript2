const symbol1 = Symbol('nome');
const symbol2 = Symbol('nome');

//Symbols são únicos, por mais que tenham o mesmo valor
console.log('symbol1 é igual a symbol2: ', symbol1 === symbol2)

//Previne conflitos entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
    [nameSymbol1]: 'Leonardo',
    [nameSymbol2]: 'Outro nome',
    lastName: 'Segobia Papini'
}

console.log(user);

//Symbols criam propriedades que não são enumeráveis, por estruturas de repetição e nem por 
//outras formas que terei como exemplo aqui, porém tem como enumerar suas propriedades
//com códigos específicos
for (const key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(`\nValor da chave ${key}: ${user[key]}`);
    }
}

console.log('Propriedades do objeto user: ', Object.keys(user));
console.log('Valores das propriedades do objeto user: ', Object.values(user));

//Exibir symbols de um objeto
console.log('Symbols registrados no objeto user: ', Object.getOwnPropertySymbols(user));

//Acessando todas as propriedades do objeto
console.log('Todas propriedades do objeto user: ', Reflect.ownKeys(user));

//Criar um enum
const directions = {
    UP   : Symbol['UP'],
    DOWN : Symbol['DOWN'],
    LEFT : Symbol['LEFT'],
    RIGHT: Symbol['RIGHT']
};

console.log('Propriedades do objeto directions: ', Reflect.ownKeys(directions));