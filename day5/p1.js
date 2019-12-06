let fs = require("fs");

const state = fs.readFileSync("./p1.input.txt", "utf-8").split(',').map(Number);

const opcode = (state) => {
  state[1] = 89;
  state[2] = 76;

  for (let i = 0; i < state.length; i+=4) {
    if (state[i] === 1) {
      let sum = state[state[i+1]] + state[state[i+2]];
      state[state[i+3]] = sum;
    } else if (state[i] === 2) {
      let sum = (state[state[i+1]] * state[state[i+2]]);
      state[state[i+3]] = sum
    } else {
      if (state[i] === 99) {
        console.log("exit program with state at pos 0", state[0]);
        if (state[0] === 19690720) {
          console.log("Correct answer");
        } else {
          console.log("Incorrect answer");
        }
        return;
      }
    }

  }
}

opcode(state)