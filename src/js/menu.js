const menuButton = document.querySelector('[toggle-menu]')
const menu = document.querySelector('[mobile-menu]')


function openMenu(e) {
  e.preventDefault()

  const icon =  menuButton.firstElementChild
  console.log(icon)

  if(menu.getAttribute('aria-hidden') === 'true'){
    icon.classList='fa-solid fa-xmark'
    menu.setAttribute('aria-hidden', 'false')
    menu.style.right = '0rem'
    menu.style.zIndex = '10'

  }
  else{
    menu.setAttribute('aria-hidden', 'true')
    menu.style.right = '-25.4rem'
    icon.classList='fa-sharp fa-solid fa-bars'
  }
  
}

menuButton.onclick = openMenu


