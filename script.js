document.addEventListener("DOMContentLoaded", function() {
    // Create the menu toggle button
    const menuToggle = document.createElement('div');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '<i class="material-icons" style="font-size:34px; color:grey;">menu</i>';
    menuToggle.style.marginTop = '20px'; // Align with other items

    // Insert the menu toggle button at the beginning of the header left section
    const headerLeft = document.querySelector('.header .left');
    headerLeft.insertBefore(menuToggle, headerLeft.firstChild);

    // Add event listener to toggle the display of navigation items
    menuToggle.addEventListener('click', function() {
        const navItems = headerLeft.querySelectorAll('.ld1, .p1, .p3, .i3');
        navItems.forEach(item => {
            if (item.style.display === 'block' || item.style.display === '') {
                item.style.display = 'none';
            } else {
                item.style.display = 'block';
            }
        });
    });

    // Initial hiding of navigation items for smaller screens
    function handleResize() {
        if (window.innerWidth <= 768) {
            const navItems = headerLeft.querySelectorAll('.ld1, .p1, .p3, .i3');
            navItems.forEach(item => {
                item.style.display = 'none';
            });
            menuToggle.style.display = 'block'; // Show the menu toggle button
        } else {
            const navItems = headerLeft.querySelectorAll('.ld1, .p1, .p3, .i3');
            navItems.forEach(item => {
                item.style.display = 'block';
            });
            menuToggle.style.display = 'none'; // Hide the menu toggle button
        }
    }

    // Call handleResize on page load and window resize
    handleResize();
    window.addEventListener('resize', handleResize);
});

