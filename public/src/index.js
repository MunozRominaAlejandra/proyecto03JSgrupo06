
import { contarMascotas } from "./componentes/conteo.js" ;
import {mascotas, anotarMascota} from "./componentes/mascotas.js";
const resumenDiv = document.getElementById("resumen");
const formulario = document.getElementById("formulario");

function mostrarContador() {
  const conteo = contarMascotas(mascotas);
  resumenDiv.innerHTML = `
    <p>Total de mascotas: <b>${conteo.total}</b></p>
    <p>Vacunadas: <b>${conteo.vacunadas}</b></p>
    <p>No vacunadas: <b>${conteo.noVacunadas}</b></p>
  `;
}

//Almacenar el registro de cada Mascota
formulario.addEventListener("submit", function(e) {

    e.preventDefault();
    const nombre = document.getElementById("nombreM").value;
    const tipo = document.getElementById("TipoM").value;
    const edad = document.getElementById("edad").value;
    const dueño = document.getElementById("nombreD").value;
    const vacuna = document.querySelector("input[name='Vacuna']:checked").value;

    const mascota=anotarMascota(nombre, tipo, edad, dueño, vacuna);
    mascotas.push(mascota);

    console.log(mascotas);
    mostrarContador();
    formulario.reset();
});