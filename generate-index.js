const fs = require('fs');

const lessons = [
  { day: '1', title: 'Hiện tại đơn vs. Hiện tại tiếp diễn', desc: 'Present Simple vs. Present Continuous' },
  { day: '2', title: 'Quá khứ đơn vs. Quá khứ tiếp diễn', desc: 'Past Simple vs. Past Continuous with When & While' },
  { day: '3', title: 'Tương lai đơn vs. Tương lai gần', desc: 'Future Simple (Will) vs. Near Future (Be going to)' },
  { day: '4', title: 'Thì Hiện tại hoàn thành', desc: 'Present Perfect Tense with Since/For/Already/Yet' },
  { day: '5', title: 'Tổng ôn Ma trận 7 Thì & Bài tập', desc: 'Mastery Review of 7 Core Tenses & Sentence Transformation', review: true },
  
  { day: '6', title: 'Động từ chỉ sở thích + V-ing / to V', desc: 'Verbs of liking (Love, like, hate, mind...)' },
  { day: '7', title: 'So sánh hơn & So sánh nhất', desc: 'Comparative & Superlative forms of Adjectives/Adverbs' },
  { day: '8', title: 'Mạo từ: a, an, the, rỗng', desc: 'Articles (a, an, the, zero article)' },
  { day: '9', title: 'Từ để hỏi & Câu hỏi đuôi', desc: 'Question words & Tag questions' },
  { day: '10', title: 'Bài thi Tổng Ôn Cụm 2', desc: 'Review Test 2 (Lessons 6-9)', review: true },
  
  { day: '11', title: 'Câu đơn, câu ghép, câu phức', desc: 'Simple, compound, complex sentences & Conjunctions' },
  { day: '12', title: 'Động từ khuyết thiếu cơ bản', desc: 'Modal verbs: Should, Shouldn\'t, Have to, Must' },
  { day: '13', title: 'Câu điều kiện Loại 1', desc: 'Conditional sentences Type 1' },
  { day: '14', title: 'Câu điều kiện Loại 2', desc: 'Conditional sentences Type 2' },
  { day: '15', title: 'Bài thi Tổng Ôn Cụm 3', desc: 'Review Test 3 (Lessons 11-14)', review: true },
  
  { day: '16', title: 'Thể bị động ở Hiện tại & Quá khứ', desc: 'Passive voice in Present and Past tenses' },
  { day: '17', title: 'Thể bị động ở Tương lai & Modal verbs', desc: 'Passive voice in Future and with Modal verbs' },
  { day: '18', title: 'Câu gián tiếp: Câu kể', desc: 'Reported Speech (Statements)' },
  { day: '19', title: 'Câu gián tiếp: Câu hỏi', desc: 'Reported Speech (Questions)' },
  { day: '20', title: 'Bài thi Tổng Ôn Cụm 4', desc: 'Review Test 4 (Lessons 16-19)', review: true },
  
  { day: '21', title: 'Tương lai tiếp diễn', desc: 'Future Continuous Tense' },
  { day: '22', title: 'Động từ khuyết thiếu dự đoán', desc: 'Modal verbs of probability (May, Might, Can, Could)' },
  { day: '23', title: 'Cấu trúc quen với (Used to)', desc: 'Used to vs. Be/Get used to doing something' },
  { day: '24', title: 'Cụm động từ thường gặp', desc: 'Common Phrasal Verbs in Grade 8' },
  { day: '25', title: 'Bài thi Tổng Ôn Cụm 5', desc: 'Review Test 5 (Lessons 21-24)', review: true },
  
  { day: '26', title: 'Danh động từ & Động từ nguyên thể', desc: 'Gerunds & Infinitives (Advanced)' },
  { day: '27', title: 'Lượng từ cơ bản & nâng cao', desc: 'Quantifiers: much, many, a lot of, a few, a little' },
  { day: '28', title: 'Giới từ thời gian, nơi chốn & Câu cảm thán', desc: 'Prepositions & Exclamatory sentences (What/How)' },
  { day: '29', title: 'Cấu trúc cầu khiến / sai khiến', desc: 'Structures with Make, Let, Have, Get' },
  { day: '30', title: 'BÀI THI TỐT NGHIỆP TOÀN KHÓA', desc: 'FINAL EXAM - Mastery of Grade 8 Grammar', review: true }
];

let html = '';
for (let i = 0; i < 6; i++) {
  html += `    <div class="week-label">&#128216; Cụm ${i+1}: ${['7 Thì Cơ Bản', 'Ngữ Pháp Nền Tảng', 'Câu Phức & Điều Kiện', 'Bị Động & Gián Tiếp', 'Tương Lai & Phrasal Verbs', 'Chuyên Đề Mở Rộng'][i]}</div>\n`;
  html += `    <div class="lesson-list">\n`;
  for (let j = 0; j < 5; j++) {
    const l = lessons[i * 5 + j];
    const isReady = (i * 5 + j) < 30; // All 30 lessons are ready
    const href = isReady ? `href="english-g8-s${l.day}.html"` : 'href="#" onclick="alert(\\\'Bài học đang được cập nhật!\\\'); return false;"';
    const opacity = isReady ? '1' : '0.6';
    
    html += `      <a class="lesson-card" ${href} style="opacity: ${opacity}; margin-bottom: 10px;">\n`;
    html += `        <div class="lesson-day" ${l.review ? 'style="background: #e6b198; color: white;"' : ''}>Bài ${l.day}</div>\n`;
    html += `        <div class="lesson-info">\n`;
    html += `          <h3>${l.title}</h3>\n`;
    html += `          <p>${l.desc}</p>\n`;
    html += `        </div>\n`;
    html += `        <div class="lesson-arrow">&#8594;</div>\n`;
    html += `      </a>\n`;
  }
  html += `    </div>\n\n`;
}

let content = fs.readFileSync('index.html', 'utf8');
const startTag = '<div class="week-label">&#128216; Cụm 1: 7 Thì Cơ Bản</div>';
const endTag = '<div class="footer">';
const startIdx = content.indexOf(startTag);
const endIdx = content.indexOf(endTag);

if (startIdx !== -1 && endIdx !== -1) {
  content = content.substring(0, startIdx) + html + '    ' + content.substring(endIdx);
  fs.writeFileSync('index.html', content);
  console.log("Updated index.html");
} else {
  console.log("Tags not found");
}
