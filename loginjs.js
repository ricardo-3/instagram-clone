function recogeDatos(){   

var email = document.querySelector('#email').value;
var contrasena = document.querySelector('#contrasena').value;
var bienvenida = document.querySelector('#bienvenida');
var mensaje = '<p> Bienvenid@' + email + '</p>';
bienvenida.innerHTML = mensaje;

}

var miForm = document.querySelector('#formulario');

miForm.addEventListener('submit', recogeDatos);