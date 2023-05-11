var height, width;

function getHeight() {
  height = parseInt(prompt("Type the height"));

  while (height < 2 || !height) {
    height = parseInt(
      prompt(
        "The height has to be greater than or equal to 2. please type again "
      )
    );
  }
}

function getWidth() {
  width = parseInt(prompt("Type the width"));

  while (!width || width <= 0) {
    width = parseInt(prompt("Wrong input type again"));
  }

  return width;
}

function BuildTower(shape) {
  getHeight();
  getWidth();

  switch (shape) {
    case "Rectangular":
      BuildRectangularTower();
      break;
    case "Triangular":
      BuildTriangularTower();
      break;

    default:
      break;
  }
}

function BuildRectangularTower() {
  const shouldCalcArea = width === height || Math.abs(width - height) > 5;

  if (shouldCalcArea) {
    let area = width * height;

    document.getElementById("demo").innerText =
      "The area of this rectangular is: " + area;
  } else {
    let perimeter = 2 * (width + height);

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

  let perimeter = (height * width) / 2;

  document.getElementById("demo").innerText =
    "The perimeter of this triangular is: " + perimeter;
}

function triangularPrint() {
  document.getElementById("triangularPerimeter").style.display = "none";
  document.getElementById("triangularPrint").style.display = "none";

  const cantPrintTriangular = width % 2 === 0 || width > 2 * height;
  if (cantPrintTriangular) {
    document.getElementById("demo").innerText =
      "It's impossible to print this triangular";
  } else {
    var starsText = "";
    let numOfSameLinesGroups = (width + 1) / 2;
    let linesGroup = Math.floor((height - 2) / (numOfSameLinesGroups - 2));
    let remainer = (height - 2) % (numOfSameLinesGroups - 2);

    for (let i = 1; i <= numOfSameLinesGroups; i++) {
      var numOfLines;

      if (i === 1 || i === numOfSameLinesGroups) {
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
