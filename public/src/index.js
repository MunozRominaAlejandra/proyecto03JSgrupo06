import {mascotas, anotarMascota} from "./componentes/mascotas.js";

const formulario = document.getElementById("formulario");

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
    formulario.reset();
});