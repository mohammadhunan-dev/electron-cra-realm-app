const { app, BrowserWindow } = require("electron");
const net = require("net");

// const server = net.createServer(function (connection) {
//   console.log("client connected");

//   //   connection.on("end", function () {
//   //     console.log("client disconnected");
//   //   });

//   //   connection.write("Hello World!\r\n");
//   //   connection.pipe(connection);
// });

// server.listen(8080, function () {
//   console.log("server is listening");
// });

const express = require("express");

const expressApp = express();
const port = 8082;

expressApp.get("/", (req, res) => {
  res.send("Hello World!");
});

expressApp.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const path = require("path");
const url = require("url");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL(
    process.env.ELECTRON_START_URL ||
      url.format({
        pathname: path.join(__dirname, "/../public/index.html"),
        protocol: "file:",
        slashes: true,
      })
  );

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
