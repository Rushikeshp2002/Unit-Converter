let numEl = document.getElementById("num-el")
let num
let meter
let feet
let litre
let gallon
let kilo
let pounds
let lEl = document.getElementById("l-el")
let vEl = document.getElementById("v-el")
let mEl = document.getElementById("m-el")

function render(){
     num = numEl.value
     console.log(num)
     meter = num * 3.281
     feet = num * 0.305
     litre = num * 0.264
     gallon = num * 4.54609
     kilo = num * 2.204
     pounds = num * 0.454

     lEl.textContent = `${num} meters = ${meter.toFixed(3)} feet | ${num} feet = ${feet.toFixed(3)} meters `
     vEl.textContent = `${num} liters = ${litre.toFixed(3)} gallons | ${num} gallons = ${gallon.toFixed(3)} litre `
     mEl.textContent = `${num} kilos = ${kilo.toFixed(3)} pounds | ${num} pounds = ${pounds.toFixed(3)} kilo `
}


