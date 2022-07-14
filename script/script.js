//get elements
const shareContainer = document.querySelector(".share-container")
const shareContainerArrow = document.querySelector(".share-container-arrow")
const shareButton = document.querySelector(".share-box")


showShareContainer = () => {
    shareContainer.classList.toggle('share-container-active')
    shareContainerArrow.classList.toggle('share-container-arrow-active')

}

shareButton.addEventListener("click", showShareContainer)
