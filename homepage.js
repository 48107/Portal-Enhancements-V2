const tiles = document.getElementsByClassName("tile");
const tileList = document.getElementsByClassName("tileList");

const infoList = document.getElementsByClassName("information-list"); 
const fcListEvent = document.getElementsByClassName("fc-list-table");

const GradientTable = ["#FFFFFF", "#fa4a47", "#f36f45", "#ec9144", "#e4b144", "#dccc44", "rgb(204 229 17)", "#9dca45", "#7cc047", "#61b549", "#4fa74f", "#549a63"];

setTimeout(calendarList, 1500);

const roundQ = (q) => {
  if (q / 6 < 1) {
    return 0;
  } else if (q / 6 < 2) {
    return 6;
  } else if (q / 6 < 3) {
    return 12;
  }
};

for (let i = 0; i < tileList.length; i++) {
  const tLI = tileList[i].querySelectorAll("li");
  for (let q = 0; q < tLI.length; q++) {
    if (tLI.length <= 6) {
      tileWidth = 100 / tLI.length;
    } else {
      tileWidth = 100 / 6;
      for (let i = 0; i < tiles.length; i++) {
        tiles[i].style.marginTop = "0.75rem";
      }
      if (q >= 6 && tLI.length - q <= 6) {
        tileWidth = 100 / (tLI.length - roundQ(q));
      }
    }

    const tiles2 = tLI;
    tiles2[q].style.backgroundColor = "#8dbeffb0";
    tiles2[q].style.marginRight = (tileWidth * 0.035).toString() + "%";
    tiles2[q].style.width =
      (tileWidth * 0.96 + (tileWidth * 0.015) / tLI.length).toString() + "%";
    if (tLI.length == 1) {
      tLI[tLI.length - 1].style.width = "100%";
    }

    if (
      (tileWidth * 0.96 +
        (tileWidth * 0.015) / tLI.length +
        tileWidth * 0.035) *
        tLI.length >=
      100
    ) {
      console.log("VERY VERY BAD!!!!");
      tiles2[q].style.marginRight = (tileWidth * 0.02).toString() + "%";
    }
  }
  tLI[tLI.length - 1].style.marginRight = "0";
}
tiles[tiles.length - 1].style.marginRight = "0";

// Initial Due Work Styling Setup for Cards
for (let i = 0; i < infoList[1].children.length; i++) {
  // Styling the cards
  infoList[1].children[i].style.backgroundColor = "#8dbeffb0";
  infoList[1].children[i].style.marginBottom = "0.6rem";
  infoList[1].children[i].style.borderRadius = "5px";
  infoList[1].children[i].style.border = "2px solid #70aeff";
  infoList[1].children[i].style.boxShadow = "0.8px 4px 18px 0 #0c27274d";
}
// Removes background white from in-between cards
infoList[1].parentElement.style.backgroundColor = "#ededed";

// Due Work Border Styling
for (let i = 0; i < infoList[1].children.length; i++) {
  const infoItem = infoList[1].children[i];

  // Gets the border colour corresponding to time till due
  const infoGradientIndex = infoItem.querySelector("span").classList[0].replace(/\D/g, '');
  // console.log(infoGradientIndex)
  const colour = GradientTable[infoGradientIndex];

  infoItem.style.border = "2px solid " + colour; // Styles the border
}

function calendarList() {
  const calendar = document.getElementById("calendar");
  const calendarTable = calendar.querySelector("tbody");

  // console.log(calendarTable);
  calendarCard(calendarTable);
  calendar.querySelector("table").style.background = "#ededed";
  return calendarTable;
}

function calendarCard(calendarTable) {
  const calendarDays = calendarTable.querySelectorAll(".fc-day");
  // console.log(calendarDays.length);
  // let x = 1==1;
  // for (let i = 0; i < calendarDays.length; i++) {
  //   while (x) {
  //     if (calendarTable.children[x+1] == calendarDays[i]) {
  //       calendarTable.children[x].style.marginBottom = "5rem";
  //       break
  //     }
  //   }
  // calendarDays[i].style.marginTop = "50px";
  // }
  // let divEl = document.createElement('div');
  // let elNum = 0;
  // let elNumP = true;

  for (let i = 1; i < calendarTable.children.length; i++) {
    const element = calendarTable.children[i];

    // if (i=1) {
    //   const divy = document.createElement('div');
    //   divEl.append(divy);
    //   divEl.children[elNum].append(calendarTable.children[0]);
    // }

    // console.log(element);
    element.classList.forEach(className => {
      if (className === "fc-day") {
        // const divy = document.createElement('div');
        // divEl.append(divy);
        // elNum += 1;
        // divEl.children[elNum].append(element);
        // console.log('divEl');
        // console.log(divEl);

        // console.log('Success!');
        console.log(calendarTable.children[i-1]);
        calendarTable.children[i-1].style.marginBottom = "2rem";
      } else {
        element.style.background = 'white';
        // console.log('broke here?');
        // console.log(element);
        // console.log(divEl);
        // divEl.children[elNum].append(element);
      }
    });

    // calendarTable.append(divEl);
    // console.log(element.classList);
    // console.log('element.classList');
  }
}
