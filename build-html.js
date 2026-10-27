const fs = require('fs');

const template = fs.readFileSync('english-g8-s1.html', 'utf8');

for (let i = 16; i <= 30; i++) {
  const dataFile = `s${i}.js`;
  const dataContent = fs.readFileSync(dataFile, 'utf8');
  
  // Extract the title from the dataContent to use in <title>
  const titleMatch = dataContent.match(/title:\s*"(.*?)"/);
  const pageTitle = titleMatch ? titleMatch[1] : `Bài ${i}`;

  // Find the block of lessonData in template and replace it
  // Using a regex to match from "const lessonData = {" until "};" at the same indentation level is hard.
  // Instead, since it's a fixed template, I can find the start and end tokens.
  const startToken = "const lessonData = {";
  const endToken = "  const KEY_STREAK = \"eng:streak\";";

  const startIndex = template.indexOf(startToken);
  const endIndex = template.indexOf(endToken);

  if (startIndex !== -1 && endIndex !== -1) {
    let newHtml = template.substring(0, startIndex);
    newHtml += dataContent + '\n';
    newHtml += template.substring(endIndex);

    // Update <title>
    newHtml = newHtml.replace(/<title>.*?<\/title>/, `<title>English Daily Coach - ${pageTitle}</title>`);
    
    // Update button text for review tests (50 questions instead of 35)
    if (i % 5 === 0) {
      newHtml = newHtml.replace(/>Kiểm tra kết quả \d+ câu</g, '>Kiểm tra kết quả 50 câu<');
    } else {
      newHtml = newHtml.replace(/>Kiểm tra kết quả \d+ câu</g, '>Kiểm tra kết quả 35 câu<');
    }

    fs.writeFileSync(`english-g8-s${i}.html`, newHtml);
    console.log(`Generated english-g8-s${i}.html`);
  } else {
    console.log("Could not find lessonData block in template");
  }
}
