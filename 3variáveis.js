const name = 'Leonardo';

//Não podemos alterar o valor
// name = 'Leonardo';

const user = {
    name: 'Leonardo'
};

//Mas se for um objeto, podemos trocar suas propriedades
user.name = 'Outro nome';

//Não podemos fazer o objeto "apontar" para outro lugar
// user = {
//     name: 'Leonardo'
// };

//*************NO CASO DE ARRAY*****************

const persons = ['Leonardo', 'Pedro', 'Maria'];

//Podemos adicionar novos itens
persons.push('João');

//Podemos remover algum item
persons.shift();

//Podemos alterar diretamente
persons[1] = 'James';

console.log('\nArray após as alterações: ', persons);