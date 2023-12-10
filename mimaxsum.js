function miniMaxSum(arr) {
    let min_value = 0;
    let max_value = 0;
    let n = arr.length;
    let result = [];
    arr.sort()
    

    for (let i = 0, j = n - 1; i < n - 1; i++, j--) {
        min_value += arr[i]
        max_value += arr[j]
    }

    result.push(min_value, max_value);
    console.debug(result.toString().split(',').join(' '))

    return result.toString().split(',').join(' ')
}

console.log(miniMaxSum([1,3,5,7,9]))