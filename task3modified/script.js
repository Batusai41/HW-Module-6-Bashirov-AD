const trafficLight = document.querySelector('.root')
const trafficLightChildren = trafficLight.children
const trafficLightsLength = trafficLightChildren.length
let count = 0

const makeColor = () => {
    if (count >= trafficLightsLength) {
        count = 0
    }
    for (let i = 0; i < trafficLightsLength; i++) {
        i === count ?
            trafficLightChildren[i].setAttribute('active', 'true') :
            trafficLightChildren[i].removeAttribute('active')
    }
    count++
}

trafficLight.addEventListener('click', makeColor)