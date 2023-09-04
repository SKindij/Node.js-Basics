# Using events and event emitters in Node.js
> Node.js is built on an event-driven architecture, which leverages events to trigger callbacks or functions in response to specific actions or occurrences. This event-driven paradigm is at the core of asynchronous programming in Node.js, making it highly efficient for handling I/O operations and concurrency.

#### The EventEmitter Class

The built-in events module in Node.js provides the EventEmitter class, which is the cornerstone for creating and managing custom events.

#### Creating an EventEmitter Instance

To use the EventEmitter class, you must first create an instance of it and assign it to a variable:
```javascript
  const EventEmitter = require('events');
  const supplyChain = new EventEmitter();
```

#### Defining Custom Events

To define a custom event, you use the **on()** method of the EventEmitter instance. This method takes two parameters: the name of the event as a string and the function to be executed when the event is triggered:
```javascript
  
  });
```

#### Emitting Custom Events

To trigger a custom event, you call the emit() method of the EventEmitter instance, passing in the name of the event as a string and any data you want to pass to the event listener function:
```javascript

```











