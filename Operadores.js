//Aritméticos
// Módulo(%) Operador binário, retorna o inteiro restante da divisão
// dos dois operandos: 12 % 5 //retorna 2.
// Incremento(++) e Decremento (--) Unário
// ++x: exemplo: const a = ++2; //O operador já irá receber esse incrementado
// ou seja, irá receber 3
// x++: exemplo: const b = 2++; // receberá o valor atual, no caso, 2, mesma regra
// se aplica para decremento --x e x--
// Negação(-) e Adição(+)
// -3 //está negando 3
// +"3" //retorna 3
// +true //retorna 1
// +false //retorna 0
// -true //retorna -1
// Operador de agrupamento() // 2 * (3 + 2)
// Operador de exponenciação(**)
// 2 ** 3 //retorna 8, 2³
// 10 ** -1 //retorna 0.1

//Atribuição x = y
// Atribuição de adição // x = x + y ou x += y
// Atribuição de subtração // x = x - y ou x -= y
// Atribuição de multiplicação // x = x * y ou x *= y
// Atribuição de divisão // x = x / y ou x /= y
// Atribuição de resto // x = x % y ou x %= y

//Comparação
// Igual (==) //praticamente não utilizado, mas retorna
// verdadeiro caso os operandos sejam iguais
// "3" == var1
// 3 == '3'
// Não igual (!=) //retorna verdadeiro caso os operandos
// não sejam iguais
// var2 != "3"
// Estritamente igual (===) //utilizado sempre no lugar do ==
// retorna verdadeiro caso os operandos sejam iguais e do mesmo tipo
// 3 === var1
// Estritamente não igual (!==) //retorna verdadeiro caso os operandos
// não sejam iguais e/ou não sejam do mesmo tipo
// var1 !== "3"
// 3 !== '3'
// Maior que (>) //retorna verdadeiro caso o operando da esquerda seja
// maior que o da direita
// var2 > var1
// "12" > 2
// Maior ou igual (>=) //retorna verdadeiro caso o operando da esquerda
// seja maior ou igual ao da direita
// var2 >= var1
// var1 >= 3
// Menor que (<) //retorna verdadeiro caso o valor da esquerda seja menor
// que o da direita
// var2 < var1
// "12" < '2'
// Menor ou igual(<=) //retorna verdadeiro caso o valor da esquerda seja
// menor ou igual ao da direita
// var1 <= var2
// var2 <= 5

//Condicional: Operador ternário //primeira coisa que ele recebe é a condição
// no caso condicao true/false, se for true, recebe o primeiro valor, se for false
// recebe o segundo, no caso da condição ser true, se a condição for false ele
// recebe no primeiro valor false, e no segundo true
// condicao ? valor1 : valor2
// true ? 'foo' : 'bar' //retorna 'foo'
// false ? 'foo' : 'bar' //retorna 'bar'

//Lógicos: AND(&&), OU(||) e NOT (!)
// AND(&&) //a operação só será true se ambas as condições forem verdadeiras
// ou se tiver mais que duas, se todas forem verdadeiras.
// var a1 = true && true; //retorna true
// var a2 = true && false; //retorna false
// var a3 = false && true; //retorna false
// var a4 = false && (3 == 4); //retorna false
// var a5 = "gato" && "cao"; //retorna cão
// var a6 = false && "gato"; //retorna false
// var a7 = "gato" && false; //retorna false
// OU(||) //a operação sera verdadeira se qualquer uma das opções forem verdadeiras.
// var o1 = true || true; //retorna true
// var o2 = false || true; //retorna true
// var o3 = true || false; //retorna true
// var o4 = false || (3 == 4); //retorna false
// var o5 = "gato" || "cão"; //retorna gato
// var o6 = false || "gato"; //retorna gato
// var o7 = "gato" || false; //retorna gato
// NOT(!) //basicamente nega o valor
// var n1 = !true; //retorna false
// var n2 = !false; //retorna true
// var n3 = !"gato"; //retorna false

// Spread Operator: (...)
// var partes = ['ombro', 'joelhos'];
// var musica = ['cabeça', ...partes, 'e', 'pés'];
// //neste caso ele está apenas interando o conteúdo da var partes
// que é um array, no meio da array declarada como var musica, quase
// como uma concatenação


// function fn(x, y, z){}
// var args = [0, 1, 2];
// fn(...args);
// //se eu ter uma função com 3 parâmetros(x, y, z) eu consigo atribuir
// valores de uma array para estes parâmetros, neste caso os valores
// [0, 1, 2]; foram atribuidos a x, y e z através do código fn(...args);

//deletar algo
//delete something;

//determinar algo
//typeof something;
