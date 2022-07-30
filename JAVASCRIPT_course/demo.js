const fs = require('fs');
const path = ['./demo2.js', './QnA.js'];
var logs = [];
fs.access(path[0], (error) => {
  if (error) {
      console.log(error);
      return;
    }
      fs.readFile(path[0], (err, data) => {
          if (err) {
              console.log(err);
          } else {
              console.log(`yes`);
              var array = data.toString().split("\n");
              logs.push(array);
          }
      }
      );
}
);

console.log(logs);