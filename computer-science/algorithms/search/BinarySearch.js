let myarr = [1, 3, 5, 7, 19, 32, 50];

function binarySearch(sortedArray, seekElement) {
    let startIndex = 0;
    let endIndex = sortedArray.length - 1;

    while(startIndex <= endIndex) {
        let middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

        if (seekElement === sortedArray[middleIndex]) {
            return middleIndex;
        } 
        
        if (sortedArray[middleIndex] < seekElement) {
            startIndex = middleIndex + 1;
        } else {
            endIndex = middleIndex - 1;
        }
    }
    return 'Element not exists in array';
}

console.log(binarySearch(myarr, 32));

