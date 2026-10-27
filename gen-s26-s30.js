const fs = require('fs');
const path = require('path');

const generateQuestions = (type, count, topicPrefix) => {
    const questions = [];
    for (let i = 1; i <= count; i++) {
        switch (type) {
            case 'multipleChoice':
                questions.push({
                    type: 'multipleChoice',
                    question: `${topicPrefix} - MC ${i}`,
                    options: ['A', 'B', 'C', 'D'],
                    correctAnswer: 'A',
                    hint: ''
                });
                break;
            case 'fillBlank':
                questions.push({
                    type: 'fillBlank',
                    question: `${topicPrefix} - Fill in the blank ${i}: _____`,
                    correctAnswer: 'answer',
                    hint: ''
                });
                break;
            case 'sentenceBuild':
                questions.push({
                    type: 'sentenceBuild',
                    words: ['This', 'is', 'a', 'sentence', i.toString()],
                    correctAnswer: `This is a sentence ${i}`,
                    hint: ''
                });
                break;
            case 'transformation':
                questions.push({
                    type: 'transformation',
                    question: `${topicPrefix} - Rewrite this sentence ${i}`,
                    correctAnswer: 'Rewritten sentence',
                    hint: ''
                });
                break;
            case 'review':
                questions.push({
                    type: 'review',
                    question: `Review question ${i} for ${topicPrefix}`,
                    correctAnswer: 'answer',
                    hint: ''
                });
                break;
        }
    }
    return questions;
};

const createLessonData = (id, title, grammar, questionsConfig) => {
    let questions = [];
    for (const [type, count] of Object.entries(questionsConfig)) {
        questions = questions.concat(generateQuestions(type, count, title));
    }
    
    return {
        id,
        title,
        grammar,
        questions
    };
};

const lessonsConfig = [
    {
        id: 's26',
        title: 'Mệnh đề quan hệ (Relative Clauses) - Who, Whom, Which, That',
        grammar: 'Grammar notes for S26',
        questionsConfig: {
            multipleChoice: 10,
            fillBlank: 8,
            sentenceBuild: 7,
            transformation: 5,
            review: 5
        }
    },
    {
        id: 's27',
        title: 'Mệnh đề quan hệ - Whose, Where, When',
        grammar: 'Grammar notes for S27',
        questionsConfig: {
            multipleChoice: 10,
            fillBlank: 8,
            sentenceBuild: 7,
            transformation: 5,
            review: 5
        }
    },
    {
        id: 's28',
        title: 'Cấu trúc It is/was + Adj + (for sb) + to V & Câu chẻ (Cleft sentences)',
        grammar: 'Grammar notes for S28',
        questionsConfig: {
            multipleChoice: 10,
            fillBlank: 8,
            sentenceBuild: 7,
            transformation: 5,
            review: 5
        }
    },
    {
        id: 's29',
        title: 'Cấu trúc Used to / Be used to / Get used to',
        grammar: 'Grammar notes for S29',
        questionsConfig: {
            multipleChoice: 10,
            fillBlank: 8,
            sentenceBuild: 7,
            transformation: 5,
            review: 5
        }
    },
    {
        id: 's30',
        title: 'Bài thi Tốt nghiệp Toàn khóa (Final Test for lessons S1-S29)',
        grammar: null,
        questionsConfig: {
            multipleChoice: 20,
            fillBlank: 18,
            sentenceBuild: 12
        }
    }
];

const targetDir = __dirname;

lessonsConfig.forEach(config => {
    const data = createLessonData(config.id, config.title, config.grammar, config.questionsConfig);
    const content = `const lessonData = ${JSON.stringify(data, null, 4)};\n\nif (typeof module !== 'undefined' && module.exports) {\n    module.exports = lessonData;\n}`;
    const filePath = path.join(targetDir, `${config.id}.js`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Generated ${filePath} with ${data.questions.length} questions.`);
});
