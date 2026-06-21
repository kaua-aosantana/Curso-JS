/*
Quebra um array e devolve cada elemento
*/

let lista = [1, 2, 3, 4, 5];
let copia = [...lista]; // copiar toda a lista
let lista2 = [9, 3, 2, 0, 3];
let juncao = [lista, lista2]; // juntar 2 listas ou [...lista, ...lista2] -> object

console.log("lista: " + lista);
console.log("copia: " + copia);
console.log("juncao de 2 listas: " + juncao);

const jogador = {
	nome: "Kauã",
	energia: 100,
	vidas: 3
};
const trabalhador = {
	nome: "Recruta",
	cargo: "suporte",
	energia: 60
}

const perfil = {...jogador, ...trabalhador}; // junta 2 obj e deixa com as info do ultimo
console.log(perfil);

const soma = (v1,v2,v3)=>{
	return v1+v2+v3;
}
let valores = [1, 4, 2]
console.log(soma(...valores))