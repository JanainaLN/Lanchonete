const button = document.querySelector("button")
const inputCodigo = document.getElementById("codigo")
const inputQuantidade = document.getElementById("quantidade")
const paragrafoResultado = document.getElementById("resultado")

button.addEventListener("click", calcular)

function calcular() {
    const codigo = inputCodigo.valueAsNumber 
    const quantidade = inputQuantidade.valueAsNumber 
    const valor = inputValor.valueAsNumber 


    if(codigo === 1){
       const  valor = 5.00
    }
  

    /*
    if (inputPreco.value === "" || inputQuantidade.value === "" || inputPreco.value === "") {
        alert("Digite um valor válido.")
        return
    }

    const total = preco * quantidade // 27

    if (valor >= totalCompra) {
        const troco = valor - totalCompra
        const trocoFormatado = troco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
        paragrafoResultado.textContent = `Troco: ${trocoFormatado}`
    } else {
        const valorDevido = totalCompra - valor
        const valorDevidoFormatado = valorDevido.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
        paragrafoResultado.textContent = `Dinheiro insuficiente. Faltam ${valorDevidoFormatado}`
    } */
}