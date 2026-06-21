/*
Obs: quando so tem 1 comando dentro do bloco nao precisa colocar chaves
*/
let num = 140;

if (num > 10){
	console.log("Maior que 10");
	if (num > 100){ // Aninhamento => if dentro de if
		console.log("E maior que 100");
	}else{
		console.log("E menor ou igual a 100");
	}
}else if(num == 10){
	console.log("Igual a 10");
}else{
	console.log("Menor que 10");
}
console.log("Fim");