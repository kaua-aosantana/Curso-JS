"use strict"
/*
Operadores logicos:
&& = and
|| = or
! = not

Tabela verdade
AND
	true && true -> true
	false && true -> false
	true && false -> false
	false && false -> false
OR
	true || true -> true
	false || true -> true
	true || false -> true
	false || false -> false
*/

let n1 = 1;
let n2 = 2;
let n3 = 3;

let condicao = n1 + n2 > n2 || n2 > n3; // 1º Aritmeticos 2º Relacionais 3º Logicos

console.log(condicao)