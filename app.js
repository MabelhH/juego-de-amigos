let amigos = [];    

function agregarAmigo() {
    let input = document.getElementById('amigo');
    let amigo = input.value.trim();
    // Validación para evitar nombres vacíos
    if (amigo === '') {
        input.classList.add('error');
        alert('Por favor, ingresa un nombre de amigo valido.');
        return;
    }else {
        input.classList.remove('error');
    }

    if (amigos.includes(amigo)) {
         alert('Ese amigo ya fue agregado.');
         limpiarImput();
        return;
    }

    let lista = document.getElementById('listaAmigos');
    let li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);
    amigos.push(amigo);
    console.log(amigos); 
    limpiarImput();
}
function limpiarImput(){
  document.querySelector('#amigo').value ='';
}
function limpiarresultado(){
    let resultado = document.getElementById('resultadoSorteo');
    resultado.textContent = '';
    resultado.style.display = 'none'; 
}

function sortearAmigo() {
   if (amigos.length === 0) {
        alert('La lista de amigos está vacía.');
        limpiarresultado();
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById('resultadoSorteo');
    resultado.textContent = `El amigo secreto sorteado es: ${amigoSorteado}`;
    console.log(`El amigo secreto sorteado es: ${amigoSorteado}`);



}


    
// Listener para eliminar un amigo si haces clic sobre su nombre
document.getElementById('listaAmigos').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.remove();
        amigos.splice(amigos.indexOf(event.target.textContent), 1);
        console.log(amigos);
    
        //console.log(amigos);
    }
});