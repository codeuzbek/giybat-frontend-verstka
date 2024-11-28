// header language dropdown
function toggleLanguageDropdown() {
    const dropdownContent = document.getElementById("dropdown-content");
    const dropdownToggle = document.querySelector(".dropdown_toggle");

    dropdownContent.classList.toggle("show");
    dropdownToggle.classList.toggle("active"); // Добавляем/удаляем класс для вращения стрелки
}

// Set language function
function setSelectedLanguage(lang) {
    document.getElementById("current-lang").textContent = lang;
    toggleLanguageDropdown(); // Закрыть dropdown после выбора
}

// Close language dropdown when click outside
window.onclick = function (event) {
    if (!event.target.closest(".dropdown_toggle")) {
        const dropdownContent = document.getElementById("dropdown-content");
        const dropdownToggle = document.querySelector(".dropdown_toggle");

        if (dropdownContent.classList.contains("show")) {
            dropdownContent.classList.remove("show");
            dropdownToggle.classList.remove("active"); // Убираем класс, когда меню закрывается
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".header_entrance__toggle");
    const menu = document.querySelector(".header_entrance__menu");

    toggleButton.addEventListener("click", () => {
        menu.classList.toggle("header_entrance__show");
    });

    // close menu if it is clicked outside
    document.addEventListener("click", (e) => {
        if (!toggleButton.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.remove("header_entrance__show");
        }
    });

    //Show profile menu on header


});

// logout
function logout() {

}
