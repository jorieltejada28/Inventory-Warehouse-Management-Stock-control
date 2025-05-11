document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const body = document.body; // This targets the body for the full-width adjustment

    if (!toggleBtn || !sidebar) return;

    // Apply transition on page load
    sidebar.classList.add("transition-all", "duration-300", "ease-in-out");

    // Apply stored state without transition
    const isCollapsed = localStorage.getItem('sidebarState') === 'collapsed';
    if (isCollapsed) {
        sidebar.classList.remove("w-64", "p-4", "opacity-100");
        sidebar.classList.add("w-0", "opacity-0");
        body.classList.add('sidebar-collapsed'); // Add class for full-width
    } else {
        sidebar.classList.add("w-64", "p-4", "opacity-100");
        sidebar.classList.remove("w-0", "opacity-0");
        body.classList.remove('sidebar-collapsed'); // Remove full-width adjustment
    }

    // Add cursor pointer to button
    toggleBtn.classList.add("cursor-pointer");

    // Toggle sidebar on button click
    toggleBtn.addEventListener("click", () => {
        const isExpanded = sidebar.classList.contains("w-64");

        // Toggle classes based on current state
        if (isExpanded) {
            sidebar.classList.remove("w-64", "p-4", "opacity-100");
            sidebar.classList.add("w-0", "opacity-0");
            body.classList.add('sidebar-collapsed'); // Add full-width class
            localStorage.setItem('sidebarState', 'collapsed');
        } else {
            sidebar.classList.remove("w-0", "opacity-0");
            sidebar.classList.add("w-64", "p-4", "opacity-100");
            body.classList.remove('sidebar-collapsed'); // Remove full-width class
            localStorage.setItem('sidebarState', 'expanded');
        }
    });
});