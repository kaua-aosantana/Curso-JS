/* Estrutura de loop == Iteração
Tipos de loop
    Definidos:
        FOR(inicializacao, condicao, inclemento/declemento){bloco}
    Indefinidos:
        While
        Do while
*/
for(let contador = 0; contador <= 10; contador++){
    if (contador % 2 == 0){
        console.log("Par: " + contador);
    }else{
        console.log("Impar: " + contador);
    }
}

console.log("Fim do programa");