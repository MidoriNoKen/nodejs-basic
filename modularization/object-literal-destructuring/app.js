/**
* Gunakan object destructuring untuk mengimpor lebih dari satu nilai pada modul.
*/

const { firstName, middleName, lastName } = require('./lib/user');
console.log(firstName, middleName, lastName);
