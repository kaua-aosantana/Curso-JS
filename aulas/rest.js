// Parametros Rest => quantidade de parametros indefinida
function soma(...valores){ // usa o spread
    let resultado = 0;
    for(let item of valores){
        resultado += item;
    }
    return resultado;
}

console.log(soma(10, 20, 30));