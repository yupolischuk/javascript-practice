class MergeSort {
  sort(originalArray) {
    if (originalArray.length <= 1) {
      return originalArray;
    }

    // Split array into two halves
    const middleIndex = Math.floor(originalArray.length / 2);
    const leftArray = originalArray.slice(0, middleIndex);
    const rightArray = originalArray.slice(middleIndex, originalArray.length);

    // Sort two halves of split array
    const leftSortedArray = this.sort(leftArray);
    const rightSortedArray = this.sort(rightArray);

    // Merge two sorted arrays into one
    return this.mergeSortedArrays(leftSortedArray, rightSortedArray);
  }

  mergeSortedArrays(leftArray, rightArray) {
    let sortedArray = [];

    while(leftArray.length && rightArray.length) {
      let minimumElement = null;

      // Find minimuim element of two arrays 
      if (leftArray[0] <= rightArray[0]) {
        minimumElement = leftArray.shift();
      } else {
        minimumElement = rightArray.shift();
      }

      // Push the minimum element of two arrays to the sorted array.
      sortedArray.push(minimumElement);
    }
      // If one of two array still have elements we need to just concatenate
      // this element to the sorted array since it is already sorted
      if (leftArray.length) {
        sortedArray = sortedArray.concat(leftArray);
      }

      if (rightArray.length) {
        sortedArray = sortedArray.concat(rightArray);
      }

      return sortedArray;
  }
}


const unsorted = [7, 5, 3, 9, 1, 12];
const mergeSort = new MergeSort();
console.log(mergeSort.sort(unsorted)); // 1, 3, 5, 7, 9, 12