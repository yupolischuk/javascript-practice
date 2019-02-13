// Unordered collection of unique elements
// Work only for storing numeric values
var MyHashSet = function() {
    this.mySet = Array.from({length: 1000}, x=>[]);
    this.mapFn = function(num) {
        return num % 1000;
    }
};

MyHashSet.prototype.add = function(key) {
    let mapValue = this.mapFn(key);
    let arr = this.mySet[mapValue], index = arr.indexOf(key);
    if (index === -1) arr.push(key);
};

MyHashSet.prototype.remove = function(key) {
    let mapValue = this.mapFn(key);
    let arr = this.mySet[mapValue], index = arr.indexOf(key);
    if (index!== -1) arr.splice(index, 1);
};

MyHashSet.prototype.contains = function(key) {
    let mapValue = this.mapFn(key);
    let arr = this.mySet[mapValue], index = arr.indexOf(key);
    return index !== -1;
};

MyHashSet.prototype.get = function(key) {
    
};

MyHashSet.prototype.getAll = function(key) {

};

let key = 5;
let key2 = 7;
let hashSet = new MyHashSet();
hashSet.add(key);
hashSet.add(key2);
console.log(hashSet);
hashSet.remove(key);
console.log(hashSet.contains(key));
console.log(hashSet.contains(key2));

