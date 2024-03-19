const materias = (matematica, lengua,efsi );
function validarNota(inputId) {
    let input = document.getElementById(inputId);
    let valor = parseFloat(inputId.valor);
    
    if (  valor< 1 || valor > 10) {
        input.body.style.backgroudColor = "red";
    } else {
        input.body.style.backgroundColor = "green";
    }
}
function calcularPromedio() {
    let matematica = parseFloat(document.getElementById('matematica').value);
    let lengua = parseFloat(document.getElementById('lengua').value);
    let efsi = parseFloat(document.getElementById('efsi').value);

    if (isNaN(matematica) || isNaN(lengua) || isNaN(efsi)) {
        alert("Todos los campos deben contener notas válidas.");
        return;
    }

    let promedio = (matematica + lengua + efsi) / 3;
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `El promedio del alumno es: <span style="color:${promedio >= 6 ? 'green' : 'red'}">${promedio.toFixed(2)}</span>`;
}
