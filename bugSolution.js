function foo(a, b) {
  // Explicit type checking
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Error: Arguments must be numbers';
  }
  return a + b;
}

console.log(foo(1, '1')); // Output: Error: Arguments must be numbers
console.log(foo(1, 1)); // Output: 2

//Alternative solution using Number()
function foo2(a,b){
    return Number(a) + Number(b);
}
console.log(foo2(1, '1')); //Output: 2