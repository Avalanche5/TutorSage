function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    if (dropdown.classList.contains('open')) {
        dropdown.classList.remove('open');
    } else {
        document.querySelectorAll('.home__dropdown').forEach(function(el) {
            el.classList.remove('open');
        });
        dropdown.classList.add('open');
    }
}