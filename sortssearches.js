/**
 * Created by Joel Palmer on 6/16/2015.
 */
function JSArrayList() {
    var array = [];

    this.insert = function (item) {
        array.push(item);
    };

    this.toString = function () {
        return array.join();
    };

    this.bubbleSort = function () {
        var length = array.length;
        array.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - 1; j++) {
                if (array[j] > array[j + 1]) {
                    swap(j, j + 1);
                }
            }
        }
    };

    this.betterBubbleSort = function () {
        var length = array.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - 1 - i; j++) {
                if (array[j] > array[j + 1]) {
                    swap(j, j + 1);
                }
            }
        }
    };

    this.selectionSort = function () {
        var length = array.length,
            idxMin;
        for (var i = 0; i < length - 1; i++) {
            idxMin = i;
            for (var j = i; j < length; j++) {
                if (array[idxMin] > array[j]) {
                    idxMin = j;
                }
            }
            if (i !== idxMin) {
                swap(i, idxMin);
            }
        }
    };

    this.insertionSort = function () {
        var length = array.length,
            j, tmp;
        for (var i = 1; i < length; i++) {
            j = i;
            tmp = array[i];
            while (j > 0 && array[j - 1] > tmp) {
                array[j] = array[j - 1];
                j--;
            }
            array[j] = tmp;
        }
    };

    //Merge Sort as implemented in FireFox Array.prototype.sort
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    this.mergeSort = function () {
        array = mergeSortRecursive(array);
    };

    var mergeSortRecursive = function (array) {
        var length = array.length;
        if (length === 1) {
            return array;
        }
        var mid = Math.floor(length / 2),
            left = array.slice(0, mid),
            right = array.slice(mid, length);

        return merge(mergeSortRecursive(left), mergeSortRecursive(right));
    };

    var merge = function (left, right) {
        var result = [],
            iLeft = 0,
            iRight = 0;

        while (iLeft < left.length && iRight < right.length) {
            if (left[iLeft] < right[iRight]) {
                result.push(left[iLeft++]);
            } else {
                result.push(right[iRight++]);
            }
        }

        while (iLeft < left.length) {
            result.push(left[iLeft++]);
        }

        while (iRight < right.length) {
            result.push(right[iRight++]);
        }

        return result;
    };

    //Quick Sort as similarly implemented in Chrome's Array.prototype.sort

    this.qSort = function () {
        q(array, 0, array.length - 1);
    };

    var q = function (array, left, right) {

        var idx;

        if (array.length > 1) {

            idx = partition(array, left, right);

            if (left < idx - 1) {
                q(array, left, idx - 1);
            }

            if (idx < right) {
                q(array, idx, right);
            }
        }
    };

    var partition = function (array, left, right) {

        var pivot = array[Math.floor((right + left) / 2)],
            i = left,
            j = right;

        while (i <= j) {
            while (array[i] < pivot) {
                i++;
            }
            while (array[j] > pivot) {
                j--;
            }
            if (i <= j) {
                swapQStort(array, i, j);
                i++;
                j--;
            }
        }
        return i;
    };

    var swapQStort = function (array, idx1, idx2) {
        var aux = array[idx1];
        array[idx1] = array[idx2];
        array[idx2] = aux;
    };


    var swap = function (idx1, idx2) {
        var aux = array[idx1];
        array[idx1] = array[idx2];
        array[idx2] = aux;
    };

    //searches
    //sequential search

    this.seqSearch = function (item) {
        for (var i = 0; i < array.length; i++) {
            if (item === array[i]) {
                return i;
            }
        }
        return -1;
    };

    //b search
    this.bSearch = function (item) {
        this.selectionSort();

        var low = 0,
            high = array.length - 1,
            mid, element;

        while (low <= high) {
            mid = Math.floor((low + high) / 2);
            element = array[mid];
            if (element < item) {
                low = mid + 1;
            } else if (element > item) {
                high = mid - 1;
            } else {
                return mid;
            }
        }
        return -1;
    };
}