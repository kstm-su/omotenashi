const fs = require('fs');

const src = './webpack.config.js.sample';
const dst = './webpack.config.js';

fs.stat(dst, err => {
  if (!err) {
    return;
  }
  let r = fs.createReadStream(src);
  let w = fs.createWriteStream(dst);
  r.pipe(w);
});
