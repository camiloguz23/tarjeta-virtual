// DECLARACION DE VARIABLES PARA EL DOM

var mensaje = document.getElementById("mensaje");
var ventana = document.getElementById("ventana");
var usuario = document.getElementById("usuario");
var personal = document.getElementById("personal");

// EVENTOS 
mensaje.addEventListener("click", mostrar);

ventana.addEventListener("click", ocultar);

usuario.addEventListener("click", mostrar_personal);

personal.addEventListener("click", ocultar_personal)

// FUNCIONES 
function mostrar() {
    ventana.style.display = "block";   
};

function ocultar() {
    ventana.style.display = "none"   
};

function mostrar_personal() {
    personal.style.display = "block";
};

function ocultar_personal() {
    personal.style.display = "none";
};
