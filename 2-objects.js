const user = {
    name: 'Leonardo',
    lastName: 'Segobia Papini'
}

//Recupera as chaves do objeto, ou seja, name e lastName
console.log('Propriedade do objeto user: ', Object.keys(user));

//Recupera os valores das chaves do objeto, ou seja, Leonardo e Segobia Papini
console.log('\nValores das propriedades do objeto user: ', Object.values(user));

//Retorna um array de arrays contendo [ nome_prop, valor_prop ] ou seja
//[['name', 'Leonardo'], ['lastName', 'Segobia Papini']]
console.log('\nLista de propriedades e valores: ', Object.entries(user));

//Mergear/Transferir propriedades de objetos, ou seja, adiciona o fullName no meu user
Object.assign(user, {fullName: 'Leonardo Segobia Papini'});

console.log('\nAdiciona a propriedade fullName no objeto user', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age: 26}));
//este código cria através do caracter {} um novo objeto, mergeando os elementos do user para ele, e adicionando
//mais um elemento, sendo ele o age: 26, o objeto user continua existindo, sem o elemento age


//Previne todas as alterações em um objeto, "congela" ele, bom para quando não queremos que
//um objeto mude de jeito nenhum
const newObj = { foo: 'bar' };
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariável newObj após as alterações: ', newObj);

//Permite apenas a alteração de propriedades existentes num objeto, não permite deletar e nem
//adicionar outros
const person = { name: 'Leonardo' };
Object.seal(person);

person.name = 'Leonardo Papini';
delete person.name;
person.age = 26;

console.log('\nVariável person após as alterações: ', person);
