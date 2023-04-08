const fs = require('fs');
const path = require('path');

const inputFile = path.resolve(__dirname, './dist/index.js');
const outputFile = path.resolve(__dirname, './dist/bookmarklet.js');

const head = `javascript:(function(){`;
const tail = `})()`;

fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    process.exit(1);
  }

  const encodedData = encodeURIComponent(data);

  fs.writeFile(outputFile, head + encodedData + tail, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      process.exit(1);
    }

    console.log('File encoded successfully.');
  });
});
