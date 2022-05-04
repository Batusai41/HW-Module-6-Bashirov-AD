const trafficLight = document.querySelector(selectors: '.root')
const trafficLightChildren = trafficLight.children
const trafficLightsLength = trafficLightChildren.length
let count = 0

const makeColor = () => {
    if(count >= trafficLightsLength){
        count = 0
    }
    for (let i = 0; i < trafficLightsLength; i++){
        i === count 
        ? trafficLightChildren[i].setAttribute(qualifiedName: 'active', value:  'true')
        : trafficLightChildren[i].removeAttribute(qualifiedName: 'active')
    }
    count++
}

trafficLight.addEventListener(type: 'click' , makeColor)