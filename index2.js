function showDialog(event) {
    const dialog = document.getElementById('myDialog');
    const button = event.target;

    // Устанавливаем позицию диалога рядом с кнопкой
    const rect = button.getBoundingClientRect();
    dialog.style.left = `${rect.right + window.scrollX}px`;
    dialog.style.top = `${rect.top + window.scrollY}px`;

    dialog.show();
}

function closeDialog() {
    const dialog = document.getElementById('myDialog');
    dialog.close();
}

// Закрытие диалога при клике на пустую область
document.addEventListener('click', function(event) {
    const dialog = document.getElementById('myDialog');
    const isClickInside = dialog.contains(event.target) || event.target.classList.contains('item_i-btn');

    if (!isClickInside) {
        dialog.close();
    }
});
