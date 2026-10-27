const fs = require('fs');
const path = require('path');

const outputDir = __dirname;
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function generateQuestions(type, count) {
  const qs = [];
  for (let i = 1; i <= count; i++) {
    if (type === 'multipleChoice') {
      qs.push({
        question: `Question ${i} for ${type}`,
        options: ['Option A', 'Option B', 'Option C', 'Option D'],
        correctAnswer: 'Option A',
        explanation: '',
        hint: ''
      });
    } else if (type === 'fillBlank') {
      qs.push({
        question: `This is a fill in the ___ question ${i}.`,
        correctAnswer: 'blank',
        explanation: '',
        hint: ''
      });
    } else if (type === 'sentenceBuild') {
      qs.push({
        words: ['This', 'is', 'a', 'sentence'],
        correctSentence: 'This is a sentence',
        explanation: '',
        hint: ''
      });
    } else if (type === 'transformation') {
      qs.push({
        original: `Original sentence ${i}`,
        transformed: `Transformed sentence ${i}`,
        explanation: '',
        hint: ''
      });
    } else if (type === 'review') {
      qs.push({
        question: `Review question ${i}`,
        options: ['A', 'B', 'C', 'D'],
        correctAnswer: 'A',
        explanation: '',
        hint: ''
      });
    }
  }
  return qs;
}

const lessons = [
  { id: 's21', title: 'Câu tường thuật - Dạng Câu kể' },
  { id: 's22', title: 'Câu tường thuật - Dạng Câu hỏi Yes/No' },
  { id: 's23', title: 'Câu tường thuật - Dạng Câu hỏi Wh-' },
  { id: 's24', title: 'Câu tường thuật - Dạng Câu mệnh lệnh & Lời khuyên' },
  { id: 's25', title: 'Bài thi Tổng Ôn Cụm 5', isTest: true }
];

lessons.forEach(lesson => {
  let grammar = [
    { rule: 'Reported Speech Basics', explanation: '...' }
  ];
  let questions = {};

  if (lesson.isTest) {
    grammar = null;
    questions = {
      multipleChoice: generateQuestions('multipleChoice', 20),
      fillBlank: generateQuestions('fillBlank', 18),
      sentenceBuild: generateQuestions('sentenceBuild', 12)
    };
  } else {
    questions = {
      multipleChoice: generateQuestions('multipleChoice', 10),
      fillBlank: generateQuestions('fillBlank', 8),
      sentenceBuild: generateQuestions('sentenceBuild', 7),
      transformation: generateQuestions('transformation', 5),
      review: generateQuestions('review', 5)
    };
  }

  const lessonData = {
    id: lesson.id,
    title: lesson.title,
    grammar: grammar,
    questions: questions
  };

  const fileContent = `const lessonData = ${JSON.stringify(lessonData, null, 2)};\n`;
  fs.writeFileSync(path.join(outputDir, `${lesson.id}.js`), fileContent);
  console.log(`Generated ${lesson.id}.js`);
});
