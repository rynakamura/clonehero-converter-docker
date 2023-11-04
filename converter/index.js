const { exec } = require("child_process");
const path = require("path");
const express = require("express");
const app = express();
const port = 3000;
let isEasyRunning = false;
let isConvertRunning = false;
app.use(express.static(path.join(__dirname, "front")));
app.get("/", (req, res) => {
  res.sendFile("./front/index.html");
});
app.get("/status", (req, res) => {
  res.json(isEasyRunning || isConvertRunning);
});
app.post("/copy", (req, res) => {
  console.log("copiando arquivos ...");
  exec("sh /converter/copy.sh", (error, stdout, stderr) => {
    console.log("completo");
    console.debug("log", stdout);
    console.debug("log erro", stderr);
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });
  res.redirect("/");
});

app.post("/videos", (req, res) => {
  isEasyRunning =true
  isConvertRunning = true;
  console.log("convertendo dificuldade ...");
  exec("sh /converter/easy.sh", (error, stdout, stderr) => {
    isEasyRunning = false;
    console.log("concluído easy");
    console.debug("log", stdout);
    console.debug("log erro", stderr);
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });
  console.log("convertendo vídeo ...");

  exec("sh /converter/converter.sh", (error, stdout, stderr) => {
    isConvertRunning = false;
    console.log("concluído vídeo");
    console.debug("log", stdout);
    console.debug("log erro", stderr);
    
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
