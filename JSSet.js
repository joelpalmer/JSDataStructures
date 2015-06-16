/**
 * Created by Joel Palmer on 6/15/2015.
 */
//ES6 Sets:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

function JSSet() {

    var items = {}; //Object instead of array to guarantee uniqueness

    this.has = function (value) { //Contains?
        // Nope:
        // return value in items;
        //yep:
        return items.hasOwnProperty(value);
    };

    this.add = function (value) {
        if (!this.has(value)) {
            items[value] = value;
            return true;

        }
        return false;
    };

    this.delete = function (value) {
        if (this.has(value)) {
            delete items[value];
            return true;
        }
        return false;
    };

    this.clear = function () {
        items = {};
    };

    //keys only works in modern browsers.
    //try looping through items and checking haOwnProperty in <IE9 etc
    this.size = function () {
        return Object.keys(items).length;
    };

    //"
    this.values = function () {
        return Object.keys(items);
    };


}