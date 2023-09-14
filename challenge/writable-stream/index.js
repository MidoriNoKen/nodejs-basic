/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const fs = require("fs")
const path = require("path")

const inPath = path.resolve(__dirname, 'input.txt')
const outPath = path.resolve(__dirname, 'output.txt')

const readableStream = fs.createReadStream(inPath, {
    highWaterMark: 15
})

const writableStream = fs.createWriteStream(outPath);

readableStream.on("readable", () => {
    try {
        writableStream.write(`${readableStream.read()}\n`)
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
})

readableStream.on("end", () => {
    console.log("Selesai")
})