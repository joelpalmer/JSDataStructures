/**
 * Created by Joel Palmer on 6/16/2015.
 */

function JSHashMap() {
    var map = [];

    var code = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;

    };

    var kvPair = function (key, value) {
        this.key = key;
        this.value = value;

        this.toString = function () {
            return '[' + this.key + ' -> ' + this.value + ']';
        }
    };
//TODO: Add collision avoidance with JSLinkedList or linear probing
    this.update = function (key, value) {
        var position = code(key);
        map[position] = value;
    };

    this.getItem = function (key) {
        return map[code(key)];
    };

    this.remove = function (key) {
        map[code(key)] = undefined;

    };

}