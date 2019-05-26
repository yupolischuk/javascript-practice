let componentsToRun = [
  'a',
  'second_a',
  'b',
  'c'
];

class Factory {
  components = {};
  registerComponent(componentName, componentObject) {
    this.components[componentName] = componentObject;
  }

  getComponent(componentName) {
    return this.components[componentName];
  }

  getAllComponents() {
    return this.components;
  }

  isRegistered(componentName) {
    return this.components[componentName] ? true : false;
  }
}

class A {
  localParam: string;
  constructor(inputParam: string) {
    this.localParam = inputParam;
  }
  index():String {
    return ' index A:' + this.localParam;
  }
}

class B {
  localParam: string;
  constructor(inputParam: string) {
    this.localParam = inputParam;
  }
  index():String {
    return 'index B: ' + this.localParam;
  }
}

class C {
  localParam: string;
  constructor(inputParam: string) {
    this.localParam = inputParam;
  }
  index():String {
    return 'index C: ' + this.localParam;
  }
}

let factory = new Factory();
factory.registerComponent('a', new A('first a'));
factory.registerComponent('second_a', new A('second a'));
factory.registerComponent('b', new B('first b'));

// process income data
(function main(componentsToRun, factory) {
  for(let i = 0; i < componentsToRun.length; i++) {
    if (factory.isRegistered(componentsToRun[i])) {
      console.log(factory.getComponent(componentsToRun[i]).index());
    }
  }
})(componentsToRun, factory);

