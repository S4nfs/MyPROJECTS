const os = require("os");

console.log(os.arch());

const freeMemory = os.freemem();
console.log(`Free Memory (GB): ${freeMemory / 1024 / 1024 / 1024}`);

const totalMemory = os.totalmem();
console.log(`Total Memory (GB): ${totalMemory / 1024 / 1024 / 1024}`);

console.log(os.cpus([0]));