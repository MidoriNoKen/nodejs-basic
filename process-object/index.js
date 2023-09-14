// TODO 1
const initialMemoryUsage = process.memoryUsage().heapUsed;

// TODO 2
const yourName = process.argv[2];
const herName = process.argv[3];

// TODO 3
const environment = process.env.NODE_ENV; 
 
for(let i = 0; i <= 10000; i++) {
    // Proses looping ini akan membuat penggunaan memori naik
}
 
// TODO 4
const currentMemoryUsage = process.memoryUsage().heapUsed;
 
console.log(`Hai, ${yourName} dan ${herName}`);
console.log(`Mode environment: ${environment}`);
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);
