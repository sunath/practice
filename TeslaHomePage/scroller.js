var scrollableElement = document.body; //document.getElementById('scrollableElement');




const viewports = document.querySelectorAll(".viewport")



let currentOne = 0
let shouldListen = true;

const checkReadyToListenToScroll  = () => {
    return shouldListen
}

for(let i = 0 ; i < viewports.length ; i++){
  const inBorwser = isInViewport(viewports[i])
  console.log(inBorwser,viewports[i])
  if(inBorwser){
    currentOne = i
  }
}



function checkScrollDirection(event) {

  if(!shouldListen) return;

    if (checkScrollDirectionIsUp(event)) {
      currentOne -= 1
      console.log(currentOne)
      event.preventDefault()
      if(currentOne == 0 || currentOne < 0 ){
        currentOne = 0
        console.log(viewports[currentOne])
        viewports[currentOne].scrollIntoView({behavior:"smooth"})
      }else{
        viewports[currentOne].scrollIntoView({behavior:"smooth"})
      }
      
    } else {
      currentOne += 1
      if(currentOne == viewports.length || currentOne > viewports.length){
        currentOne = viewports.length -1
        return
      }
      event.preventDefault()
      viewports[currentOne].scrollIntoView({behavior:"smooth"})
    }

    stopTheListener()


  }
  
  function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
      return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
  }

function stopTheListener(time=100){
  shouldListen = false
  setTimeout(() => {
    shouldListen = true
  },time)
}


function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


  scrollableElement.addEventListener('wheel', checkScrollDirection,{passive:false});



for(let i = 0 ; i < viewports.length ; i++ ){
  const observer = new IntersectionObserver((entries,observer) => {
    const entry = entries[0]
    console.log(entry)
    if(entry.isIntersecting){
      currentOne = i
      observer.disconnect()
    }
  })

  observer.observe(viewports[i])
}




const footer = document.querySelector("footer")

const footerObserver = new IntersectionObserver(((entries,observer) => {
  const entry = entries[0]
  if(entry.isIntersecting && window.innerWidth < 1200){
    document.getElementById("accessories-title").style.display = "none"
  }else{
    document.getElementById("accessories-title").style.display = "block"
  }


})

)

footerObserver.observe(footer)