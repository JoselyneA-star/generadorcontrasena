let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
let contrasena = document.getElementById('contrasena');
let messageElement = document.getElementById('message');
function generar(){
    let numeroDigitado = parseInt(cantidad.value);
    if(numeroDigitado<8){
       return alert("La cantidad debe ser mayor a 8");
    }
    let password = '';
    for(let i = 0; i<numeroDigitado; i++){
        let caracterAleatorio = caracteres[Math.floor(Math.random() * caracteres.length)];
        password+= caracterAleatorio;
    }
    contrasena.value = password;
    validarContrasena(password);
    

}
function limpiar(){
    cantidad.value = '';
    contrasena.value = '';
    messageElement.textContent = '';
    messageElement.classList.remove('weak');
    messageElement.classList.remove('strong');
}
function validarContrasena(contrasenaGenerada){
    console.log(contrasenaGenerada);
    let numeros = /\d/;
    let letraMayuscula = /[A-Z]/;
    let validacion= false;

    if (numeros.test(contrasenaGenerada) && letraMayuscula.test(contrasenaGenerada)) {
        validacion = true;
    }

    if (validacion) {
        messageElement.textContent = 'Contraseña fuerte';
        messageElement.classList.remove('weak');
        messageElement.classList.add('strong');
      } else {
        messageElement.textContent = 'Contraseña débil. Debe tener al menos una letra mayúscula y un número.';
        messageElement.classList.remove('strong');
        messageElement.classList.add('weak');
      }
}
