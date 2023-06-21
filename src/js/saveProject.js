import startHighlight from "./highlight.js";
import LocalStorageManager, {checkDuplicity, idGenerator} from "./localStorageManager.js";

const ls = new LocalStorageManager
ls.initialGet()

const projectName = document.querySelector('#project-name')
const projectDescription = document.querySelector('#project-description')
const projectLanguage = document.querySelector('#language')
const userImage = document.querySelector('#user-item a img')
const userName = document.querySelector('#user-item a p').innerText;
const settingsForm =  document.querySelector('#settings-form')
const code = document.querySelector('.hljs')

function handleSubmit(e) {  
  e.preventDefault()

  const codeHTML = startHighlight()


  let data ={
    name: e.target.elements['name'].value,
    description: e.target.elements['description'].value,
    color: e.target.elements['color-input'].value,
    username: userName,
    userImage: '/public' + (userImage.src.split('/public')[1]),
    code: codeHTML
  }
  console.log(code.innerHTML)

  if(checkDuplicity(data)){
    const {duplicity, index} = checkDuplicity(data)

    data ={
      id: duplicity.id,
      ...data
    }

    ls.updateState(data, index)
    ls.updateStorage()
  }

  else {
    data = {
      id: idGenerator(), 
      ...data
    }
    ls.postState(data)
    ls.updateStorage()
  }
 
  window.location.href='/comunity.html'
}

settingsForm.addEventListener('submit', handleSubmit)


function resetFields() {
  projectName.value=""
  projectDescription.value=""
  projectLanguage.value=""
}

resetFields()