// TODO 1

const { EventEmitter } = require("events")
 
const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
}
   
// TODO 2
const myEventEmitter = new EventEmitter();
   
// TODO 3   
const onBirthdayEventListener = ({ name }) => {
    birthdayEventListener(name)
}

myEventEmitter.on("birthday", onBirthdayEventListener)

// TODO 4
myEventEmitter.emit("birthday", {name: "Taufik"})