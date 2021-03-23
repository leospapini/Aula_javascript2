function fn(){
    log('Hoisting de função');

    function log(value); {
        console.log(value);
    }
}

fn();

function fn(){
    function log(value) {
        console.log(value);
    }

    log('Hoisting de função');
}
// Com funções, neste caso acima por exemplo o console mostraria o Log 'Hoisting de função'
// mesmo que a função tenha declarada depois do comendo console.log
// porém, deve-se sempre declarar antes de utilizar as funções como boa prática