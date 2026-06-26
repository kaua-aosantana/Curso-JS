const botao = document.getElementById("botao")
const tabela = document.getElementById("tabela")
const filtro = document.getElementById("ifiltro")

let metas = [] // {id: , nome: , objetivo: , progresso: [], concluida: true/false}
let indice = 0

function adicionarLista(m, o){
    metas.push({id: ++indice, meta: m, objetivo: o, progresso: [], concluida: false})
    atualizarTabela()
}
let metasFiltradas = metas

function aplicarFiltro(f){
    const estadoFiltro = {
        todas: metas.filter(m => true),
        concluidas: metas.filter(m => m.concluida === true),
        abertas: metas.filter(m => m.concluida === false)
    }
    metasFiltradas = estadoFiltro[f]
}

function atualizarTabela(){
    // Limpar tabela
    tabela.innerHTML = ""

    //Aplica o filtro
    aplicarFiltro(filtro.value)

    // Inserir dados nas colunas
    for(const Meta of metasFiltradas){

        // Verificacao de conclusao da meta
        if(Meta["progresso"] >= Meta["objetivo"]){
            Meta["concluida"] = true
        }

        let linha = document.createElement("tr")
        for(i of ["id", "meta", "objetivo", "progresso"]){
            let coluna = document.createElement("td")
            linha.appendChild(coluna)

            // Aumentar o progresso
            if(i === "progresso"){
                coluna.textContent = Meta[i].reduce((acc, v) => acc + v, 0)
                break
            }

            coluna.textContent = Meta[i]
        }

        // Criacao de botao para atualizar progresso
        let coluna = document.createElement("td")
        let botaoProgresso = document.createElement("button")
        botaoProgresso.classList.add("btn-atualizar")
        botaoProgresso.textContent = "+"
        coluna.appendChild(botaoProgresso)
        linha.appendChild(coluna)

        // Funcao de click
        botaoProgresso.addEventListener("click", () => {
            let prog = Number(prompt("Adicione um novo progresso!"))
            Meta["progresso"].push(prog)
            console.log(Meta["progresso"])

            atualizarTabela()
        })

        tabela.appendChild(linha)
    }
}

botao.addEventListener("click", () => {
    let inputMeta = prompt("Qual o nome da sua nova meta?")
    let inputObj = prompt("Qual o seu objetivo?")

    // Validacao de inputs
    if (inputMeta === null || inputMeta === "" || inputObj == null || inputObj === ""){
        alert("Faltou indicar a descricao ou objetivo da meta. Tente novamente!")
    }
    else{
        adicionarLista(inputMeta, inputObj)
    }
})

filtro.addEventListener("change", () => {
    atualizarTabela()
})