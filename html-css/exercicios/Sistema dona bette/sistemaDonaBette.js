document.addEventListener("DOMContentLoaded", () => {
    let totalAcumulado = 0
    const display = document.getElementById("total-placar")
    const displayMsg = document.getElementById("status-msg")
    const listaHistorico = document.getElementById("lista-historico")
    const btn-Reset = document.getElementById("btn-reset")
    const botoesDados = document.querySelectorAll(".btn-dado")

    // função rolar o dado

    const rolarDado = (faces) => {
        const resultado = Math.floor(Math.random()* faces+1
        totalAcumulado += resultado

    
        // atualiza interface

        displayTotal.textContent = totalAcumulado
        displayMsg.textContent = "Rolou d${faces}: tirou ${resultado}"

        // adiciona ao historico

        const novoItem = document.createElement("Li")
        novoItem.textContent = "D${faces} resultou em ${resultado}"
        listaHistorico.prepend(novoItem)

        // Event listerns para os botões de dados

        botoesDados.forEach(botao => {
            botao.addEventListener("click"() => {
                rolarDado(faces)

            })

            // Event listener para reset

            btnRest.addEventListener("click" ())
        })



    }
}