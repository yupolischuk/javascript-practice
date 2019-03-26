"use strict";

const EventEmitter = require('events');
/*
  Read Only Event Emitter
*/
module.exports = class Roee extends EventEmitter {
  constructor (executor) {
    super();
    const emit = this.emit.bind(this);
    this.emit = undefined;
    executor(emit);
  }
};
