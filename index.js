/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let handleInput = document.getElementById('head-input')
let handleBtn = document.getElementById('btn-head')

handleBtn.addEventListener('click',function(){
    const inputValue = handleInput.value
    mainController(inputValue)
})

function length(value){
    fromMeter = (value * 3.281).toFixed(3) 
    fromFeet = (value * (1/3.281)).toFixed(3) 
    return `${value} meters = ${fromMeter} feet | ${value} feet = ${fromFeet} meters`
}

function volume(value){
    fromGallon = (value * 0.264).toFixed(3) 
    fromLiter = (value * (1/0.264)).toFixed(3) 
    return `${value} liters = ${fromGallon} gallons | ${value} gallons = ${fromLiter} liters`
}

function mass(value){
    fromPound = (value * 2.204).toFixed(3) 
    fromKilo = (value * (1/2.204)).toFixed(3) 
    return `${value} kilo = ${fromPound} pounds | ${value} pounds = ${fromKilo} kilo`
}

function mainController(val){
    const toConvert = val
    paraCreator(length(toConvert),'length')
    paraCreator(volume(toConvert),'volume')
    paraCreator(mass(toConvert),'mass')
}

function paraCreator(str,id){
    const para = document.getElementById(id)
    para.innerHTML = str
}
