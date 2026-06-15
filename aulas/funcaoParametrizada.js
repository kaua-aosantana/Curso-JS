// function nome(parametro){bloco}

function soma(num1 = 0, num2 = 5){ // parametro = valor padrão caso nao seja indicado
    return num1 + num2;
}

console.log(soma(10, 20)); // retorna a soma de 10 e 20

console.log(soma(10)) // nao definiu o num2 portanto ele fica com valor padrao