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
mostrarContador();

formulario.addEventListener("submit", function(e) {

    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const tipo = document.getElementById("tipo").value;
    const edad = document.getElementById("edad").value;
    const dueño = document.getElementById("dueño").value;
    const vacuna = document.querySelector("input[name='Vacuna']:checked").value;

    const mascota=anotarMascota(nombre, tipo, edad, dueño, vacuna);
    mascotas.push(mascota);

    console.log(mascotas);
    mostrarContador();
    formulario.reset();
});