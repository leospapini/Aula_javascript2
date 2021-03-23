var test = 'example';
//criamos variável no escopo global

(() => {
    console.log("Valor dentro da função: " + test);
    //demos um console.log na primeira linha, para saber o valor dela

    if (true) {
        var test = 'example';
        console.log("Valor dentro do if: " + test);
    } //dentro deste if (true), estamos declarando de novo a var test, mudando o valor dela
      //dentro deste bloco de função if, dando o console.log de novo

    console.log("Valor após a execução do if: " + test);
    //aqui damos outro console.log para verificar como ficou o test após a execução da função if
})();
//(() representa um escopo de função, abreviado, como se fosse 
//function teste(){
//      
//}()