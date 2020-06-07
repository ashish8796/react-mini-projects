// 1 - Event emitter
// a - You can publish a event
// b - You can listen an event

class EventEmiiter {
  constructor() {
    this.events = {}
  }

  on(eventName, cb) {
    // Need to add callback to the particular event array
    const event = this.events[eventName];
    if (event) {
      this.events[eventName].push(cb)
    } else {
      this.events[eventName] = [];
      this.events[eventName].push(cb)
    }
  }

  emit(eventName, data) {
    // Need to call all callbacks of that particular event
    const event = this.events[eventName];
    if (event) {
      this.events[eventName].forEach(cb => {
        cb.call(null, data);
      })
    }
  }
}

const emitter = new EventEmiiter();
export default emitter;