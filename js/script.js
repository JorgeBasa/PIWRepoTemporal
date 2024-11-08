function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show');
}

function toggleAdd() {
    const addcard = document.getElementById('addcard');
    addcard.classList.toggle('show');

    const overlay = document.getElementById('overlay');
    overlay.classList.toggle('show');
}