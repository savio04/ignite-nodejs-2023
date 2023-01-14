import axios from "axios"
import fs from "fs"
import { Readable } from "stream";

const FirstFile = "./Data7602DescendingYearOrder.csv"
const readbableStream = fs.createReadStream(FirstFile);

// function * run() {
//   for(let i=0; i<10000; i++) {
//     const data = {
//       name: `jose-${i}`,
//     }

//     yield data
//   }
// }

// const readbableStream = new Readable({
//   read() {
//     for(const data of run()) {
//       this.push(JSON.stringify(data)+ "\n")
//     }

//     this.push(null)
//   }
// });

(async () => {
  try {
    // await axios.post("http://localhost:3001/file", readbableStream)
    fetch("http://localhost:3001/file", {
      method: "POST",
      body: readbableStream
    })
  } catch(error) {
    
  }
})();