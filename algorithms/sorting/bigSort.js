// Sorting arrays with big numbers
function bigSorting(unsorted) {
    const LESS_THAN = -1;
    const EQUAL = 0;
    const GREATER_THAN = 1;

    function compare(a, b) {
        if (a === b) {
            return EQUAL;
        }
        if (a.length < b.length) {
            return LESS_THAN;
        }
        if (a.length > b.length) {
            return GREATER_THAN;
        }
        if ([a, b].sort()[0] === a) {
            return LESS_THAN;
        } else {
            return GREATER_THAN;
        }
    }

    return unsorted.sort(compare);
}


console.log(bigSorting([ '31415926535897932384626433832795', '1', '3', '10', '3', '5' ]));
