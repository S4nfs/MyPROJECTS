const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  //1st Method Normal Way

  //     fs.readFile("input.txt", (err, data) => {
  //         if (err) return console.error(err);
  //         res.end(data.toString());
  //     });
  // });
  
// ==========================================================================================================
  //2nd Method Using Stream
  //Handle stream events --> data, end, and error
  const rstream = fs.createReadStream("input.txt");
  rstream.on("data", (chunkData) => {
    res.write(chunkData);
  });
  rstream.on("end", () => {
    res.end();
  });
  rstream.on("error", (err) => {
    console.log(err);
  });
});

server.listen(3000, "127.0.0.1");
