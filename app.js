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

function sortearAmigo() {
    //validar si hay amigos disponibles en el array
    if (amigos.length === 0) {
    alert('No hay amigos para sortear. Por favor, añada algunos amigos primero.');
    return;
    }

    //generar un índice aleatorio usando Math.random() y Math.floor()
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //obtener el nombre sorteado usando el índice aleatorio
    const amigoSorteado = amigos[indiceAleatorio];

    //mostrar el resultado en el elemento de resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p>El amigo sorteado es: <strong>${amigoSorteado}</strong></p>`;
}