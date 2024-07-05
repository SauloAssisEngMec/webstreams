import { createServer } from "node:http";
import { createReadStream } from "node:fs";

const PORT = 3000;

createServer(async (req, res) => {
  const headers = {
    "Access-control-Allow-Origin": "*",
    "Access-control-Allow-Methods": "*",
  };
  if (req.method === "OPTIONS") {
    res.writeHead(204, headers);
    res.end();
    return;
  }

  //createReadStream("./animeflv.csv").pipe(res);

  res.writeHead(200, headers);
  res.end("working");
})
  .listen(PORT)
  .on("listening", (_) => console.log(`server is running at ${PORT}`));
