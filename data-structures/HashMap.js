var MyHashMap = function() {
    this.mySet = Array.from({length:1000}, x=>[]);
    this.mapFn = function(key){
    	return key % 1000;
    }
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    let arr = this.mySet[this.mapFn(key)];
    let index = arr.indexOf(key);
    if (index === -1) {
        arr.push(key, ''+value) }
    else {
        arr.splice(index+1, 1, ''+value)};
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    let arr = this.mySet[this.mapFn(key)];
    let index = arr.indexOf(key);
    if (index !== -1) {
        return arr[index+1]}
    else {
        return -1};
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    let arr = this.mySet[this.mapFn(key)];
    let index = arr.indexOf(key);
    if(index!==-1) arr.splice(index, 2);
};

let obj = new MyHashMap();
obj.put(2, 'zuzu');
obj.put(5, 'qwerty');


