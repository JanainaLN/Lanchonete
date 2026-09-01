const button = document.querySelector("button")
const inputCodigo = document.getElementById("codigo")
const inputQuantidade = document.getElementById("quantidade")
const paragrafoResultado = document.getElementById("resultado")

button.addEventListener("click", calcular)

function calcular() {
    const codigo = inputCodigo.valueAsNumber 
    const quantidade = inputQuantidade.valueAsNumber 

    let total;


    if(codigo === 1){
        total =  5 * quantidade;
        paragrafoResultado.textContent = 'Valor = R$ ' + total.toFixed(2);
        }
    else if(codigo === 2){
        total = 3.5 * quantidade;
        paragrafoResultado.textContent = 'Valor = R$ ' + total.toFixed(2);
        }
    else if(codigo === 3){
        total =  4.8 * quantidade;
        paragrafoResultado.textContent = 'Valor = R$ ' + total.toFixed(2);
    }
    else if (codigo === 4){
        total = 8.9 * quantidade;
        paragrafoResultado.textContent = 'Valor = R$ ' + total.toFixed(2);
    }
    else if(codigo === 5){
        total = 7.32 * quantidade;
        paragrafoResultado.textContent = 'Valor = R$ ' + total.toFixed(2);
    }

    else{
        paragrafoResultado.textContent = 'Código do produto inválido';
    }

}