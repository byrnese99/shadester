const colorBox = document.getElementById('color-box')
const generateColorBtn = document.getElementById('generate-color-btn')

generateColorBtn.addEventListener('click', function(){
    const hexColor = getRandomHex();
    fetch(`https://www.thecolorapi.com/id?hex=${hexColor}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            colorBox.style.backgroundColor = data.hex.value;
        })
})

function getRandomHex() {
    const letters = '0123456789ABCDEF'
    let hex = ''
    for (let i = 0; i < 6; i++){
        hex += letters[Math.floor(Math.random() * letters.length)]
    }
    return hex;
}