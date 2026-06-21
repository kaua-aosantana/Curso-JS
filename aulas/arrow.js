// Funcoes Lambda (Arrow Function) => funcoes anonimas

const soma = (...valores) => {

    let res = 0;
    for(numero of valores){
        res += numero
    }
    return res;
}
console.log(soma(10, 20, 30, 40));

const nome = n => {return `Oi ${n} bonitao!`} // quando se tem 1 unico parametro nao precisa dos parenteses
console.log(nome("Kaua"))

const adicionar = (n1, n2) => n1+n2; // uma unica operacao nao precisa de chaves nem do return

console.log(adicionar(15,15));