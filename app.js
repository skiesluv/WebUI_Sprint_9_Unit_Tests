//Task 187
const task1 = (array) => {
    var arr = [...array];
    const n = arr.length - 1;

    for (i = 0; i <= n; i++){
        if (arr[i] < 0) {
            arr[i] += 0.5;
        }
        else if (arr[i] >= 0) {
            arr[i] = 0.1;
        }
    }
    return arr
}

//Task 205 Ex. 1

const task2 = (array) => {
    // var arr = Array.prototype.slice.call(arguments)
    const n = array.length - 1;
    var arr = [];
    var arr1 = [...array];

    for (i = 0; i <= n; i++)
    {
        arr.push(Math.abs(arr1[i]));
    }
    console.log(arr);
    let maxAbs = Math.max(...arr);

    return maxAbs;
}

//Task 205 Ex. 2

const task3 = (array) => {
    var Arr = [];
    var Arr2 = [...array];
    const n = array.length - 1;
    let addAll = 0;
    let sqrtPow = 0;

    for (i = 0; i <= n; i++){
        Arr.push(Math.pow(Arr2[i], 2));
    }

    console.log(Arr)

    for (i = 0; i <= n; i++) {
        addAll += Arr[i];
    }

    console.log(addAll);

    sqrtPow = Math.sqrt(addAll)

    return sqrtPow;
}

module.exports = {task1, task2, task3}