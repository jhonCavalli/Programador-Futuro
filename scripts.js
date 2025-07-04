
/*
 
[x]  descobrir quando no botao foi clicado
[x]  pegar o que foi escrito m input
[]  enviar para o n8n
[] recber o que o n8n respondeu  
[] colocar na tela o que ele respondeu
[] 
*/



let webhook = "https://srcavalli.app.n8n.cloud/webhook-test/animacao-css"

async function clicarNoBotao() {
    let textoInput = document.querySelector(".input-animacao").value
    let codigo = document.querySelector(".area-codigo")
    let areaResultado = document.querySelector(".area-resultado")

    let resposta = await fetch(webhook, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pergunta: textoInput })
    })

    let resultado = await resposta.json()

    let info = JSON.parse(resultado.resposta)

    codigo.innerHTML = info.code
    areaResultado.innerHTML = info.preview


    document.head.insertAdjacentHTML('beforeend', "<style>"+info.style +"</style>")
    // enviar para IA
}




