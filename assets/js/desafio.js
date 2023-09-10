let imagenEjemploBorde = document.querySelector('#ejemplo-borde');

imagenEjemploBorde.addEventListener('click', () => {
    if (imagenEjemploBorde.style.border){
        imagenEjemploBorde.style.border = '';
    }else{
        imagenEjemploBorde.style.border = '5px solid red'; 
    }
});
//Ejercicio 2
const checkButton = document.querySelector(".check");

checkButton.addEventListener("click", () => {
    let num1 = document.querySelector('#gato1').value
    let num2 = document.querySelector('#gato2').value
    let num3 = document.querySelector('#gato3').value

    let total = +num1 + +num2 + +num3;

    if (total > 10) {
        document.querySelector('#resultstiker').textContent =
            'Llevas demasiados stickers';
    } else {
        document.querySelector('#resultstiker').textContent = 'Llevas ' + total + ' stickers';
    }
});
//Ejercicio 3
document.addEventListener("DOMContentLoaded", function () {
    const select1 = document.getElementById("select1");
    const select2 = document.getElementById("select2");
    const select3 = document.getElementById("select3");
    const ingresarBtn = document.getElementById("ingresar");
    const resultado = document.getElementById("resultado");

    ingresarBtn.addEventListener("click", function () {
        const password = select1.value + select2.value + select3.value;

        if (password === "911") {
            resultado.textContent = "Password 1 correcto";
            resultado.style.color = "green";
        } else if (password === "714") {
            resultado.textContent = "Password 2 correcto";
            resultado.style.color = "green";
        } else {
            resultado.textContent = "Password incorrecto";
            resultado.style.color = "red";
        }
    });
});