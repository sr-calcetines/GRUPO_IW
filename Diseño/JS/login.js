document.addEventListener('DOMContentLoaded', function () {
    // Espera a que el DOM esté completamente cargado

    // Obtiene referencias a los elementos del DOM
    var usuarioInput = document.getElementById('usuario');
    var contrasenaInput = document.getElementById('contrasena');
    var loginButton = document.getElementById('login-button');

    // Manejador de evento para el botón de inicio de sesión
    loginButton.addEventListener('click', function () {
        // Obtiene los valores ingresados por el usuario
        var usuario = usuarioInput.value;
        var contrasena = contrasenaInput.value;

        // Verifica las credenciales permitidas
        if (usuario === 'profesor@cesurformacion.com' && contrasena === '1234') {
            alert('Inicio de sesión exitoso como profesor');
            window.location.href = 'profesor.html';
        } else if (usuario === 'alumno@cesurformacion.com' && contrasena === '5678') {
            alert('Inicio de sesión exitoso como alumno');
            window.location.href = 'alumno.html';
        } else {
            alert('Credenciales incorrectas. Inténtalo de nuevo.');
        }
    });
});