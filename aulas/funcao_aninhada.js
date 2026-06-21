const soma = (...numeros) => {
    const somar = valores => {
        let res = 0;
        for(valor of valores){
            res += valor;
        }
        return res;
    }
    return somar(numeros);
}
console.log(soma(10, 20));