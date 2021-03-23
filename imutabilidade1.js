const user = {
    name: 'Leonardo',
    lastName: 'Segobia Papini'
};

function getUserWithFullName(user) {
    return{
        ...user,
        fullName: user.name + ' ' + user.lastName,
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);

//neste exemplo podemos visualizar que, para fazer acréscimos de variáveis dentro de variáveis já existentes
//devemos fazer isso através do comando ...*variavel*, dentro de uma função, pois assim não mudaremos o caminho
//padrão da constante original, apenas adicionaremos uma nova variável a esta constante, sem mudar o caminho
//as variáveis que lá já existem