
var stack = new JSStack();
console.log(stack.isEmpty());
stack.push(7);
stack.push(9);
console.log(stack.top());
stack.push(14);
console.log(stack.count());
console.log(stack.isEmpty());
stack.push(3);
stack.pop();
console.log(stack.count());
stack.print();
