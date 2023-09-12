const path = require("path");
const fs = require("fs");
const url = require("url");

const mimeTypes = {
  ".ico": "image/x-icon",
  ".html": "text/html",
  ".js": "text/javascript",
  ".json": "application/json",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".wav": "audio/wav",
  ".mp3": "audio/mpeg",
  ".svg": "image/svg+xml",
  ".pdf": "application/pdf",
  ".doc": "application/msword",
  ".eot": "application/vnd.ms-fontobject",
  ".ttf": "application/font-sfnt",
};

module.exports = {
  fileService: (req, res) => {
    const parseUrl = url.parse(req.url);

    if (parseUrl.pathname === "/") {
      var filesLink = "<ul>";

      res.setHeader("Content-type", "text/html");
      var fileList = fs.readdirSync(".");

      fileList.forEach((element) => {
        if (fs.statSync("./" + element).isFile()) {
          filesLink += `<br/><li><a href='./${element}'>
            ${element}
        </a></li>`;
        }
      });

      filesLink += "</ul>";

      res.end("<h1>List of files:</h1> " + filesLink);
    }

    const normalizedPath = path.normalize(
      parseUrl.pathname.replace(/^(\.\.[\/\\])+/, "")
    );

    let pathname = path.join(__dirname, "../", normalizedPath);

    if (!fs.existsSync(pathname)) {
      res.statusCode = 404;
      res.end(`File ${pathname} not found!`);
    } else {
      fs.readFile(pathname, (err, data) => {
        if (err) {
          res.statusCode = 500;
          res.end(`Error in getting the file.`);
        } else {
          const ext = path.parse(pathname).ext;

          res.setHeader("Content-type", mimeTypes[ext] || "text/plain");

          res.end(data);
        }
      });
    }
  },
};
