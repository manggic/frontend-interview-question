const http = require("http");


  const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.end("home page deep");
    } else if (req.url === "/slow-page") {
      console.log('sss');
      let j = 0;
      // for (let i = 0; i < 4; i++) {
      //   j++;
      // }
      res.end('hey');
    }
  });

  server.listen(4000, () => {
    console.log("hey server is running");
  });

