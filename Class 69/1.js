const path = require("path")

console.log(path.join(__dirname, 'dist/').replaceAll('\\', '/'))
