import http from "http";

const server = http.createServer((req, res) => {
  // Set response type
  res.setHeader("Content-Type", "application/json");

  // GET all users
  if (req.url === "/api/users" && req.method === "GET") {
    res.end(
      JSON.stringify({
        msg: "all users",
      }),
    );
  }

  // POST add user
  else if (req.url === "/api/user" && req.method === "POST") {
    res.end(
      JSON.stringify({
        msg: "add user",
      }),
    );
  }

  // GET single user
  else if (req.url === "/api/user/1" && req.method === "GET") {
    res.end(
      JSON.stringify({
        msg: "single user with id 1",
      }),
    );
  }

  // PUT update user
  else if (req.url === "/api/user/1" && req.method === "PUT") {
    res.end(
      JSON.stringify({
        msg: "update user 1",
      }),
    );
  }

  // DELETE user
  else if (req.url === "/api/user/1" && req.method === "DELETE") {
    res.end(
      JSON.stringify({
        msg: "remove 1",
      }),
    );
  }

  // Route not found
  else {
    res.statusCode = 404;

    res.end(
      JSON.stringify({
        msg: "Route not found",
      }),
    );
  }
});

// Start server
server.listen(3000, () => {
  console.log("prg7 is running on http://localhost:3000");
});
