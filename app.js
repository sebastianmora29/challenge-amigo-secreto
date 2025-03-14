// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    //capturamos el nombre ingresado
    const nombre = document.getElementById("amigo").value;
    
    //valida la entrada
    if(nombre == "") {
        alert("Por favor, inserte un nombre.")
    }else { //actualiza el array si es valido
        amigos.push(nombre);
    }

    //limpia el input
    limpiarCaja();

    mostrarAmigos();

}

function limpiarCaja() {
    document.getElementById("amigo").value = "";
}

function mostrarAmigos() {

    //obtener el elemento <ul> donde se mostrarán los amigos
    const lista = document.getElementById('listaAmigos');

    //limpiar la lista antes de agregar los nuevos elementos
    lista.innerHTML = "";

    //usamos un bucle for para recorrer el array de amigos
    for (let i = 0; i < amigos.length; i++) {
    //crear un nuevo <li> para cada amigo
    const li = document.createElement('li');
    li.textContent = amigos[i];
    
    //añadir el <li> a la lista
    lista.appendChild(li);
    }

}