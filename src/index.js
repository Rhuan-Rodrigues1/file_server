const http = require("http");
const { fileService } = require("./service/fileService");

const PORT = 3000;

http
  .createServer((req, res) => {
    console.log("http://localhost:3000");
    fileService(req, res);
  })
  .listen(3000);
