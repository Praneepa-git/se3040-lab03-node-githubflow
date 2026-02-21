const fs = require('fs');

fs.writeFile('file1.txt', 'Hello World!', function (err) {
  if (err) throw err;
  console.log('File saved!');
});