function fn(){
    console.log(text);

    var text = 'Exemplo';

    console.log(text);
}

fn();

function fn(){
    var text;
    console.log(text);

    text = 'Exemplo';

    console.log(text);
}
// neste exemplo, o primeiro console.log mostrará como undefined pois a variável foi definida
// após sua execução