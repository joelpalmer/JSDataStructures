/**
 * Created by Joel Palmer on 6/15/2015.
 */

function JSQueue() {
    var items = [];

    this.enqueue = function (element) {
        items.push(element);
    };

    this.dequeue = function () {
        return items.shift();
    };

    this.peek = function () {
        return items[0];
    };

    this.isEmpty = function () {
        return items.length == 0;
    };

    this.count = function () {
        return items.length;
    };

    this.puts = function () {
        console.log(items.toString() + "\n")
    };


}