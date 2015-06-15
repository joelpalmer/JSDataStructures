/**
 * Created by Joel Palmer on 6/12/2015.
 */
function JSStack(){

    var items = [];

    this.push = function(element){
        items.push(element);
    };

    this.pop = function(){
        return items.pop();
    };

    this.top = function(){
        return items[items.length-1];
    };

    this.isEmpty = function(){
        return items.length == 0;
    };

    this.count = function(){
        return items.length;
    };

    this.clear = function(){
        items = [];
    };

    this.puts = function () {
        console.log(items.toString() + "\n");
    };


}