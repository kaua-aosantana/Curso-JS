/*
Operadores Bitwise:
faz comparacoes logicas no bit a bit dos numeros na base binaria

& == AND
	ele retorna 1 se tiver 1 em cima e embaixo e 0 caso contrario
	ex:
	10 & 11 -> 1010 e 1011 -> 1010
| == OR
	ele retorna 1 se tiver um ou dois 1 emcima e embaixo, 0 se tiver dois 0
	ex:
	10 | 11 -> 1010 e 1011 -> 1011

Tabela verdade

&
	1 & 1 -> 1
	1 & 0 -> 0
	0 & 1 -> 0
	0 & 0 -> 0

|
	1 | 1 -> 1
	1 | 0 -> 1
	0 | 1 -> 1
	0 | 0 -> 0

^
	1 ^ 1 -> 0
	1 ^ 0 -> 1
	0 ^ 1 -> 1
	0 ^ 0 -> 0

Deslocamento de bits

<< para direita: X << Y -> X*2^(Y)
>> para esquerda: X >> Y -> X/2^(Y)

10 << 1 -> 1010 >> 1 -> 0101 == 5
10 >> 1 -> 1010 << 1 -> 10100 == 20

*/
let n1 = 100; // (1010)2
let n2 = 11; // (1011)2

let res = n1 >> 2;

console.log(res);