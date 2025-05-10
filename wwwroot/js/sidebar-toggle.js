const toggleBtn = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");

// Check if sidebar state is stored in localStorage and apply it
const sidebarState = localStorage.getItem('sidebarState');
if (sidebarState === 'collapsed') {
    sidebar.classList.remove("w-64", "p-4");
    sidebar.classList.add("w-0");
}

toggleBtn.addEventListener("click", () => {
    if (sidebar.classList.contains("w-64")) {
        sidebar.classList.remove("w-64", "p-4");
        sidebar.classList.add("w-0");

        // Store the collapsed state in localStorage
        localStorage.setItem('sidebarState', 'collapsed');
    } else {
        sidebar.classList.remove("w-0");
        sidebar.classList.add("w-64", "p-4");

        // Store the expanded state in localStorage
        localStorage.setItem('sidebarState', 'expanded');
    }
});
