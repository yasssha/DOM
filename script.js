let btn = document.querySelector('#btn')
let box = document.querySelector('#box')
let num = document.querySelector('#num')
let btns = document.querySelector('.btns')
let inc = document.querySelector('#inc')
let dec = document.querySelector('#dec')
let rnd = document.querySelector('#rnd')
let reset = document.querySelector('#reset')

btn.onclick = () => {
    box.style.marginTop = '50px'
    btn.style.display = 'none'
}

counter = 10
num.textContent = counter

inc.onclick = () => {
    num.textContent = ++counter
}

dec.onclick = () => {
    num.textContent = --counter
}

rnd.onclick = () => {
    num.textContent = Math.floor(Math.random() * 100)
}

reset.onclick = () => {
    num.textContent = 10
}


// я знаю, что не очень получилось :(
