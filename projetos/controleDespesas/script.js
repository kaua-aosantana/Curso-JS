const descricao = document.getElementById("idesc")
const valor = document.getElementById("ivalor")
const tipoMov = document.getElementById("itipo")
const botao = document.getElementById("botao")
const tabela = document.getElementById("tabela")

let movimentacao = []

function gravarMov(d, v, t){
    movimentacao.push({desc: d, valor: v, tipo: t})
    atualizarTabela()
}
function atualizarTabela(){
    tabela.innerHTML = ""

    for(const m of movimentacao){
        let linha = document.createElement("tr")
        for(c of ["desc", "valor", "tipo"]){
            let coluna = document.createElement("td")
            coluna.textContent = m[c]
            linha.appendChild(coluna)
        }
        tabela.appendChild(linha)
    }
}
botao.addEventListener("click", () => {
    gravarMov(descricao.value, Number(valor.value), tipoMov.value)
    console.log(movimentacao)
})