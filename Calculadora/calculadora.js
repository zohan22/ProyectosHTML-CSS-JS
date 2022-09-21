let mostrar = document.getElementById('mostrar')
const numeros = document.getElementById('numero')
const operacion = document.getElementsByClassName('operacion')
const signo = document.getElementsByClassName('signo')
const eliminar = document.getElementsByClassName('eliminar')[0]
const igual = document.getElementsByClassName('igual')[0]

numeros.addEventListener('click', mostrarNumero)


function mostrarNumero(){
    for (let numero of numeros) {
        console.log(numero.innerText)
    }

}