import http from "http";
import { Transform } from "stream";
import { myexpress } from "./middlewares/root.js";

async function parseToCSV(requestString) {
  console.log(requestString);
}

const transformStream = new Transform({
  transform(chunk, enconding, callback) {
    const transform = Buffer.from(chunk).toString();
    (async () => {
      await parseToCSV(transform);
    })();

    callback(null, chunk);
  },
});

const server = http.createServer(async (request, response) => {
  if (request.url === "/file" && request.method === "POST") {
    request.pipe(transformStream).pipe(response);
  } else {
    await myexpress.json(request, response);

    if (request.url === "/user" && request.method === "POST") {
  
      console.log("body", request.body)
  
      return response.end();
    } else {
      return response.end("Not found");
    }
  }
});

server.listen(3001, () => {
  console.log("Api iniciada...");
});
