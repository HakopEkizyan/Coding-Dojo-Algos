// Push Front
const pushFront = (arr, val) => {
    for (var i = arr.length - 1; i >= 0; i--) {
        arr[i + 1] = arr[i];
    }
    arr[0] = val;
    console.log(arr);
};
pushFront([5, 7, 2, 3], 8);
pushFront([99], 7);

// Pop Front
const popFront = (arr) => {
    var placeholder = arr[arr.length - 1];
    arr[arr.length - 1] = arr[0];
    arr[0] = placeholder;
    arr.pop();
    console.log(arr)
};
popFront([0,5,10,15]);
popFront([4,5,7,9]);

// Insert At
const insertAt = (arr, index, val) => {
    for (var i = arr.length -1; i >= 0; i--) {
        arr[i + 1] = arr[i];
    }
    arr[index] = val;
    console.log(arr)
}
insertAt([100, 200, 5], 2, 311);
insertAt([9, 33, 7], 1, 42);