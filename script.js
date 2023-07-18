const bulbSwitch = document.querySelector('#bulbSwitch')
const bulb = document.querySelector('#bulb')

bulbSwitch.addEventListener('click',function(){
    if (bulb.src.match('off')){
        bulb.src = "bulbon.png"
        bulbSwitch.innerHTML = "Turn OFF"
    }
    else{
        bulb.src = "bulboff.jpeg"
        bulbSwitch.innerHTML = "Turn ON"

    }
})