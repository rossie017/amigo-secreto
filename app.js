// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    
    if (nombre !== "" && amigos.length < 5) {
        amigos.push(nombre);
        input.value = ""; // Limpiar la caja de texto
        console.log(amigos);
        mostrarLista();
    } else {
        alert("Debes ingresar un nombre válido y solo puedes agregar hasta 5 amigos.");
    }
}

function sortearAmigo() {
    if (amigos.length === 5) {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
 
       // Obtener el elemento UL donde se mostrará el resultado
       const resultadoLista = document.getElementById("resultado");
       resultadoLista.innerHTML = ""; // Limpiar resultado anterior


        // Crear un elemento LI para mostrar el nombre sorteado
        const li = document.createElement("li");
        li.textContent = "Amigo secreto: " + amigos[indiceAleatorio];
        resultadoLista.appendChild(li);
        

         // Ocultar la lista de amigos
         document.getElementById("listaAmigos").style.display = "none";
         
    } else {
        alert("Debes agregar exactamente 5 amigos antes de sortear.");
    }
}

function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizarla
    
    amigos.forEach(amigo => {
        const li = document.createElement("li"); // Crear un elemento de lista
        li.textContent = amigo; // Asignar el nombre del amigo
        lista.appendChild(li); // Agregarlo a la lista en el HTML
    });
}
