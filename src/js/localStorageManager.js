
let currentState = []

export default function LocalStorageManager() {

  this.updateStorage = () => {
    const currentStateJson = JSON.stringify(currentState)
    localStorage.setItem('data', currentStateJson)
  }

  this.postState = (newData) =>{
    currentState.push(newData)
  }

  this.getData = () => {
    const json = localStorage.getItem('data')
    const object = JSON.parse(json)
    return object
  }

  this.updateState = (updatedData, index) => {
    currentState[index] = updatedData
  }

  this.initialGet = () => {
      const json = localStorage.getItem('data')
      if(json){
        const initialValue = JSON.parse(json)
        currentState = initialValue
      }
     
  }
}

export function idGenerator() {
  let id = 0
  if(currentState.length > 0){
    const lastItemPosition = currentState.length -1
    id = currentState[lastItemPosition].id + 1
  }
  return id
}

export function checkDuplicity(data){
  const duplicity = currentState.find(item => item.name == data.name)

  if(duplicity){
    const index = currentState.findIndex(item => item.name === data.name)

    return {duplicity, index}
  }
}


