setInterval(setClock,1000)
const hour = document.querySelector("[hourHand]")
const minute = document.querySelector("[minuteHand]")
const second = document.querySelector("[secondHand]")

function setClock(){
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds()/60
    const minutesRatio = (secondsRatio + currentDate.getMinutes())/60
    const hoursRatio = (minutesRation + currentDate.getSeconds())/12
    setRotation(second,secondsRatio)
    setRotation(minute,minutesRatio)
    setRotation(hour,hoursRatio)

}
function setRotation(element,rotationRatio) {
element.style.setProperty("--rotation", rotationRatio*360)
}

setClock()