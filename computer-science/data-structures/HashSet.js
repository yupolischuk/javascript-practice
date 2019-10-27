/*
    Unordered collection of unique elements
    Work only for storing numeric values
*/
var MyHashSet = function() {
    this.mySet = Array.from({length: 10}, x=>[]);
    this.mapFn = function(num) {
        return num % 10;
    }
};

MyHashSet.prototype.add = function(key) {
    let mapValue = this.mapFn(key);
    let arr = this.mySet[mapValue];
    let index = arr.indexOf(key);
    if (index === -1) {
        arr.push(key);
    }
};

MyHashSet.prototype.remove = function(key) {
    let mapValue = this.mapFn(key);
    let arr = this.mySet[mapValue];
    let index = arr.indexOf(key);
    if (index!== -1) {
        arr.splice(index, 1);
    }
};

MyHashSet.prototype.contains = function(key) {
    let mapValue = this.mapFn(key);
    let arr = this.mySet[mapValue];
    let index = arr.indexOf(key);
    return index !== -1;
};

MyHashSet.prototype.get = function(key) {
    return this.mySet[key][0];
};

MyHashSet.prototype.getAll = function(key) {
    return this.mySet.filter(val => val.length > 0);
};


let hashSet = new MyHashSet();
hashSet.add(1);
hashSet.add(2);
hashSet.add(3);
hashSet.add(4);
hashSet.add(5);
hashSet.add(6);
hashSet.add(7);
hashSet.add(8);
hashSet.add(9);
hashSet.add(10);
hashSet.add(11);
hashSet.add(12);
hashSet.add(21);
hashSet.add(22);
console.log(hashSet);
// hashSet.remove(key);
// console.log(hashSet.contains(key));
// console.log(hashSet.contains(key2));
console.log(hashSet.getAll());

// console.log(hashSet.get(7));