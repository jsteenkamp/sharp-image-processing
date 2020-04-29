const sharp = require('sharp');

let filename = 'christchurch';
let width = 820;
let height = 220;

let inputFile = `./assets/${filename}.jpg`;
let outputFile = `./assets/${filename}-${width}-${height}-output.jpg`;

sharp(inputFile)
  .resize({ width, height, options: {fit: 'inside'} })
  .extend({
    top: 0,
    bottom: 0,
    left: 100,
    right: 100,
    background: { r: 220, g: 55, b: 55, alpha: 1 }
  })
  .toFile(outputFile)
  .then(function (newFileInfo) {
    // newFileInfo holds the output file properties
    console.log('Success', newFileInfo);
  })
  .catch(function (err) {
    console.log('Error occurred');
  });
