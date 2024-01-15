open_menu.addEventListener('click', () => {

    menu.style.display = 'flex'

    menu.style.right = (menu.offsetWidth *-1) + 'px'

    open_menu.style.display = 'none'

    setTimeout(() => {
        menu.style.opacity = '1'

        menu.style.right = '0'
        
    }, 10)
    
})

close_menu.addEventListener('click', () => {
 
    menu.style.opacity = '0'

    menu.style.right = (menu.offsetWidth *-1) + 'px'

    setTimeout(() => {

        menu.removeAttribute('style')

        open_menu.removeAttribute('style')

    }, 200)
    
})