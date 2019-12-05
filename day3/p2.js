const fs = require("fs");
const string = fs.readFileSync("./p1.input.txt", "utf-8");

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
      let inter = lineSegmentsIntersect(a1[0], a1[1], b1[0], b1[1], a2[0], a2[1], b2[0], b2[1]);
      if (inter) {
        intersectArray.push(inter);
      }
    }
  }
};

const lineSegmentsIntersect = (x1, y1, x2, y2, x3, y3, x4, y4) => {
  var a_dx = x2 - x1;
  var a_dy = y2 - y1;
  var b_dx = x4 - x3;
  var b_dy = y4 - y3;
  let div = (-b_dx * a_dy + a_dx * b_dy);
  var s = (-a_dy * (x1 - x3) + a_dx * (y1 - y3)) / div;
  var t = (+b_dx * (y1 - y3) - b_dy * (x1 - x3)) / div;
  let x = x1 - t * (x1 - x2);
  let y = y1 - t * (y1 - y2);
  if (s >= 0 && s <= 1 && t >= 0 && t <= 1) {
    return [x, y];
  } else {
    return null;
  }
};

distance(string);