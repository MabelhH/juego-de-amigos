function agregarAmigo() {
    const input = document.getElementById('amigo');
    const amigo = input.value.trim();
    
    if (amigo === '') {
        alert('Por favor, ingresa un nombre de amigo.');
        return;
    }

    const lista = document.getElementById('listaAmigos'); // ID corregido
    const li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);
    input.value = ''; // Línea corregida
}

function sortearAmigo(){
  // El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
}