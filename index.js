const inc_btn1 = document.getElementById("inc-btn1")
const inc_val1 = document.getElementById("ctr1")
let val1=0
inc_btn1.addEventListener('click', ()=>{
    val1++
    inc_val1.innerText=val1
})

const inc_btn2 = document.getElementById("inc-btn2")
const inc_val2 = document.getElementById("ctr2")
let val2=0
inc_btn2.addEventListener('click', ()=>{
    val2++
    inc_val2.innerText=val2
})

const res = document.getElementById("res")

const add = document.getElementById("add")
const sub = document.getElementById("sub")
const mul = document.getElementById("mul")
const div = document.getElementById("div")

add.addEventListener('click', ()=>{
    res.innerText = val1 + val2
})

sub.addEventListener('click', ()=>{
    res.innerText = val1 - val2
})

mul.addEventListener('click', ()=>{
    res.innerText = val1 * val2
})

div.addEventListener('click', ()=>{
    if(val2 == 0){
        alert("Division By Zero Error Please Change Values")
    }
    else
        res.innerText = val1 / val2
})
