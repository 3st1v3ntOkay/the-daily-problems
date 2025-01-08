// import { promises as fs } from "fs";
// import { gzip } from "zlib";
// import { promisify } from "util";

import { promises as fs } from "node:fs";
import { gzip } from "node:zlib";
import { promisify } from "node:util";

const gzipPromise = promisify(gzip);
const filename = process.argv[2];

async function main() {
  const data = await fs.readFile(filename);
  const gzippedData = await gzipPromise(data);

  await fs.writeFile(`${filename}.gz`, gzippedData);
  console.log("File successfully compressed");
}

main();
