// if(condition) {
//     //code
// }

const array1 = [0, 1, 2, 3, 4, 5];

array1.forEach(item1 => {
     if(item1 % 2 === 0) {
         console.log(`O número ${item1} é par.`);
    }   else{
         console.log(`O número ${item1} é ímpar.`);
    }
});


const array = [2, 3, 4, 5, 6, 8, 10, 15];

console.log('\nelse if');
array.forEach(item => {
    if(item % 2 === 0) {
        console.log(`O número ${item} é divisível por 2.`);
    } else if(item % 3 === 0) {
        console.log(`O número ${item} é divisível por 3.`);
    } else if (item % 5 ===0) {
        console.log(`O número ${item} é divisível por 5.`);
    }
});

console.log('\nif');
array.forEach(item => {
    if (item % 2 === 0) {
        console.log(`O número ${item} é divisível por 2.`);
    }
    if (item % 3 === 0) {
        console.log(`O número ${item} é divisível por 3.`);
    }
    if (item % 5 === 0) {
        console.log(`O número ${item} é divisível por 5.`);
    }
})


const fruit = 'banana';

switch (fruit) {
    case 'banana':
        console.log('R$ 3,00/kg');
        break;
    case 'mamão':
    case 'pêra':
        console.log('R$ 2,00/kg');
        break;
    default:
        console.log('Produto não existe no estoque.');
        break;
}
//caso queiramos que o default mostre mesmo que os case tenham sido mostrados tbm, é só
// retirar os break; de antes do default, e deixar apenas o do default