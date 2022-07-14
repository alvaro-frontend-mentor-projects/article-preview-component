//get elements
const shareContainer = document.querySelector(".share-container")
const shareContainerArrow = document.querySelector(".share-container-arrow")

const shareButton = document.querySelectorAll(".share-box")

const userBoxMobile = document.querySelector(".user-box")
const userBoxMobileActive = document.querySelector('.third-container-mobile')

var x = window.matchMedia("(max-width: 390px)")

showShareContainer = () => {
    if(x.matches) {
        console.log('clicked mobile!!!!')
        userBoxMobile.classList.toggle('user-box-close')
        userBoxMobileActive.classList.toggle('third-container-mobile-active')
        
    } else {
        console.log('clicked desktop!!!!')
        shareContainer.classList.toggle('share-container-active')
        shareContainerArrow.classList.toggle('share-container-arrow-active')
    }
    
}

shareButton.forEach((button) => {
    button.addEventListener("click", showShareContainer)
    
})





