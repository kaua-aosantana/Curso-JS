// Percorrer arrays => percorre toda a colecao

const cursos = ["HTML", "CSS", "JS", "PHP", "React"];

// Rascunho: lista.map(funcao(item da colecao, indice){bloco da funcao})

cursos.map((elemento, indice)=>{
    console.log(`item: ${elemento} e seu indice: ${indice}`);
});

// Usa-se quando quer utilizar todos os itens da colecao sem excecao

// Com return

const alunos = ["Kaua", "Afonso", "Gustavo"];

let nomeAlunos = alunos.map((el, i) => {
    return el;
});

console.log(nomeAlunos); // Joga todos os elementos dentro de uma variavel

// Map chamando funcao ja definida
const converterInt = (elemento) => parseInt(elemento);

let numeros = ["1", "2", "3", "4", "0"].map(converterInt); // transformou em numeros

console.log(numeros);
