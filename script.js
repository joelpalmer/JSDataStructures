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
stack.puts();

//use stack to convert a number to binary string
Number.prototype.toBinary = function () {
    var remStack = new JSStack(),
        rem,
        num = this,
        binaryString = '';

    while (num > 0) {
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

//initial queue running code
//TODO: Create separate tester runner code files for the structures

var queue = new JSQueue();
queue.enqueue("Joel Palmer");
queue.enqueue("Zooey Deschanel");
queue.enqueue("Amanda Seyfried");
queue.puts();
console.log(queue.isEmpty());
console.log(queue.count());
queue.dequeue(); //That's what I like about texas!
queue.dequeue();
queue.puts();

//musical chairs with JSQueue --- Circular Queue

function musicalChairs(players, num) {

    var queue = new JSQueue();

    for (var i = 0; i < players.length; i++) {
        queue.enqueue(players[i]);
    }

    var eliminated = '';
    while (queue.count() > 1) {
        for (var i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        eliminated = queue.dequeue();
        console.log(eliminated + ' is out.');
    }

    return queue.dequeue();
}

var players = ['Mary', 'Zooey', 'Amanda', 'Joel', 'Michelle'];
var winner = musicalChairs(players, 5);
console.log(winner + " wins");