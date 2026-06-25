const botoes = document.querySelectorAll("input[type='button']")
const caixa = document.getElementById("caixa")

const cores = {
    Azul: '#0000FF',
    Vermelho: '#FF0000',
    Verde: '#00FF00'
}

function colorir(c){
    caixa.style.backgroundColor = c
}

for(const botao of botoes){

    botao.addEventListener("click", function(){
        console.log(this.value)

        colorir(cores[this.value])
    })
}