document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Tus nuevos datos de acceso (respetando mayúsculas y minúsculas)
    const usuarioCorrecto = "admin";
    const passwordCorrecto = "SISTEMAS 26";
    
    const userInput = document.getElementById('username').value;
    const passInput = document.getElementById('password').value;
    
    if (userInput === usuarioCorrecto && passInput === passwordCorrecto) {
        // Redirige a la página de descargas
        window.location.href = "downloads.html";
    } else {
        document.getElementById('error-msg').style.display = 'block';
    }
});
