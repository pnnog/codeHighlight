const language = document.querySelector('#language');
const codeArea = document.querySelector('.code-wrapper')
const buttonPreview = document.querySelector('#button-preview');

export default function startHighlight() {
  
  if(language.value != ""){
    const code = codeArea.innerText
    const html = hljs.highlight(code, {language: language.value || ''})
    codeArea.querySelector('code').innerHTML = html.value  
    return html.value
  }

  else{
    console.log('Valor vazio')
  }
  
}



buttonPreview.addEventListener('click', (e) =>{
  e.preventDefault()
  startHighlight()
} )
