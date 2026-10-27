const fs = require('fs');
const content = fs.readFileSync('english-g8-s1.html', 'utf8');
const match = content.match(/<script>([\s\S]*?)<\/script>/);
if (match) {
  fs.writeFileSync('script.js', match[1]);
  console.log("Extracted to script.js");
}
