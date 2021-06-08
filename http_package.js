// ************** loading http module **************

// in real world we don't use this http module to create server for applicatio (reason:- see below we add more routes (see if block ) this code more complex). To handle multiple routes and clean structure code  use the (express framework) internaly express is build on top of http module in node.
// const http = require('http');
// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write('hello world');
//         res.end();
//     }
//     if (req.url === '/course') {
//         res.write(JSON.stringify([1, 2, 3, 4, 5]));
//         res.end();
//     }
// });

// this is very low lever we don't use in real world application.
// server.on('connection', function(socket) {
//     console.log('listeing the port.....');
// })

// server.listen(3000);
// console.log('running port 3000......');
// testing pupose console.log(module);

const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Requsted..");
  res.end("hello world");
});

server.listen(5000, function () {
  console.log("running......");
});
