const EventEmitter=require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('tunkifull', () => {
  console.log('off the motor');
  setTimeout(()=>{
    console.log('please turn off motor! its a gentle reminder');

  },3000);
});
console.log("the script is running")
myEmitter.emit('tunkifull');
console.log("the script is still running")

// myEmitter.emit('event');