import http from "node:http"
import { Readable } from "node:stream"

//generator function
function * run() {
  for(let i=0; i<99; i++) {
    const data = {
      name: `jose-${i}`,
    }

    yield data
  }
}

const server = http.createServer((request, response) => {
  const readable = new Readable({
    read() {
      for(const data of run()) {
        this.push(JSON.stringify(data)+ "\n")
      }

      this.push(null)
    },
  })


  readable
    .pipe(response)
})

server.listen(3001, () => {
  console.log("Api inciada...")
})