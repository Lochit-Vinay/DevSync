const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Back to Top Button</title>
      <style>
        body {
          height: 2000px;
          font-family: Arial, sans-serif;
        }
        #topBtn {
          position: fixed;
          bottom: 20px;
          right: 20px;
          padding: 10px 15px;
          font-size: 16px;
          background: #007BFF;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          display: none;
        }
        #topBtn:hover {
          background: #0056b3;
        }
      </style>
    </head>
    <body>
      <h1>Scroll down and click the button to go to the top</h1>
      <button id="topBtn">Top</button>
      <script>
        const topBtn = document.getElementById("topBtn");
        window.onscroll = function() {
          if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            topBtn.style.display = "block";
          } else {
            topBtn.style.display = "none";
          }
        };
        topBtn.onclick = function() {
          window.scrollTo({ top: 0, behavior: "smooth" });
        };
      </script>
    </body>
    </html>
  `);
});

