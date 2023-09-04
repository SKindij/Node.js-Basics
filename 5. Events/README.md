# Using events and event emitters in Node.js
> Node.js is built on an event-driven architecture, which leverages events to trigger callbacks or functions in response to specific actions or occurrences. This event-driven paradigm is at the core of asynchronous programming in Node.js, making it highly efficient for handling I/O operations and concurrency.

> In the context of the construction industry, Node.js can be a valuable tool for managing the flow of construction materials and supplies from a manufacturer (supplier of components) to a construction company (customer). This example will demonstrate how event-driven programming can be applied to this scenario.

#### The EventEmitter Class

The built-in events module in Node.js provides the EventEmitter class, which is the cornerstone for creating and managing custom events.

> Imagine a construction materials management system. We can use the built-in events module to create an event emitter that will help us track the supply chain.

#### Creating an EventEmitter Instance

To use the EventEmitter class, you must first create an **instance** of it and assign it to a variable:
```javascript
  const EventEmitter = require('events');
  const supplyChain = new EventEmitter();
```

#### Defining Custom Events

To define a custom event, you use the **on()** method of the EventEmitter instance. This method takes two parameters: the name of the event as a string and the function to be executed when the event is triggered:

> In our scenario, we can define a custom event, such as 'material_arrival,' to notify the construction company when a shipment of materials arrives at their site.

```javascript
  supplyChain.on('material_arrival', (material, quantity) => {
    console.log(`Received ${quantity} units of ${material}.`);
  });
```

#### Emitting Custom Events

To trigger a custom event, you call the **emit()** method of the EventEmitter instance, passing in the name of the event as a string and any data you want to pass to the event listener function:

> To simulate the arrival of materials, the manufacturer (supplier) can trigger the 'material_arrival' event and pass the material type and quantity

```javascript
  // In the manufacturer's code
  supplyChain.emit('material_arrival', 'concrete blocks', 100);
  // Output: Received 100 units of concrete blocks.
```

#### Removing Event Listeners

You can also manage event listeners by removing them using the **removeListener()** or **removeAllListeners()** methods of the EventEmitter instance:

> As the construction project progresses, the construction company may want to stop listening for material arrivals.

```javascript
  supplyChain.removeListener('material_arrival', listenerFunction);
  // or
  supplyChain.removeAllListeners('material_arrival');
```

#### Executing an Event Listener Once

The **once()** method is useful when you want to attach an event listener that will be executed only once and then automatically removed:

> Suppose the construction company only wants to be notified about the arrival of a special shipment once. 

```javascript
  supplyChain.once('special_delivery', () => {
    console.log('Special materials have arrived.');
  });
```

#### Counting Event Listeners

To determine the number of listeners attached to a specific event, you can use the **listenerCount()** method:

> To keep track of how many times the 'material_arrival' event is being monitored, the construction company can use the listenerCount() method

```javascript
  const numberOfListeners = supplyChain.listenerCount('material_arrival');
  console.log(`Number of 'material_arrival' listeners: ${numberOfListeners}`);
```

Whether you're building real-time web servers, chat applications, or any other event-driven system, Node.js' event handling capabilities are a powerful tool in your arsenal.
