var hight;
var width;

function BuildTower(shape) {
  hight = parseInt(prompt("Type the hight"));
  while (hight < 2 || !hight) {
    hight = parseInt(
      prompt(
        "The hight has to be greater than or equal to 2. please type again "
      )
    );
  }
  width = parseInt(prompt("Type the width"));
  while (!width || width <= 0) {
    width = parseInt(prompt("Wrong input type again"));
  }
  switch (shape) {
    case "R":
      BuildRectangularTower();
      break;
    case "T":
      BuildTriangularTower();
      break;

    default:
      break;
  }
}
function BuildRectangularTower() {
  if (width === hight || Math.abs(width - hight) > 5) {
    let area = width * hight;
    document.getElementById("demo").innerText =
      "The area of this rectangular is: " + area;
  } else {
    let perimeter = 2 * (width + hight);
    document.getElementById("demo").innerText =
      "The perimeter of this rectangular is: " + perimeter;
  }
}
function BuildTriangularTower() {
  document.getElementById("demo").innerText = "";
  document.getElementById("triangularPerimeter").style.display = "inline";
  document.getElementById("triangularPrint").style.display = "inline";
}

function triangularPerimeter() {
  document.getElementById("triangularPerimeter").style.display = "none";
  document.getElementById("triangularPrint").style.display = "none";
  let perimeter = (hight * width) / 2;
  document.getElementById("demo").innerText =
    "The perimeter of this triangular is: " + perimeter;
}

function triangularPrint() {
  document.getElementById("triangularPerimeter").style.display = "none";
  document.getElementById("triangularPrint").style.display = "none";
  if (width % 2 === 0 || width > 2 * hight) {
    document.getElementById("demo").innerText =
      "It's impossible to print this triangular";
  } else {
    //print the triangular
    var starsText = "";
    let groupsOfSameLines = (width + 1) / 2;
    //lines in every group exept the first and the last lines
    let linesGroup = Math.floor((hight - 2) / (groupsOfSameLines - 2));
    let remainer = (hight - 2) % (groupsOfSameLines - 2);
    //console.log("linesGroup: ", linesGroup, "remainer: ", remainer);
    for (let i = 1; i <= groupsOfSameLines; i++) {
      var numOfLines;
      //the first line or the last one
      if (i === 1 || i === groupsOfSameLines) {
        numOfLines = 1;
      } else if (i === 2) {
        numOfLines = linesGroup + remainer;
      } else {
        numOfLines = linesGroup;
      }
      let numOfStars = 2 * i - 1;
      //loop at all the lines in the current group
      for (let j = 0; j < numOfLines; j++) {
        starsText +=
          "&nbsp;&nbsp;".repeat((width - numOfStars) / 2) +
          "*".repeat(numOfStars) +
          "<br>";
      }
    }

    document.getElementById("demo").innerHTML = starsText;
  }
}
