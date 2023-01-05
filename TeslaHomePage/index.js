

// Open and close menu dialog 

const menuButton = document.getElementById("menu-btn")
const menuDialog = document.getElementById("menu-dialog")
const menuCloseButton = document.getElementById("modal-close-button")

menuButton.addEventListener('click',(e) =>{
    menuDialog.showModal()
    menuDialog.style.display='block'
    menuDialog.className ='menu-dialog-open'
    document.body.style.filter = 'blur(10px)'
})

menuCloseButton.addEventListener('click',() => {
    document.body.style.filter = 'none';
    menuDialog.className ='menu-dialog-close'

    setTimeout(() => {
        menuDialog.close()
        menuDialog.style.display='none'
    },600)
})