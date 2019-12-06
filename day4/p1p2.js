const password = (lo, hi) => {
  let passwords_p1 = 0;
  let passwords_p2 = 0;
  for (let pw = lo; pw <= hi; pw++) {
    if (validate_p1(pw)) passwords_p1 += 1;
    if (validate_p2(pw)) passwords_p2 += 1;
  }
  return [passwords_p1, passwords_p2];
};

const validate_p1 = input => {
  const digits = input
    .toString()
    .split("")
    .map(n => Number(n));
  for (var i = 1; i < digits.length; i++) {
    if (digits[i] < digits[i - 1]) {
      return false;
    }
  }

  for (var i = 1; i < digits.length; i++) {
    if (digits[i] == digits[i - 1]) {
      return true;
    }
  }
};

const validate_p2 = input => {
  const digits = input
    .toString()
    .split("")
    .map(n => Number(n));
  for (var i = 1; i < digits.length; i++) {
    if (digits[i] < digits[i - 1]) {
      return false;
    }
  }
  if (input.toString().match(/(?:^|(.)(?!\1))(\d)\2(?!\2)/)) return true;
  return false;
};

console.log(password(145882, 616942));
