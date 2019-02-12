const loadGridFromFile = require('./loadGridFromFile');
const search = require('./search');

const gridPath = process.argv[2];

if (!gridPath) {
  console.error(`Missing grid or wordlist in input\nSample usage: node index.js sample/grid.txt sample/words.txt`);
  process.exit(1);
}

const grid = loadGridFromFile(gridPath);

if (!grid) {
  console.error("Invalid input");
  process.exit(1);
}

const results = search(grid);
console.log(results);
process.exit(0);
