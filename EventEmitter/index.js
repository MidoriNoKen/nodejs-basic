const { EventEmitter } = require("events")


const myEventEmitter = new EventEmitter()

// Fungsi yang akan dijalankan ketika event coffee-order terjadi

// const makeCoffee = ({ name }) => {
const makeCoffee = (name) => {
    console.log(`Kopi ${name} telah dibuat!`)
}

// const makeBill = ({ price }) => {
const makeBill = (price) => {
    console.log(`Bill sebesar ${price} telah dibuat!`)
}

// Mendaftarkan fungsi makeCoffee sebagai listener event coffee-order

const onCoffeeOrderedListener = ({ name, price }) => {
    makeCoffee(name)
    makeBill(price)
}

// myEventEmitter.on('coffee-order', makeCoffee)
// myEventEmitter.on('coffee-order', makeBill)

myEventEmitter.on('coffee-order', onCoffeeOrderedListener)

// Memicu event 'coffee-order' terjadi.

myEventEmitter.emit('coffee-order', { name: 'Tubruk', price: 15000})