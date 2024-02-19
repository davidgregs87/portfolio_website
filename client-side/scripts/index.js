document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll('.shake-on-hover');

    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('animate-shake');
        });

        item.addEventListener('mouseout', () => {
            item.classList.remove('animate-shake');
        });
    });
});
