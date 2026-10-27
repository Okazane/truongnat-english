const fs = require('fs');

const files = ['english-g8-s1.html', 'english-g8-s2.html', 'english-g8-s3.html', 'english-g8-s4.html', 'english-g8-s5.html'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // Fix the missing closing brace
  content = content.replace(/<\/div>`\s*:\s*""\s*\n\s*\${ex\.transformation/g, '</div>` : ""}\n\n        ${ex.transformation');
  fs.writeFileSync(file, content);
  console.log('Fixed syntax in', file);
});
