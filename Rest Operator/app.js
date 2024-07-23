function Abc(a, b) {
  return a + b;
}
console.log(Abc(10, 20));
console.log(Abc(10, 20, 30));
console.log(Abc(1, 2, 3, 4, 5));

// Rest Operator
// ... jun name le denote garda ne hunxa (... arguments)

function Sum(...args) {
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  console.log(result);
}
Sum(1, 2, 3);
