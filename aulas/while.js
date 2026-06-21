// while == enquanto
// estrutura: while (condicao){bloco executando enquanto condicao = true}

let numero = 5;
let fatorial = 1;
let decrescimo = 0;
while (decrescimo < numero){
    fatorial *= (numero - decrescimo);
    decrescimo++;
}
console.log(fatorial);