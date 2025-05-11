const toggleBtn = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");

// Immediately apply stored sidebar state WITHOUT transition
const sidebarState = localStorage.getItem('sidebarState');
if (sidebarState === 'collapsed') {
    sidebar.classList.remove("w-64", "p-4");
    sidebar.classList.add("w-0");
}

// Delay adding transition until after page has loaded
window.addEventListener('DOMContentLoaded', () => {
    sidebar.classList.add("transition-all", "duration-300");
});

// Toggle sidebar on button click
toggleBtn.addEventListener("click", () => {
    if (sidebar.classList.contains("w-64")) {
        sidebar.classList.remove("w-64", "p-4");
        sidebar.classList.add("w-0");

        localStorage.setItem('sidebarState', 'collapsed');
    } else {
        sidebar.classList.remove("w-0");
        sidebar.classList.add("w-64", "p-4");

        localStorage.setItem('sidebarState', 'expanded');
    }
});