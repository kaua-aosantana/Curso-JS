const input = document.getElementById("itarefa")
const botao = document.getElementById("botao")
const lista = document.getElementById("lista")
const filtro = document.getElementById("ifiltro")

let tarefas = [] // {tarefa: descricao, concluida: true/false}
let tarefasFiltradas = tarefas

function adicionarTarefa(valor){
    // Adicionar o objeto
    tarefas.push({tarefa: valor, concluida: false})
    atualizarLista()
}

function atualizarLista(){
    aplicarFiltro()
    lista.innerHTML = ""

    for(const t of tarefasFiltradas){
        let item = document.createElement("li")
        item.textContent = t.tarefa
        item.classList.toggle("concluido", t.concluida)

        item.addEventListener("click", () => {
            t.concluida = !t.concluida
            atualizarLista()
        })
        lista.appendChild(item)
    }
}

function aplicarFiltro(){
    const filtragem = {
        todas: [...tarefas],
        pendentes: tarefas.filter(t => t.concluida === false),
        concluidas: tarefas.filter(t => t.concluida === true)
    }
    tarefasFiltradas = filtragem[filtro.value]
}

filtro.addEventListener("change", () => {
    aplicarFiltro()
    atualizarLista()
})

botao.addEventListener("click", () =>{
    if(input.value === ""){
        return
    }
    adicionarTarefa(input.value)

    // Resetar o input
    input.value = ""
    input.focus()
})