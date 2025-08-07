function agregarAmigo() {
    const input = document.getElementById('amigo');
    const amigo = input.value.trim();

    if (amigo === '') {
        input.classList.add('error');
        alert('Por favor, ingresa un nombre de amigo.');
        return;
    }else {
        input.classList.remove('error');
    }

    const lista = document.getElementById('listaAmigos');
    const li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);
    input.value = '';
}

function sortearAmigo() {

}
    
// Listener para eliminar un amigo si haces clic sobre su nombre
document.getElementById('listaAmigos').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }
});
