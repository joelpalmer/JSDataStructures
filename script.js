
var stack = new JSStack();
console.log(stack.isEmpty());
stack.push(7);
stack.push(9);
console.log(stack.peek());
stack.push(14);
console.log(stack.size());
console.log(stack.isEmpty());
stack.push(3);
stack.pop();
console.log(stack.size());
stack.print();
