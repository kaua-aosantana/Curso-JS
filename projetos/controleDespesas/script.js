const descricao = document.getElementById("idesc")
const valor = document.getElementById("ivalor")
const tipoMov = document.getElementById("itipo")
const botao = document.getElementById("botao")
const tabela = document.getElementById("tabela")
const totalizadorEntradas = document.getElementById("total-entradas")
const totalizadorSaidas = document.getElementById("total-saidas")
const totalizadorSaldo = document.getElementById("saldo")
let movimentacao = []

function gravarMov(d, v, t){
    movimentacao.push({desc: d, valor: v, tipo: t})
    atualizarTabela()
}
function atualizarTabela(){
    // Limpar tabela
    tabela.innerHTML = ""

    // Adicionar os dados na tabela
    for(const m of movimentacao){
        let linha = document.createElement("tr")
        for(const c of ["desc", "valor", "tipo"]){
            let coluna = document.createElement("td")
            coluna.textContent = m[c]
            coluna.classList.add(m.tipo)
            linha.appendChild(coluna)
        }
        tabela.appendChild(linha)
    }
    //Calcular o total de entradas
    totalizadorEntradas.textContent = calcular("entradas")
    totalizadorSaidas.textContent = calcular("saidas")
    totalizadorSaldo.textContent = calcular("saldo")

}

function calcular(parametro){
    let entradas = movimentacao.reduce((acc, l) => {
        if(l.tipo === "entrada") return acc + l.valor
        else return acc
    }, 0)
    let saidas = movimentacao.reduce((acc, l) => {
        if(l.tipo === "saida") return acc + l.valor
        else return acc
    }, 0)

    if(parametro === "entradas"){
        return entradas
    }
    else if(parametro === "saidas"){
        return saidas
    }
    else{
        return entradas - saidas
    }
}

botao.addEventListener("click", () => {
    gravarMov(descricao.value, Number(valor.value), tipoMov.value)
    console.log(movimentacao)

    descricao.value = ""
    valor.value = ""
    descricao.focus()
})