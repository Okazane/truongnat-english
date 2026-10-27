const fs = require('fs');

const files = ['english-g8-s1.html', 'english-g8-s2.html', 'english-g8-s3.html', 'english-g8-s4.html', 'english-g8-s5.html'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Add the new UI blocks (Phần 4 and Phần 5) if not already added
  if (!content.includes('Phần 4 · Viết lại câu')) {
    const htmlInsert = `
        \${ex.transformation && ex.transformation.length ? \`
        <div class="eng-ex-block">
          <p class="eng-section-sub">Phần 4 · Viết lại câu (Sentence Transformation)</p>
          <div id="eng-transform"></div>
        </div>\` : ""}

        \${ex.review && ex.review.length ? \`
        <div class="eng-ex-block" style="background: rgba(217,122,82,0.05); border-color: rgba(217,122,82,0.2);">
          <p class="eng-section-sub" style="color: #c56842;">Phần 5 · Ôn tập bài cũ (Spaced Repetition)</p>
          <div id="eng-review"></div>
        </div>\` : ""}
`;
    content = content.replace(/(<div id="eng-build"><\/div>\s*<\/div>` : "")}/g, `$1\n${htmlInsert}`);
  }

  // Add render logic for new blocks
  if (!content.includes('eng-transform')) {
     // I need a better way to insert this. Let's insert before `// Submit`
     const renderLogic = `
      const transBox = document.getElementById("eng-transform");
      if (transBox && ex.transformation) {
        transBox.innerHTML = ex.transformation.map((q, i) => \`
          <div class="eng-q">
            <p><b>Câu \${i+1}:</b> \${q.sentence}</p>
            \${q.hint ? \`<p class="eng-hint">💡 Gợi ý: \${q.hint}</p>\` : ""}
            <input type="text" class="eng-fill-input trans-input" data-qi="\${i}" placeholder="Gõ câu trả lời của bạn..." style="width: 100%; max-width: none; margin-top: 8px;" />
          </div>
        \`).join("");
      }

      const revBox = document.getElementById("eng-review");
      if (revBox && ex.review) {
        revBox.innerHTML = ex.review.map((q, i) => \`
          <div class="eng-q">
            <p><b>Câu \${i+1}:</b> \${q.sentence}</p>
            \${q.hint ? \`<p class="eng-hint">💡 Gợi ý: \${q.hint}</p>\` : ""}
            <input type="text" class="eng-fill-input review-input" data-qi="\${i}" placeholder="Gõ câu trả lời..." />
          </div>
        \`).join("");
      }
      `;
     content = content.replace(/\/\/ Submit/g, `${renderLogic}\n    // Submit`);
  }

  // Add submit checking logic for new blocks
  if (!content.includes('cleanVal')) {
    const submitLogic = `
      if (ex.transformation) {
        const transBox = document.getElementById("eng-transform");
        ex.transformation.forEach((q, qi) => {
          total++;
          const input = transBox ? transBox.querySelector(\`.trans-input[data-qi="\${qi}"]\`) : null;
          const val = input ? input.value.trim().toLowerCase() : "";
          const cleanVal = val.replace(/[.,!?]/g, '').replace(/\\s+/g, ' ');
          const cleanAns = q.answer.toLowerCase().replace(/[.,!?]/g, '').replace(/\\s+/g, ' ');
          if (cleanVal && cleanVal === cleanAns) {
            if (input) input.classList.add("correct");
            correct++;
          } else {
            if (input) {
              input.classList.add("wrong");
              if (!val) input.placeholder = \`Chưa làm (\${q.answer})\`;
              else input.value = \`\${input.value} (Sai, đáp án: \${q.answer})\`;
            }
          }
        });
      }

      if (ex.review) {
        const revBox = document.getElementById("eng-review");
        ex.review.forEach((q, qi) => {
          total++;
          const input = revBox ? revBox.querySelector(\`.review-input[data-qi="\${qi}"]\`) : null;
          const val = input ? input.value.trim().toLowerCase() : "";
          if (val && val === q.answer.toLowerCase()) {
            if (input) input.classList.add("correct");
            correct++;
          } else {
            if (input) {
              input.classList.add("wrong");
              if (!val) input.placeholder = \`Chưa làm (\${q.answer})\`;
            }
          }
        });
      }
`;
    // Insert before resBox styling
    content = content.replace(/const resBox = document.getElementById\("eng-result"\);/g, `${submitLogic}\n      const resBox = document.getElementById("eng-result");`);
  }
  
  // Replace the completed logic
  content = content.replace(/if \(!completedDays\.includes\(dayId\)\) {/g, 'if (correct >= 25 && !completedDays.includes(dayId)) {');

  fs.writeFileSync(file, content);
  console.log('Upgraded', file);
});
