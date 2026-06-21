// funcao tem o controle dela mesma

function* cores(){
    yield "Vermelho"
    yield "Verde"
    yield "Azul"
}

const iterator = cores(); // 1º chamada da funcao

console.log(iterator.next().value); // next => proxima chamada pegar o 1º yield (valor)
console.log(iterator.next().value); // pega o 2º yield
console.log(iterator.next().value); // pega o 3º yield
console.log(iterator.next().value); // undefined pq nao tem mais proximo

function* perguntas(){
    const nome = yield "Qual o seu nome?";
    const esporte = yield "Qual o seu esporte favorito?";
    return "Seu nome é " + nome + " e seu esporte favorito é " + esporte;
}
const iperguntas = perguntas();
console.log(iperguntas.next().value);
console.log(iperguntas.next("Kaua").value);
console.log(iperguntas.next("Futebol").value);