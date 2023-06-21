const comunityItems = document.querySelectorAll('#comunity-item')
const editorItem = document.querySelectorAll('#editor-item')



const checkLocation = () =>  window.location.pathname 
  
function changeActive() {
  const path = checkLocation()
  const items = document.querySelectorAll('.item')

  const activeElement = Array.from(items).find((item)=> {
    return item.firstElementChild.pathname === path  
  })


  items.forEach((item) => {
   
    if(item.id === activeElement.id) {
      item.classList.remove('disabled')
    }

    else{
      item.classList.add('active')
    }

  })

}



changeActive()

