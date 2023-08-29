# Using events and event emitters in Node.js


Node.js is built on an event-driven architecture, where events are used to trigger callbacks or functions in response to certain actions or occurrences.

The built-in events module in Node.js provides the EventEmitter class, which can be used to create and emit custom events.

To use the EventEmitter class, you first need to create an instance of it and assign it to a variable.

To define a custom event, you need to call the on() method of the EventEmitter instance, passing in the name of the event as a string and the function to be executed when the event is triggered.

To trigger the custom event, you need to call the emit() method of the EventEmitter instance, passing in the name of the event as a string and any data that you want to pass to the event listener function.

You can also remove event listeners using the removeListener() or removeAllListeners() method of the EventEmitter instance.

The once() method can be used to attach an event listener that will be executed only once, and then removed.

The listenerCount() method can be used to get the number of listeners attached to a specific event.
