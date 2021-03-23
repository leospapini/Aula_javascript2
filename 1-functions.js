function fn() {
    return 'code here';
}

const arrowFn = () => 'code here';
//const arrowFn = () => 'code here'; tem a mesma função que
//function fn() {return 'code here';} ambas começam funções de 1 expressão,
//no caso expressões que apenas terão algo no return
//ambas não recebem parâmetros pois não tem nada entre parentes () e o return
//é uma string 'code here' conforme especificado

const arrowFn2 = () => {
    //funções com mais de 1 expressão, ou seja, com variáveis delimitadas mas com o return
    //específicado a parte
    int = 50;
    return 'code here';
}

//Por mais que funções sejam funções, elas sempre serão objetos, ou seja, sempre conseguiremos
//adicionar propriedades neles também
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

//Receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

//receber e retornar funções
const controlFnExec = fnParam => allowed => {
    if (allowed)  {
        fnParam();
    }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); //Executará a função fn
handleFnExecution();     //Não executará a função fn

//controlFnExec como função
// function controlFnExec(fnParam) {
//     return function(allowed) {
//         if (allowed){
//             fnParam;
//         }
//     }
// }