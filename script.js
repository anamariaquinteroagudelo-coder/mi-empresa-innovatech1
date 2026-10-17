// Función para alternar entre las secciones de la página web
function mostrarSeccion(idSeccion) {
    // Selecciona todas las secciones
    const secciones = document.querySelectorAll('.seccion');
    
    // Oculta todas las secciones
    secciones.forEach(seccion => {
        seccion.classList.add('oculta');
    });
    
    // Muestra únicamente la sección cuyo ID coincide con el botón presionado
    const seccionActiva = document.getElementById(idSeccion);
    if (seccionActiva) {
        seccionActiva.classList.remove('oculta');
    }
}
function mostrarSeccion(nombre) {
    const secciones = document.querySelectorAll(".seccion");

    secciones.forEach(function(seccion) {
        seccion.classList.remove("activa");
    });

    const seleccionada = document.getElementById(nombre);

    if (seleccionada) {
        seleccionada.classList.add("activa");
    }
}

function enviarMensaje() {
    const nombre = document.getElementById("nombre").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const respuesta = document.getElementById("respuesta");

    if (nombre === "" || mensaje === "") {
        respuesta.textContent = "Por favor, completa tu nombre y tu mensaje.";
        return;
    }

    respuesta.textContent =
        "¡Gracias, " + nombre + "! Tu mensaje se ha preparado correctamente.";

    document.getElementById("nombre").value = "";
    document.getElementById("mensaje").value = "";
}

const formulario = document.getElementById("formulario");
const respuesta = document.getElementById("respuesta");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();

    respuesta.textContent =
        "Gracias, " + nombre +
        ". Tu mensaje está listo, pero todavía no se ha enviado.";

    formulario.reset();
});