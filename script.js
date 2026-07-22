document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Define aquí tu usuario y contraseña
    const usuarioCorrecto = "mi_usuario";
    const passwordCorrecto = "mi_password123";
    
    const userInput = document.getElementById('username').value;
    const passInput = document.getElementById('password').value;
    
    if (userInput === usuarioCorrecto && passInput === passwordCorrecto) {
        // Redirige a la página de descargas
        window.location.href = "downloads.html";
    } else {
        document.getElementById('error-msg').style.display = 'block';
    }
});
