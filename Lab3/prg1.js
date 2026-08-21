import http from "http";

const server = http.createServer();

server.on("request", (req, res) => {
  res.write("Hello From Server");

  res.end(); // ends the connection between server and client
});

server.listen(4444, () => {
  console.log("Server is running...");
});
