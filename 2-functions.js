(() => {
    this.name = 'arrow function';
    const getNameArrowFn = () => this.name;

    function getName () {
        return this.name;
    }

    const user = {
        name: 'Nome no objeto de execução',
        getNameArrowFn,
        getName
    }

    console.log(user.getNameArrowFn());
    console.log(user.getName());
})();

//se a função não estiver atrelada => pelo this.name global, dentro de um objeto, o this.name
//irá se referir ao name de dentro do objeto, e não do escopo global

//Essa é a principal diferença entre arrow function e function