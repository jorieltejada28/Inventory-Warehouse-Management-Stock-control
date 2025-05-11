document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");

    if (!toggleBtn || !sidebar) return;

    // Apply transition on page load
    sidebar.classList.add("transition-all", "duration-300", "ease-in-out");

    // Apply stored state without transition
    const isCollapsed = localStorage.getItem('sidebarState') === 'collapsed';
    if (isCollapsed) {
        sidebar.classList.remove("w-64", "p-4", "opacity-100");
        sidebar.classList.add("w-0", "opacity-0");
    } else {
        sidebar.classList.add("w-64", "p-4", "opacity-100");
        sidebar.classList.remove("w-0", "opacity-0");
    }

    // Add cursor pointer to button
    toggleBtn.classList.add("cursor-pointer");  // This ensures the cursor is pointer on the button

    // Toggle sidebar on button click
    toggleBtn.addEventListener("click", () => {
        const isExpanded = sidebar.classList.contains("w-64");

        // Toggle classes based on current state
        if (isExpanded) {
            sidebar.classList.remove("w-64", "p-4", "opacity-100");
            sidebar.classList.add("w-0", "opacity-0");
            localStorage.setItem('sidebarState', 'collapsed');
        } else {
            sidebar.classList.remove("w-0", "opacity-0");
            sidebar.classList.add("w-64", "p-4", "opacity-100");
            localStorage.setItem('sidebarState', 'expanded');
        }
    });
});