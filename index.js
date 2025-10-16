// MyPage web app
const http = require("http");
const port = 8000;

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Page</title>
      </head>
      <body>
        <h1>Welcome to My Page</h1>
        <h2>About Me</h2>
        <p>Hello my name is Mohammed Alnoor and I am a student.</p>
        <p>Adding new line to test in VM.</p>
      </body>
    </html>
  `);
}).listen(port, () => {
  console.log(`MyPage web app is running on http://localhost:${port}`);
});
