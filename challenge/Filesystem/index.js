// TODO: tampilkan teks pada notes.txt pada console.

const fs = require("fs")
const path = require("path");

const filePath = path.resolve(__dirname, 'notes.txt')

const fileReadCallBack = (error, data) => {
    if(error) {
        console.log("Gagal membaca berkas")
        return
    }
    console.log(data)
}

// fs.readFile("notes.txt", "UTF-8", fileReadCallBack)
fs.readFile(filePath, "UTF-8", fileReadCallBack)