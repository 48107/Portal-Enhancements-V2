const button = document.getElementById('btn')

button.addEventListener("click", setToWhite)

function setToWhite() {
    const infoList = document.getElementsByClassName("information-list"); 
    console.log(infoList[1]);
    console.log("what");
    for (let i = 0; i < infoList[1].children.length; i++) {
        // Styling the cards
        infoList[1].children[i].style.backgroundColor = "#FFFFFF";
    }
}