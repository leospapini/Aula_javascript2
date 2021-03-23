//EXEMPLO DE COMO SE IMPORTA PARÂMETROS DE UM .JS PARA OUTRO COM O MODULE.EXPORTS

const {getName, setName} = require('./DesignPatterns');

console.log(getName());
console.log(setName('Leonardo'));
console.log(getName());