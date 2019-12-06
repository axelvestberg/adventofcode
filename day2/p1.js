let fs = require("fs");
const state = fs
  .readFileSync("./p1.input.txt", "utf-8")
  .split(",")
  .map(Number);

const opcode = state => {
  state[1] = 12;
  state[2] = 2;

  for (let i = 0; i < state.length; i += 4) {
    if (state[i] === 1) {
      let sum = state[state[i + 1]] + state[state[i + 2]];
      state[state[i + 3]] = sum;
    } else if (state[i] === 2) {
      let sum = state[state[i + 1]] * state[state[i + 2]];
      state[state[i + 3]] = sum;
    } else {
      if (state[i] === 99) {
        console.log("exit program with state at pos 0", state[0]);
        return;
      }
    }
  }
};

opcode(state);
