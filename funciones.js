function calcularPromedio() {
    const notaMatematica = parseFloat(document.getElementById('matematica').value);
    const notaLengua = parseFloat(document.getElementById('lengua').value);
    const notaEFSI = parseFloat(document.getElementById('efsi').value);
  
    if (notaMatematica >= 1 && notaMatematica <= 10 &&
        notaLengua >= 1 && notaLengua <= 10 &&
        notaEFSI >= 1 && notaEFSI <= 10) {
      const promedio = (notaMatematica + notaLengua + notaEFSI) / 3;
  
      const resultadoDiv = document.getElementById('resultado');
      resultadoDiv.textContent = `El promedio del alumno es: ${promedio}`;
      resultadoDiv.style.color = promedio >= 6 ? 'green' : 'red';
    } else {
      alert('Las notas deben estar entre 1 y 10');
    }
  }

  function validarNota(ingresado) {
    let nota = parseFloat(ingresado.value);
    if (nota >= 1 && nota <= 10) {
      ingresado.style.color = nota >= 0 && nota <=10? "green" : "red" ;
    } else {
      ingresado.style.color = "red";
    }
  }

function mostrarMateriaMayorNota() {
    let matematica = parseFloat(document.getElementById('matematica').value);
    let lengua = parseFloat(document.getElementById('lengua').value);
    let efsi = parseFloat(document.getElementById('efsi').value);

    if (isNaN(matematica) || isNaN(lengua) || isNaN(efsi)) {
        alert("Todos los campos deben contener notas válidas.");
        return;
    }

    let maxNota = Math.max(matematica, lengua, efsi);
    let materias = [];
    if (maxNota === matematica) materias.push("Matemática");
    if (maxNota === lengua) materias.push("Lengua");
    if (maxNota === efsi) materias.push("EFSI");

    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML += `<br><span style="color:black">La(s) materia(s) con mayor nota es(son): </span><span style="color:blue">${materias.join(', ')}</span>`;
}