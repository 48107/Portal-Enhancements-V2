document.getElementById("btn").addEventListener("click", (async () => {
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    chrome.tabs.sendMessage(tab.id, {greeting: "hello"});
  })())

// function setToWhite() {
//     // const infoList = document.getElementsByClassName("information-list"); 
//     // console.log(infoList[1]);
//     // console.log("what");
//     // for (let i = 0; i < infoList[1].children.length; i++) {
//     //     // Styling the cards
//     //     infoList[1].children[i].style.backgroundColor = "#FFFFFF";
//     // }
//     // const [tab] = chrome.tabs.query({active: true, lastFocusedWindow: true});
//     chrome.tabs.sendMessage({greeting: "hello"})
// }