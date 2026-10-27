const fs = require('fs');
const path = require('path');

function generateQuestions(type, count, titleBase) {
  const q = [];
  for (let i = 1; i <= count; i++) {
    if (type === 'multipleChoice') {
      q.push({
        question: `[${titleBase}] Question ${i}?`,
        options: ["A", "B", "C", "D"],
        correctAnswer: "A",
        hint: ""
      });
    } else if (type === 'fillBlank') {
      q.push({
        question: `[${titleBase}] The book ___ (write) by him.`,
        correctAnswer: "was written",
        hint: ""
      });
    } else if (type === 'sentenceBuild') {
      q.push({
        words: ["The", "car", "was", "washed", "by", "him"],
        correctAnswer: "The car was washed by him",
        hint: ""
      });
    } else if (type === 'transformation') {
      q.push({
        original: `[${titleBase}] They built the house.`,
        prompt: "The house",
        correctAnswer: "The house was built by them",
        hint: ""
      });
    } else if (type === 'review') {
      q.push({
        question: `[${titleBase}] Review ${i}?`,
        options: ["A", "B", "C", "D"],
        correctAnswer: "A",
        hint: ""
      });
    }
  }
  return q;
}

function generateLessonData(id, session, title, isReview = false) {
  const grammar = isReview ? null : {
    point: title,
    explanation: `<div class="eng-formula-box"><div class="eng-formula-title">${title}</div></div>`
  };

  const vocab = [];
  for (let i = 1; i <= 5; i++) {
    vocab.push({
      en: `word${i}`, pos: "n", ipa: "/wɜːd/", vi: `từ số ${i}`, example: `Example ${i}`
    });
  }

  const questions = {};
  if (!isReview) {
    questions.multipleChoice = generateQuestions('multipleChoice', 10, title);
    questions.fillBlank = generateQuestions('fillBlank', 8, title);
    questions.sentenceBuild = generateQuestions('sentenceBuild', 7, title);
    questions.transformation = generateQuestions('transformation', 5, title);
    questions.review = generateQuestions('review', 5, title);
  } else {
    questions.multipleChoice = generateQuestions('multipleChoice', 20, title);
    questions.fillBlank = generateQuestions('fillBlank', 18, title);
    questions.sentenceBuild = generateQuestions('sentenceBuild', 12, title);
  }

  const lessonData = {
    session,
    title,
    vocab,
    grammar,
    questions
  };

  return `  const lessonData = ${JSON.stringify(lessonData, null, 2)};`;
}

const lessons = [
  { id: 's16', session: 16, title: 'Bài 16: Câu bị động - Thì Hiện tại đơn & Quá khứ đơn', isReview: false },
  { id: 's17', session: 17, title: 'Bài 17: Câu bị động - Thì Hiện tại tiếp diễn & Quá khứ tiếp diễn', isReview: false },
  { id: 's18', session: 18, title: 'Bài 18: Câu bị động - Thì Hiện tại hoàn thành', isReview: false },
  { id: 's19', session: 19, title: 'Bài 19: Câu bị động - Động từ khuyết thiếu (Can, Must, Should, Will...)', isReview: false },
  { id: 's20', session: 20, title: 'Bài 20: Bài thi Tổng Ôn Cụm 4', isReview: true }
];

lessons.forEach(lesson => {
  const content = generateLessonData(lesson.id, lesson.session, lesson.title, lesson.isReview);
  fs.writeFileSync(path.join(__dirname, `${lesson.id}.js`), content, 'utf8');
  console.log(`Generated ${lesson.id}.js`);
});
