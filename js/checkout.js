document.addEventListener('DOMContentLoaded', function() {
    const decrementButton = document.querySelector('.decrement');
    const incrementButton = document.querySelector('.increment');
    const quantityInput = document.querySelector('.quantity');

    decrementButton.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 0) {
            quantityInput.value = currentValue - 1;
            animateChange(quantityInput, currentValue, currentValue - 1);
        }
    });

    incrementButton.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
        animateChange(quantityInput, currentValue, currentValue + 1);
    });

    function animateChange(element, startValue, endValue) {
        let startTime = null;
        const duration = 200; // Duración de la animación en milisegundos

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            const currentValue = Math.round(startValue + (endValue - startValue) * percentage);
            element.value = currentValue;

            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    }
});