// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    //capturamos el nombre ingresado
    const nombre = document.getElementById("amigo").value;
    
    //valida la entrada
    if(nombre == "") {
        alert("Por favor, inserte un nombre.")
    }else { //actualiza el array si es valido
        amigos.push(nombre)
    }

    //limpia el input
    limpiarCaja()

}

function limpiarCaja() {
    document.getElementById("amigo").value = "";
}

