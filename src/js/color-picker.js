const colorPicker = document.querySelector('#color-input');
const frame = document.querySelector('#frame');
const colorPickerLabel = document.querySelector('#color-label')

function changeColor(color) {
  frame.style.backgroundColor = color
  colorPickerLabel.style.backgroundColor = color
}

function handleColor(e) {
  e.preventDefault();
  const color = e.target.value 
  changeColor(color)
}


function handleFinalColor(e) {
  e.preventDefault();
  const finalColor = e.target.value
  console.log(finalColor)
}


function initialColor() {
  colorPicker.value = '#6BD1FF'
  colorPickerLabel.style.backgroundColor = colorPicker.value
}


colorPicker.addEventListener('input', handleColor)
colorPicker.addEventListener('change', handleFinalColor)


initialColor()

