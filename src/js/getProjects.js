import LocalStorageManager from "./localStorageManager.js";
const ls  = new LocalStorageManager()
const data = ls.getData();

function renderProjects(data) {
  const projects = document.querySelector('.projects')

  data.forEach(({name, description,code, color ,username ,userImage})=>{
    projects.insertAdjacentHTML("afterbegin", 
    `<article id="frame-wrapper"> 
      <div id="frame" style='background-color:${color}'>
        <div id="content">
          <header>
            <i id="circle-1" class="circle fa-sharp fa-solid fa-circle"></i>
            <i id="circle-2" class="circle fa-sharp fa-solid fa-circle"></i>
            <i id="circle-3" class="circle fa-sharp fa-solid fa-circle"></i>
          </header>
          
          <div class="code-wrapper">
            <code class="hljs" aria-label="Code Editor">${code}</code>
          </div>
        </div>
      </div>
      
      <div class="card-info">
      <h1 class="card-title">${name}</h1>
      <p class="card-description">${description}</p>
      
      <div class="card-buttons">
        <div class="card-likes-wrapper button">
          <div class="count">
            <i class="fa-regular fa-heart"></i>
            <p id="like">10 </p>
          </div>
          <div class="count">
            <i class="fa-solid fa-comment"></i>
            <p id="comment">2</p>
          </div>
        </div>
        <div class="card-user button">
          <img src="${userImage}" alt="">
          <p>${username}</p>
        </div>
      </div>
      </div>
    
    </article>`)
    



  } 
  )

}

!! data && renderProjects(data)












{/*  */}