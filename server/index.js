import { createServer } from "node:http";
import { createReadStream } from "node:fs";
import { Readable, Transform } from "node:stream";
import { WritableStream } from "node:stream/web";
import csvtojson from "csvtojson";
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

  let items;

  Readable.toWeb(createReadStream("./animeflv.csv"))
    .pipeThrough(Transform.toWeb(csvtojson()))
    .pipeTo(
      new WritableStream({
        write(chunk) {
          res.write(chunk);
        },

        close() {
          res.end();
        },
      })
    );

  res.writeHead(200, headers);
  //res.end("working");
})
  .listen(PORT)
  .on("listening", (_) => console.log(`server is running at ${PORT}`));
