const fs = require('fs');

const files = ['english-g8-s1.html', 'english-g8-s2.html', 'english-g8-s3.html', 'english-g8-s4.html', 'english-g8-s5.html'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Remove hint rendering for Transformation and Review
  content = content.replace(/\$\{q\.hint \? `<p class="eng-hint">💡 Gợi ý: \$\{q\.hint\}<\/p>` : ""\}/g, '');
  
  // Fill in the blanks might have a different hint rendering
  // Let's check if there is a fill blank hint
  content = content.replace(/<p class="eng-fill-hint">💡 Gợi ý: \$\{q\.hint\}<\/p>/g, '');
  content = content.replace(/\$\{q\.hint \? `<p class="eng-fill-hint">💡 Gợi ý: \$\{q\.hint\}<\/p>` : ""\}/g, '');

  if (file === 'english-g8-s5.html') {
    // Nullify grammar block in S5
    content = content.replace(/grammar:\s*\{[\s\S]*?dialogue:/, 'grammar: null,\n\n    dialogue:');
    
    // In case the structure is slightly different (e.g. S5 has exercises after grammar instead of dialogue)
    content = content.replace(/grammar:\s*\{[\s\S]*?exercises:/, 'grammar: null,\n\n    exercises:');
  }

  fs.writeFileSync(file, content);
  console.log('Applied user feedback to', file);
});
