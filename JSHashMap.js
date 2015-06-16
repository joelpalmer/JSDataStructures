/**
 * Created by Joel Palmer on 6/16/2015.
 */

function JSHashMap() {
    var map = [];

    var djb2Code = function (key) {
        var hash = 5381;
        for (var i = 0; i < key.length; i++) {
            hash = hash * 33 + key.charCodeAt(i);
        }
        return hash % 1013;

    };

    var kvPair = function (key, value) {
        this.key = key;
        this.value = value;

        this.toString = function () {
            return '[' + this.key + ' -> ' + this.value + ']';
        }
    };

    this.update = function (key, value) {
        var position = djb2Code(key);
        map[position] = value;
    };

    this.getItem = function (key) {
        return map[djb2Code(key)];
    };

    this.remove = function (key) {
        map[djb2Code(key)] = undefined;

    };

}