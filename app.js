let amigos = [];    

function agregarAmigo() {
    let input = document.getElementById('amigo');
    let amigo = input.value.trim();
    // Validación para evitar nombres vacíos
    if (amigo === '') {
        input.classList.add('error');
        alert('Por favor, ingresa un nombre de amigo.');
        return;
    }else {
        input.classList.remove('error');
    }

    let lista = document.getElementById('listaAmigos');
    let li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);
    amigos.push(amigo);
    //console.log(amigos); 
    limpiarImput();
}
function limpiarImput(){
  document.querySelector('#amigo').value ='';
}


function sortearAmigo() {
   
}
    
// Listener para eliminar un amigo si haces clic sobre su nombre
document.getElementById('listaAmigos').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.remove();
        amigos.splice(amigos.indexOf(event.target.textContent), 1);
        //console.log(amigos);
    }
});

