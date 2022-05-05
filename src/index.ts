let btnEnviar1 = <HTMLButtonElement>document.getElementById("btnEnviar1");
let btnEnviar2 = <HTMLButtonElement>document.getElementById("btnEnviar2");
let btnEnviar3 = <HTMLButtonElement>document.getElementById("btnEnviar3");
let btnEnviar4 = <HTMLButtonElement>document.getElementById("btnEnviar4");
let notasAlumno: number[] = Array(9);
notasAlumno = [7, 6, 9, 5, 8, 7, 10, 4, 8];
//Next the function Month Disapproved!!
function desaprobarAlumno(ingresoNota: number[]) {
  let indice: number;
  for (indice = 0; indice < ingresoNota.length; indice++) {
    if (ingresoNota[indice] < 6) {
      console.log(" El Alumno desaprobo en el mes numero:   " + (indice + 3));
    }
  }
}
//Next the function Minor Note!!
function notaMenor(ingresoNota: number[]) {
  let indice: number;
  let notaMenor: number = ingresoNota[0];
  let mesNota: number = 0;
  for (indice = 0; indice < ingresoNota.length; indice++) {
    if (ingresoNota[indice] <= notaMenor) {
      notaMenor = ingresoNota[indice];
      mesNota = indice + 3;
    }
  }
  console.log(
    " El Alumno obtuvo la menor nota en el mes  :   " +
      mesNota +
      "     y la nota fue:   " +
      notaMenor
  );
}
//Next the function Mayor Note!!
function notaMayor(ingresoNota: number[]) {
  let indice: number;
  let notaMayor: number = ingresoNota[0];
  let mesNota: number = 0;
  for (indice = 0; indice < ingresoNota.length; indice++) {
    if (ingresoNota[indice] >= notaMayor) {
      notaMayor = ingresoNota[indice];
      mesNota = indice + 3;
    }
  }
  console.log(
    " El Alumno obtuvo la Mayor nota en el mes  :   " +
      mesNota +
      "     y la nota fue:   " +
      notaMayor
  );
}
//Next the function Average!!
function notaPromedio(ingresoNota: number[]) {
  let notaPromedio: number = 0;
  let sumaNotas: number = 0;
  let indice: number;
  for (indice = 0; indice < ingresoNota.length; indice++) {
    sumaNotas = sumaNotas + ingresoNota[indice];
  }
  notaPromedio = sumaNotas / ingresoNota.length;
  return notaPromedio;
}

btnEnviar1.addEventListener("click", () => {
  desaprobarAlumno(notasAlumno);
});
btnEnviar2.addEventListener("click", () => {
  notaMenor(notasAlumno);
});

btnEnviar3.addEventListener("click", () => {
  notaMayor(notasAlumno);
});
btnEnviar4.addEventListener("click", () => {
  console.log(
    "El promedio de nota del alumno fue:   " + notaPromedio(notasAlumno)
  );
});
