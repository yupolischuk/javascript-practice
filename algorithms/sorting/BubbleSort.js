function bubbleSort(unsorted) {
    let copiedArr = unsorted.slice();
    const length = copiedArr.length;
    
    for (let i=0; i < length; i++) {
        for (let j=0; j < length - i - 1; j++) {
            if (copiedArr[j] > copiedArr[j+1]) {
                [copiedArr[j], copiedArr[j+1]] = [copiedArr[j+1], copiedArr[j]];
            }
        }
    }

    return copiedArr;
}


const unsorted = [7, 5, 3, 9, 1, 12];
console.log(bubbleSort(unsorted)); // 1, 3, 5, 7, 9, 12

