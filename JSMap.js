/**
 * Created by Joel Palmer on 6/16/2015.
 */
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

function JSMap() {
    var items = {};

    this.has = function (key) {
        return key in items;
    };

    this.set = function (key, value) {
        items[key] = value;
    };

    this.delete = function (key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    };

    this.get = function (key) {
        return this.has(key) ? items[key] : undefined;
    };

    this.values = function () {
        var values = [];
        for (var k in items) {
            if (this.has(k)) {
                values.push(items[k]);
            }
        }
        return values;
    };

    this.clear = function () {
        items = {};
    };

    //keys only works in modern browsers.
    //try looping through items and checking haOwnProperty in <IE9 etc
    this.size = function () {
        return Object.keys(items).length;
    };

    this.entries = function () {
        return items;
    };


}
