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