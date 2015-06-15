//data structure run and test script

//initial stack running code
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

//use stack to convert a number to binary string
Number.prototype.toBinary = function () {
    var remStack = new JSStack(),
        rem,
        num = this,
        binaryString = '';

    while (num > 0) { //{1}
        rem = Math.floor(num % 2);
        remStack.push(rem);
        num = Math.floor(num / 2);
    }

    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }

    return binaryString;
}
var theNumber = 12;
console.log(theNumber.toBinary());