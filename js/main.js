document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.logo').style.transform = 'scale(1)';
    setTimeout(function() {
        document.querySelector('.video-fondo').style.opacity = '1';
        document.querySelector('.texto-coleccion').style.transform = 'translateX(0)';
        document.querySelector('.iluminacion-entrada').style.opacity = '1';
    }, 2000);
});