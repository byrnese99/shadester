const colorSchemeSelectionForm = document.forms['color-scheme-selection-form'];
const colorSchemes = colorSchemeSelectionForm.schemes
const schemeOptions = colorSchemes.options
const generateColorSchemeBtn = document.getElementById('generate-color-scheme-btn')
const colorBox = document.getElementById('color-box')
const colorOne = document.getElementById('color-one')
const colorTwo = document.getElementById('color-two')
const colorThree = document.getElementById('color-three')
const colorFour = document.getElementById('color-four')
const colorFive = document.getElementById('color-five')
let colorBoxHex;
let schemeSelection;

async function renderScheme(e){
    e.preventDefault()
    schemeSelection = colorSchemes.value;
    console.log(colorBoxHex)
    console.log(schemeSelection)
    const response = await fetch(`https://www.thecolorapi.com/scheme?hex=${colorBoxHex}&mode=${schemeSelection}&count=5`)
    const data = await response.json()
    console.log(data)
    const color1 = data.colors[0].hex.value
    const color2 = data.colors[1].hex.value
    const color3 = data.colors[2].hex.value
    const color4 = data.colors[3].hex.value
    const color5 = data.colors[4].hex.value
    colorOne.style.backgroundColor = color1;
    colorTwo.style.backgroundColor = color2;
    colorThree.style.backgroundColor = color3;
    colorFour.style.backgroundColor = color4;
    colorFive.style.backgroundColor = color5;
}

colorBox.addEventListener('input', () =>{
    let regex = /#/g;
    colorBoxHex = colorBox.value.toUpperCase()
    colorBoxHex = colorBoxHex.replace(regex, '')
})

generateColorSchemeBtn.addEventListener('click', renderScheme)