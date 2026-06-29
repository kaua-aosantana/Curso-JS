const botaoAdicionar = document.getElementById("btn-adicionar")
const botaoReiniciar = document.getElementById("btn-reiniciar")
const cartaoHTML = document.getElementById("cartao")
const textoCartao = document.getElementById("texto-cartao")
const botoesVerificar = document.getElementsByClassName("btn")
const botaoNovoBaralho = document.getElementById("btn-novoBaralho")
const totalCartoes = document.getElementById("total-cartoes")
const totalAprendidos = document.getElementById("total-aprendidos")
const totalRevisao = document.getElementById("total-revisao")

for(const b of botoesVerificar){
    b.style.pointerEvents = "none" // Impedir de clicar nele antes de clicar em ver a resposta
}

let cartoes = [] // {frente: Pergunta, verso: Resposta, acerto: true/false}
let cartaoAtual

function cadastroCartao(p, r){
    // Adiciona o cartao na lista
    cartoes.push({frente: p, verso: r, acerto: false})

    // Guardar na memoria
    atualizarMemoria()
}
function atualizarMemoria(){
    localStorage.setItem("flashcards", JSON.stringify(cartoes))
}
function carregarMemoria(){
    let cartoesCarregados = localStorage.getItem("flashcards")

    // Verificar se tem dados carregados
    if (cartoesCarregados === null){
        textoCartao.textContent = "Nenhum cartão cadastrado"
        return
    }

    cartoes = JSON.parse(cartoesCarregados)

    iterator = localizarCartao()
    cartaoAtual = avancarIterator()
    atualizarPlacar()
    if(cartaoAtual === null){
        acabarFila()
        return
    }
    adicionarCartao("pergunta")
}

function apagarMemoria(){
    if(prompt("Digite REINICIAR para excluir os cartões salvos na memoria") === "REINICIAR"){
        cartoes = []
        return localStorage.removeItem("flashcards")
    }
}

function* localizarCartao(){
    for(const cartao of cartoes){
        if(cartao.acerto === false){
            yield cartao
        }
    }
}
let iterator = localizarCartao() // 1º chamada

function avancarIterator(){
    let proximo = iterator.next()

    if (proximo.done === true) return null
    else return proximo.value
}
function acabarFila(){
    textoCartao.textContent = "Revisão concluída!"

    // Travar os botoes
    cartaoHTML.style.pointerEvents = "none"
    for(const b of botoesVerificar){
        b.style.pointerEvents = "none"
    }

}
function atualizarPlacar(){
    totalCartoes.textContent = [...cartoes].length
    totalAprendidos.textContent = cartoes.filter(c => c.acerto === true).length
    totalRevisao.textContent = cartoes.filter(c => c.acerto === false).length
}

function adicionarCartao(parametro){

    if(cartaoAtual === undefined) return

    textoCartao.innerHTML = ""
    // Colocar o cartao no html
    if (parametro === "pergunta"){
        textoCartao.textContent = `${cartaoAtual.frente}`
    }
    else if (parametro === "resposta"){
        textoCartao.textContent = `${cartaoAtual.verso}`
    }
}

carregarMemoria() // Pegar os dados da memoria quando atualiza a pagina e imprime a 1º pergunta caso tenha

botaoReiniciar.addEventListener("click", () => {
    apagarMemoria()
    carregarMemoria()
    atualizarPlacar()
    cartaoAtual = null
})

botaoAdicionar.addEventListener("click", () =>{
    let pergunta = prompt("Qual a pergunta?")
    let resposta = prompt("Qual a resposta?")

    cadastroCartao(pergunta, resposta)

    iterator = localizarCartao() // reiniciar a funcao
    cartaoAtual = avancarIterator()

    adicionarCartao("pergunta")
    atualizarPlacar()
})

cartaoHTML.addEventListener("click", () => {

    if(cartaoAtual === undefined || cartaoAtual === null){
        return
    }
    if(cartaoAtual.frente === "Revisão Concluída"){
        return
    }
    adicionarCartao("resposta")
    cartaoHTML.classList.toggle("descoberto")

    cartaoHTML.style.pointerEvents = "none"
    for(const b of botoesVerificar){
        b.style.pointerEvents = "auto"
    }
})

for (const b of botoesVerificar){
    b.addEventListener("click", () => {
        if(b.id === "btnAcerto"){
            cartaoAtual.acerto = true
        }
        else{
            cartaoAtual.acerto = false
        }
        atualizarMemoria()

        cartaoHTML.style.pointerEvents = "auto"
        cartaoHTML.classList.remove("descoberto")

        cartaoAtual = avancarIterator()
        atualizarPlacar()
        console.log(cartaoAtual)
        if (cartaoAtual === null){
            acabarFila()
            return
        }
        adicionarCartao("pergunta")
    })
}

botaoNovoBaralho.addEventListener("click", () => {
    cartaoHTML.classList.remove("descoberto")
    iterator = localizarCartao()
    
    for(const c of cartoes){
        c.acerto = false
    }

    cartaoHTML.style.pointerEvents = "auto"
    for(const b of botoesVerificar){
        b.style.pointerEvents = "auto"
    }
    cartaoAtual = avancarIterator()

    adicionarCartao("pergunta")
    atualizarPlacar()
})