function showPopup(event) {
    const popup = document.getElementById('myPopup');
    const button = event.target;




    // Показываем или скрываем popup
    if (popup.classList.contains('visible')) {
        popup.classList.remove('visible');
    } else {
        popup.classList.add('visible');
    }

    // Закрываем popup при клике за его пределами
    document.addEventListener('click', function handleClickOutside(event) {
        if (!popup.contains(event.target) && event.target !== button) {
            popup.classList.remove('visible');
            document.removeEventListener('click', handleClickOutside);
        }
    });
}

// Закрываем popup при изменении ширины экрана
window.addEventListener('resize', function() {
    const popup = document.getElementById('myPopup');
    if (popup.classList.contains('visible')) {
        popup.classList.remove('visible');
    }
});