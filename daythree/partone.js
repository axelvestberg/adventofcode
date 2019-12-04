let fs = require("fs");
const { intersect } = require("mathjs");

const string = fs.readFileSync("./test.input.txt", "utf-8");

// currentPointOne = null;
// currentPointTwo = null;

const distance = string => {
  let L1Points = [];
  let L2Points = [];

  arr = string.split("\n");

  let L1string = arr.slice(0, 1).toString();
  let L2string = arr.slice(1).toString();

  let L1 = L1string.split(",");
  let L2 = L2string.split(",");

  for (let i = 0; i < L1.length; i++) {
    if (i === 0) {
      L1Points.push([0, 0]);
    } else if (L1[i].includes("R")) {
      let substrX = L1[i].substring(1);
      let x = parseInt(substrX);
      let substrY = L1[i - 1].substring(1);
      let y = parseInt(substrY);

      L1Points.push([x, y]);
    } else if (L1[i].includes("L")) {
      let substrX = L1[i].substring(1);
      let x = parseInt(substrX);
      let substrY = L1[i - 1].substring(1);
      let y = parseInt(substrY);

      L1Points.push([x, y]);
    } else if (L1[i].includes("U")) {
      let substrX = L1[i - 1].substring(1);
      let x = parseInt(substrX);
      let substrY = L1[i].substring(1);
      let y = parseInt(substrY);

      L1Points.push([x, y]);
    } else if (L1[i].includes("D")) {
      let substrX = L1[i - 1].substring(1);
      let x = parseInt(substrX);
      let substrY = L1[i].substring(1);
      let y = parseInt(substrY);

      L1Points.push([x, y]);
    }
	}

  for (let i = 0; i < L2.length; i++) {
    if (i === 0) {
      L2Points.push([0, 0]);
    } else if (L2[i].includes("R")) {
      let substrX = L2[i].substring(1);
      let x = parseInt(substrX);
      let substrY = L2[i - 1].substring(1);
      let y = parseInt(substrY);

      L2Points.push([x, y]);
    } else if (L2[i].includes("L")) {
      let substrX = L2[i].substring(1);
      let x = parseInt(substrX);
      let substrY = L2[i - 1].substring(1);
      let y = parseInt(substrY);

      L2Points.push([x, y]);
    } else if (L2[i].includes("U")) {
      let substrX = L2[i - 1].substring(1);
      let x = parseInt(substrX);
      let substrY = L2[i].substring(1);
      let y = parseInt(substrY);

      L2Points.push([x, y]);
    } else if (L2[i].includes("D")) {
      let substrX = L2[i - 1].substring(1);
      let x = parseInt(substrX);
      let substrY = L2[i].substring(1);
      let y = parseInt(substrY);

      L2Points.push([x, y]);
    }
	}
	let intersectArr = [];

	for (let i = 1; i < L1Points.length; i++) {
		for (let k = 1; k < L2Points.length; k++) {
			let inter = intersect(L1Points[i-1], L1Points[i], L2Points[k-1], L2Points[k])
			console.log('Endpoint1Line1', L1Points[i-1]);
			console.log('Endpoint2Line1', L1Points[i]);
			if (inter) {
				intersectArr.push(inter)
			}
		}
	}
	console.log(intersectArr)
	console.log(intersectArr.length)
};

distance(string);

// manhattan distance formula distance = abs(x1–x2)+abs(y1–y2)

// math.intersect([0, 0], [10, 10], [10, 0], [0, 10])
// math.intersect(endPoint1Line1, endPoint2Line1, endPoint1Line2, endPoint2Line2)


/*

MÅSTE JÄMFÖRA LINJE 1 MED ALLA LINJER I LINJE 2

*/
