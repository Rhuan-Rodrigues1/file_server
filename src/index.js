const http = require("http");
const { fileService } = require("./service/fileService");

const PORT = 3000;

http
  .createServer((req, res) => {
    fileService(req, res);
  })
  .listen(PORT);

console.log(`Server listening on port http://localhost:${PORT}`);
