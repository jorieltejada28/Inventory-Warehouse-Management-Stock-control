 // Show loading screen when page starts loading
 document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loading-screen').classList.remove('hidden');
});

// Hide loading screen once the page is fully loaded
window.addEventListener('load', function () {
    document.getElementById('loading-screen').classList.add('hidden');
});

// Optional: Show loading screen for AJAX requests
$(document).ready(function () {
    $(document).on({
        ajaxStart: function () {
            $('#loading-screen').removeClass('hidden');
        },
        ajaxStop: function () {
            $('#loading-screen').addClass('hidden');
        }
    });
});