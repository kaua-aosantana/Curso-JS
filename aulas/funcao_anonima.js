// A definicao dela nao é guardada na memoria, so é criada na hora da execucao

const funcaoSoma = function(...valores){
    let res = 0;
    for(v of valores){
        res += v;
    }
    return res;
}

console.log(funcaoSoma(10, 20));

// Funcao construtor => funcoes simples

const soma = new Function("v1", "v2", "return v1+v2"); // ultimo parametro é o bloco da funcao
console.log(soma(25,24));