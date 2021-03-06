/**
 * Created by Joel Palmer on 6/15/2015.
 */
function JSLinkedList() {
    var Node = function (element) {
        this.element = element;
        this.next = null;
    };

    var length = 0;
    var head = null;

    this.append = function (element) {
        var node = new Node(element);
        var curr;

        if (head === null) {
            head = node;
        } else {
            curr = head;

            while (curr.next) {
                curr = curr.next;
            }

            curr.next = node;
        }

        length++;
    };
    this.insert = function (position, element) {
        if (position >= 0 && position <= length) {
            var node = new Node(element);
            var curr = head;
            var previous;
            var index = 0;

            if (position === 0) {
                node.next = curr;
                head = node;
            } else {
                while (index++ < position) {
                    previous = curr;
                    curr = curr.next;
                }
                node.next = curr;
                previous.next = node;
            }

            length++;

            return true;
        } else {
            return false;
        }
    };

    this.removeAt = function (position) {
        if (position > -1 && position < length) {
            var curr = head;
            var previous;
            var index = 0;

            if (position === 0) {
                head = curr.next;
            } else {
                while (index++ < position) {
                    previous = curr;
                    curr = curr.next;
                }

                previous.next = curr.next;
            }

            length--;
            return curr.element;
        } else {
            return null;
        }
    };

    this.remove = function (element) {
        var index = this.indexOf(element)
        return this.removeAt(index);
    }

    this.indexOf = function (element) {
        var curr = head;
        var index = -1;

        while (curr) {
            if (element === curr.element) {
                return index;
            }
            index++;
            curr = curr.next;
        }
        return -1;
    };

    this.isEmpty = function () {
        return length === 0;
    };
    this.count = function () {
        return length;
    };
    this.toString = function () {
        var curr = head;
        var output = "";

        while (curr) {
            output += "-" + curr.element;
            curr = curr.next;
        }

        return output;
    };

    this.getHead = function () {
        return head;
    };

}