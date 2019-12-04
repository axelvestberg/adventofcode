const fs = require("fs");
const { intersect } = require("mathjs");
const string = fs.readFileSync("./test.input.txt", "utf-8");

const distance = string => {
  let intersectArray = [];
  let L1Points = [[0, 0]];
  let L2Points = [[0, 0]];
  let arr = string.split("\n");

  let L1 = arr
    .slice(0, 1)
    .toString()
    .split(",");
  let L2 = arr
    .slice(1)
    .toString()
    .split(",");

  parseArray(L1, L1Points);
  parseArray(L2, L2Points);
  calcIntersect(L1Points, L2Points, intersectArray);
};

const parseArray = (lineArray, pointsArray) => {
  for (let i = 0; i < lineArray.length; i++) {
    let oldY = parseInt(pointsArray[i][1]);
    let oldX = parseInt(pointsArray[i][0]);
    let newY = parseInt(lineArray[i].substring(1));
    let newX = parseInt(lineArray[i].substring(1));

    if (lineArray[i].includes("R")) {
      let x = oldX + newX;
      pointsArray.push([x, oldY]);

    } else if (lineArray[i].includes("L")) {
      let x = oldX - newX;
      pointsArray.push([x, oldY]);

    } else if (lineArray[i].includes("U")) {
      let y = oldY + newY;
      pointsArray.push([oldX, y]);

    } else if (lineArray[i].includes("D")) {
      let y = oldY - newY;
      pointsArray.push([oldX, y]);

    }
  }
};

const calcIntersect = (L1Points, L2Points, intersectArray) => {
  for (let i = 0; i < L1Points.length - 1; i++) {
    let a1 = L1Points[i];
    let b1 = L1Points[i + 1];

    for (let k = 0; k < L2Points.length - 1; k++) {
      let a2 = L2Points[k];
      let b2 = L2Points[k + 1];
      console.log("points", a1, b1, a2, b2);
      let inter = intersect(a1, b1, a2, b2);

      if (inter) {
        intersectArray.push(inter);

      }
    }
  }
};

distance(string);
