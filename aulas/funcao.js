// funcao => bloco de comando que posso chamar quando oportuno e sempre que precisar

function nome(){
    console.log("Kaua"); // declaração
}

nome(); // chamada da função
nome();

// Funções com retorno

let hora = "tarde";

function saudacao(){
    if (hora == "manha"){
        return "Bom dia!"; // retorna esse valor
    }
    else if (hora == "tarde"){
        return "Boa tarde";
        return "Nao serei retornado pq ele para a funcao no 1º return que encontra";
    }
    else{
        return "Boa noite";
    }
}

let mensagem = saudacao(); // chamada retorna a string

console.log(mensagem);