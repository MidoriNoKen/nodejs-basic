const fs = require("fs")

// Versi Asynchronous
const fileReadCallBack = (error, data) => {
    if(error) {
        console.log("Gagal membaca berkas")
        return
    }
    console.log(data)
}

fs.readFile("todo.txt", "UTF-8", fileReadCallBack)

// Versi Synchronous
const data = fs.readFileSync("todo.txt", "UTF-8")
console.log(data)