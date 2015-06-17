/**
 * Created by Joel Palmer on 6/16/2015.
 */
function nonSortedArray(size) {
    var array = new JSArrayList();
    for (var i = size; i > 0; i--) {
        array.insert(i);
    }
    return array;
}

var array = nonSortedArray(7);
console.log(array.toString());
array.bubbleSort();
console.log(array.toString());

var array = nonSortedArray(11);
console.log(array.toString());
array.betterBubbleSort();
console.log(array.toString());

array = nonSortedArray(5);
console.log(array.toString());
array.selectionSort();
console.log(array.toString());


array = nonSortedArray(5);
console.log(array.toString());
array.mergeSort();
console.log(array.toString());

array = nonSortedArray(5);
console.log(array.toString());
array.qSort();
console.log(array.toString());
//searches
//sequential search
array = nonSortedArray(5);

console.log(array.seqSearch(2));