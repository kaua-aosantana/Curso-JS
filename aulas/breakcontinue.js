/*
break => encerra o loop
continue => para ali e vai para proxima iteracao(loop)
*/
let n = 0;
let max = 20;

while (n<max){
    console.log(n);
    if (n >= 10){
        break; // para o loop quando chega em 10
    }
    n++;
}
console.log("Fim do programa");

for(let i=n;)