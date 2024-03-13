function setActivatePage() {
    const path = window.location.pathname;
    const navItems = $('.nav-item a');
    console.log(path)
    if (path === '/') {
        navItems[0].classList.add('active');
    } else if (path === '/stacks') {
        navItems[1].classList.add('active');
    } else if (path === '/projects') {
        navItems[2].classList.add('active');
    } else if (path === '/contact') {
        navItems[3].classList.add('active');
    }
}

setActivatePage()