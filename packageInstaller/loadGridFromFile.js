const fs = require('fs');

module.exports = function loadGridFromFile (path) {
  try {
    const str = fs.readFileSync(path).toString('utf8');
    const rows = str.split('\n').filter(r => r);
    return rows;
  } catch (ex) {
    console.error(`Couldn't load/process file ${path}`, ex);
  }
}
