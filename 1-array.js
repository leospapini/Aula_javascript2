const user = ['Leonardo', 'Maria', 'Ana'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
{
    name: 'Leonardo',
    age: 25,
    gender: gender.MAN
},
{
    name: 'Maria',
    age: 20,
    gender: gender.WOMAN
},
{
    name: 'Ana',
    age: 14,
    gender: gender.WOMAN
}]

//Retornar a quantidade  de itens  de um array
console.log('Itens:', persons.length);

//Verificar se é array
console.log('A variável persons é array?', Array.isArray(persons));

//Iterar/repetir os itens do array. forEach = para cada item, do 0 ao último
persons.forEach((persons, index, arr) => {
    console.log(`Nome: ${persons.name} index: ${index}`, arr);
});

//Filtrar array
const mens = persons.filter(persons => persons.gender === gender.MAN);
const womens = persons.filter(persons => persons.gender === gender.WOMAN)
console.log('\nNova Lista apenas com homens:', mens);
console.log('\nNova Lista apenas com mulheres:', womens);

//retornar um novo, adicionar, modificar..
const personsWithCourse = persons.map(persons => {
    persons.course = 'Introdução ao JavaScript';
    return persons;
})

console.log('\nPessoas com a adição do course:', personsWithCourse);

//Transformar um array em outro tipo, ou reduzir seu index, o primeiro valor determinado, no caso age
//representa o total de totalAge, uma variável que foi nomeada age, persons representa o item que eu já to
//iterando/repetindo, o 0 no final da expressão representa o valor onde ele irá começar
const totalAge = persons.reduce((age, persons) =>{
    age += persons.age; //estou somando cada idade dentro de persons.age, 
                        //nessa variável age, que é o total de totalAge
    return age;         //retornando o valor de age após a soma para o original
}, 0);

console.log('\nIdade total das pessoas:', totalAge);

//juntando operações
const totalEvenAges = persons
                            .filter(persons => persons.age % 2 === 0) //% operador mode/divisão, ou seja, a divisão de 2
                                                                     //tem que ter como resto 0
                            .reduce((age, persons) => {
                                age += persons.age;
                                return age;
                            }, 0);

console.log('\nSoma de todas as pessoas que possuem idade par:', totalEvenAges);
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
const arr = ['banana', 'maçã', 'pêra', 'abacate'];
const arrLength = arr.push('acerola');
console.log(arrLength); //5
console.log(arr);       //banana, maçã, pêra, abacate, acerola
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
const arr = ['banana', 'maçã', 'pêra', 'acabate'];
const removeItem = arr.pop();
console.log(removeItem); //abacate
console.log(arr);       //banana, maçã, pêra
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
const arr = ['banana', 'maçã', 'pêra', 'abacate'];
const arrLength = arr.unshift('acerola');
console.log(arrLength); //5
console.log(arr);      //acerola, banana, maçã, pêra, abacate
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
const arr = ['banana', 'maçã', 'pêra', 'abacate'];
const arrLength = arr.shift();
console.log(arrLength); //banana
console.log(arr);      //maçã, pêra, abacate
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
const frutas = ['banana', 'maçã', 'pêra', 'abacate'];
const salgados = ['coxinha', 'kibe', 'empada'];
const alimentos = frutas.concat(salgados);
console.log(frutas);    //banana, maçã, pêra, abacate
console.log(salgados);  //coxinha, kibe, empada
console.log(alimentos); //banana, maçã, pêra, abacate, coxinha, kibe, empada
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
const arr = [1, 2, 3, 4, 5];
arr.slice(0, 2); //2 é o final, portanto ele não pega a posição 2, no caso, o número 3
//[1, 2]
arr.slice(2);    //a partir da posição 2, contando ela mesmo: 3, 4, 5
arr.slice(-1);   //faz o inverso, ou seja, o resultado seria: 5
arr.slice(-3);   //conta três posições a partir da última, 3, 4, 5, inclusive ela mesma
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
const arr = [1, 2, 3, 4, 5];
arr.splice(2); //Imutável, vai contar a partir da posição 2: 3, 4, 5, e remove estes itens permanentemente
console.log(arr); //1, 2
arr.splice(0, 0, 'first');//o primeiro 0(parâmetro) indica a posição inicial do splice.
//o segundo 0(parâmetro), indica quantos itens eu irei remover, no caso não estou removendo nada.
//o terceiro parâmetro é o que eu vou querer adicionar a partir daquele primeiro parâmetro indicado
console.log(arr); //"first", 1, 2
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//Outro exemplo
const frutas = ['melancia', 'banana', 'mamão'];
frutas.splice(1, 0, "acerola");
console.log(frutas); //melância, acerola, banana, mamão
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//Outro exemplo
const frutas = ['melancia', 'banana', 'mamão'];
frutas.splice(2, 1, "acerola", "amora");
console.log(frutas); //melância, banana, acerola, amora
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
const arr = [1, 2, 3, 4, 5];
arr.forEach((value, index) => { //value = valor do item (1, 2, 3, 4, 5) e index a posição = (1 = 0, 2 = 1...)
    console.log(`${index}: ${value}`);
});
//--------------------------------------------------------------------------------------------------------
const frutas = ['melancia', 'banana', 'mamão'];
frutas.forEach((value, index, frutas) => {
    console.log(`Fruta: ${value} - Posição no array: ${index}`)
})
frutas.forEach((frutas, index) => console.log(index, frutas));
frutas.forEach((frutas, index, arr) => console.log(index, frutas, arr));
//só executa uma ação dentro do array, não altera
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//Map
//A diferença dele e o forEach, é que o Map retorna um novo array, do array selecionado
//o forEach apenas executa uma ação dentro do array
const arr = [1, 2, 3, 4, 5];
arr.map(value => value * 2);
//2, 4, 6, 8, 10
const frutas = ['melancia', 'banana', 'mamão'];
frutas.map((frutas, index) => `${index} + ${frutas}`);
console.log(frutas);
//neste exemplo foi criado um novo array frutas, com a concatenação do index com o frutas
//mas o array frutas permaneceu inalterado
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//Flat
const arr = [1, 2, [3, 4]];
arr.flat();
//1, 2, 3, 4
//ou seja, ele pegou um array arr que tinha 1 array dentro de um array, e transformou
//num novo array com os 2 arrays que já existiam nele juntos, dentro do parâmetro deste Flat
//especificamos a profundidade(depth) desejada, se não identificada o padrão é 1, ou seja, vai se
//"aprofundar" apenas 1 item dentro, se tivesse mais de 2 arrays ele concatenaria apenas 1
const idades = [20, 34, [40, 60, [70, 15]]];
console.log(idades);
idades.flat(2);
//retornará [20, 34, 40, 60, 70, 15]
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//flatMap
const arr = [1, 2, 3, 4, 5];
arr.flatMap(value => [value * 2]);
//2, 4, 6, 8, 10, esse exemplo só serve para mostrar que, se não tiver profundidade de array, ele servirá como um map normal
arr.flatMap(value => [[value * 2]]);
//[[2], [4], [6], [8], [10]]
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//Keys
const arr = [1, 2, 3, 4];
const arrIterator = arr.keys(); //pega todas as keys(index), ou seja, 0, 1, 2, 3, e vai criar um iterator
arrIterator.next();
// {value: 0, done: false}
arrIterator.next();
// {value: 1, done: false}
arrIterator.next();
// {value: 2, done: false}
arrIterator.next();
// {value: 3, done: true}
//iterator: conseguimos iterar ele por funções next, recuperar o valor corrente e saber quando terminou sua iteração.
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//Values
const arr = [1, 2, 3, 4];
const arrIterator = arr.values(); //pega todas os values(conteúdo), ou seja, 1, 2, 3, 4, e vai criar um iterator
arrIterator.next();
// {value: 1, done: false}
arrIterator.next();
// {value: 2, done: false}
arrIterator.next();
// {value: 3, done: false}
arrIterator.next();
// {value: 4, done: true}
//iterator: conseguimos iterar ele por funções next, recuperar o valor corrente e saber quando terminou sua iteração.
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//Entries
const arr = [1, 2, 3, 4];
const arrIterator = arr.entries();//pega todas as keys e values(index e conteúdo), e vai criar um iterator
arrIterator.next();
// {value: [0, 1], done: false}
arrIterator.next();
// {value: [1, 2], done: false}
arrIterator.next();
// {value: [2, 3], done: false}
arrIterator.next();
// {value: [3, 4], done: true}
//exemplo
const frutas = ['melancia', 'banana', 'mamão', 'amora'];
const frutasIterator = frutas.entries();
//o primeiro next dele é o 0, ou seja, melancia
frutasIterator.next();
//o próximo next dele é o 1, ou seja, banana e assim sucessivamente até o último item, onde ele se torna true
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//Find
const arr = [1, 2, 3, 4];
const firstGreaterthanTwo = arr.find(value => value > 2);
console.log(firstGreaterthanTwo);
//retorna 3, pois é o primeiro número maior que 2 do array
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//findIndex
//igual o Find, porém retornará o index do primeiro item que satisfaz a condição
const arr = [1, 2, 3, 4];
const firstGreaterthanTwo = arr.findIndex(value => value > 2);
console.log(firstGreaterthanTwo);
//retornará 2, pois 2 é o index(posição) do número 3 no array
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//Filter
const arr = [1, 2, 3, 4];
const firstGreaterthanTwo = arr.filter(value => value > 2);
console.log(firstGreaterthanTwo);
//retornará [3, 4], ou seja, retorna um novo array com todos os itens dentro do array filtrado
//que satisfazem a condição exposta
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//indexOf
const arr = [1, 3, 3, 4, 3];
const firstIndexofItem = arr.indexOf(3);
console.log(firstIndexofItem);
//retornará 1, pois a primeira ocorrência do número 3 dentro da array, está no index de número 1
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//lastIndexOf
const arr = [1, 3, 3, 4, 3];
const firstIndexofItem = arr.lastIndexOf(3);
console.log(firstIndexofItem);
//retornará 4, pois é o index da última ocorrência de 3 dentro da array
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//Includes
const arr = [1, 3, 3, 4, 3];
const hasItemOne = arr.includes(1);
console.log(firstIndexofItem);
//retornará true, pois existe a ocorrência do número 1 dentro da arr array
const hasItemTwo = arr.includes(2);
console.log(firstIndexofItem);
//retornará false, pois não existe a ocorrência do número 2 dentro da arr array
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//Some
const arr = [1, 3, 3, 4, 3];
const hasSomeEvenNumber = arr.some(value => value % 2 ===0);
console.log(hasSomeEvenNumber);
//retornará true, pois existe o número 4 dentro do array que é par, conforme estipulado na condição
//sempre retornará true se existir no mínimo 1 condição satisfatória
const students = [
    {name: 'John', grade: 7},
    {name: 'Jenny', grade: 5},
    {name: 'Peter', grade: 4}
];
students.some(student => students.grade >= 7);
//retornará true, pois existe pelo menos 1 aluno que tirou nota igual ou maior que 7
students.find(student => students.grade >= 7);
//retornará "John", grade: 7, pois é o primeiro item que satisfaz
students.findIndex(student => students.grade >= 7);
//retornará 0, pois o aluno John está na posição 0 do array
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//Every
const arr = [1, 3, 3, 4, 3];
const allEvenNumbers = arr.every(value => value % 2 === 0);
//retornará false, pois every checa se TODOS os itens do array estão de acordo com a condição, no caso
//se todos os números fossem par, seria true
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//Sort
const students = [
    {name: 'John', grade: 7},
    {name: 'Jenny', grade: 5},
    {name: 'Peter', grade: 4}
];
students.sort((current, next) => current.grade - next.grade);
//{name: 'Peter', grade: 4},
//{name: 'Jenny', grade: 5},
//{name: 'John', grade: 7}
//ordena os itens de acordo com a condição especificada
const arr = [1, 3, 2, 5, 4];
arr.sort();
//retornará [1, 2, 3, 4, 5];
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//Reverse
const arr = [1, 2, 3, 4, 5];
arr.reverse();
//retornará [5, 4, 3, 2, 1];
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//Join
const arr = [1, 2, 3, 4, 5];
arr.join('-');
//retornará "1-2-3-4-5" como string e o traço entre eles
//join transforma array em string
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//Reduce
const arr = [1, 2, 3, 4, 5];
arr.reduce((total, value) => total += value, 0);// o primeiro parâmetro é o retorno, neste caso denominado total
//o 0 determina o início do parâmetro total, ou seja, total = total(0) + value
//o retorno final é 15, pois 1 + 2 = 3, 3 + 3 = 6, 6 + 4 = 10, 10 + 5 = 15
const students = [
    {name: 'John', grade: 7},
    {name: 'Jenny', grade: 5},
    {name: 'Peter', grade: 4}
];
students.reduce((totalGrades, student) => totalGrades += students.grade, 0);
//retornará 16, pois conforme especificado, somará 0 + 7, dps 7 + 5, dps 12 + 4 = 16
students.reduce((studentsNames, student) => studentsNames += students.name + ' ', '');
//retornará John Jenny Peter, ao invés de determinarmos o valor de studentsNames como 0, determinamos como
//uma string, pois o objetivo era mostrar os students.names