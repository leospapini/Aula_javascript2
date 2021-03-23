//for


const array = ['one', 'two', 'three'];

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(`Element #${index}: ${element}.`);
}

//while

var n = 0;
var x = 0;
while (n < 3) {
    n++;
    x += n;
}

console.log(x);


//do

let i = 0;
do {
    i += 1;
    console.log(i);
}while (i < 5);

//for...in e for...of

let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
    console.log(i); //logs "0", "1", "2", "foo"
}//ou seja, in executa as propriedades dentro do objeto e o que foi adicionado depois, 
//no caso 0 representa o index 3, 1 o 5, 2 o 7 e foo o hello, conforme adicionado depois

for (let i of arr) {
    console.log(i); //logs "3", "5", "7"
}//ou seja, of executa apenas o conteúdo de dentro do objeto, sem contar o que foi adicionado
//depois, pois só mostra o que foi numerado

//controle de repetição: continue

console.log('\nExemplo da utilização de continue');
const array1 = [1, 2, 3, 4, 5, 6];

for (let index1 = 0; index1 < array1.length; index1++) {
    const element1 = array1[index1];

    if (element1 % 2 === 0) {
        continue;
    }
    console.log(element1);
}//ou seja, todos os números que forem par, serão pulados, porque existe o continue;
//dizendo isso para a função, se o element1 % 2 === 0, continue; ou seja, pule