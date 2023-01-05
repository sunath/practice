const elements = document.querySelectorAll(".header__hover__btn a")
const background = document.querySelector(".button__background__container")

const rightBoxElements =  document.querySelectorAll(".btn-header")


let lastElementMouseOver;

background.style.display = 'none'
background.style.transition = 'all 0.33s ease-out'

function getAbsolutePosition(element){
    const rect = element.getBoundingClientRect()
    return  rect
}

const hoverElements = []

for (const element of elements){
    hoverElements.push(element)
}

for(const menuElement of rightBoxElements){
    hoverElements.push(menuElement)
}

for(const element of hoverElements){
    element.addEventListener('mouseover',() => {
        const currentPosition = getAbsolutePosition(element)
        if(lastElementMouseOver){
            lastElementMouseOver.style.background = 'none'
            const lastElementPos = getAbsolutePosition(lastElementMouseOver)
        }
        // element.style.backgroundColor = 'red'
        // console.log('mouse over')
        lastElementMouseOver = element

        background.style.display = 'block'
        background.style.opacity = 1
        background.style.height = `${currentPosition.height}px`
        console.log(currentPosition)
        background.style.minWidth = `${currentPosition.width}px`
        background.style.background = `rgba(0,0,0,0.05)`
        const newYCordinate = currentPosition.y 
        background.style.transform = `translate(${currentPosition.x - (currentPosition.width / 8)}px,${newYCordinate - currentPosition.height / 2 }px)`
        // console.log(lastElementPos.x , currentPosition.x)
    })

    element.addEventListener('mouseleave',() => {
        lastElementMouseOver = element;
        background.style.opacity = 0;
    })
}