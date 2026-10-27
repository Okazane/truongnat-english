const fs = require('fs');

const dataS1 = `
      transformation: [
        { sentence: "Does she enjoy watching TV? (like)", hint: "Sử dụng động từ like", answer: "Does she like watching TV?" },
        { sentence: "I don't have an origami class today. (am not)", hint: "Hiện tại tiếp diễn", answer: "I am not having an origami class today." },
        { sentence: "He is a good football player. (plays)", hint: "Động từ thường play", answer: "He plays football well." },
        { sentence: "What is your father's job? (do)", hint: "Sử dụng do", answer: "What does your father do?" },
        { sentence: "Look! A dog is chasing the cat. (running)", hint: "Sử dụng run after", answer: "Look! A dog is running after the cat." }
      ],
      review: [
        { sentence: "What ___ (be) your favorite subject in Grade 7?", answer: "was", hint: "Quá khứ to be" },
        { sentence: "I ___ (go) to the zoo last weekend.", answer: "went", hint: "Quá khứ đơn của go" },
        { sentence: "They ___ (not / finish) their project yesterday.", answer: "did not finish", hint: "Phủ định quá khứ đơn" },
        { sentence: "She ___ (have) a great time at the camp last summer.", answer: "had", hint: "Quá khứ đơn của have" },
        { sentence: "___ you ___ (visit) your grandparents last Tet?", answer: "Did visit", hint: "Câu hỏi quá khứ đơn" }
      ],
`;

const dataS2 = `
      transformation: [
        { sentence: "During my dinner, the phone rang. (While)", hint: "Sử dụng While + quá khứ tiếp diễn", answer: "While I was having dinner, the phone rang." },
        { sentence: "It started to rain in the middle of our walk. (when)", hint: "Sử dụng Quá khứ tiếp diễn + when", answer: "We were walking when it started to rain." },
        { sentence: "She was reading and he was watching TV at the same time. (while)", hint: "Sử dụng while nối 2 mệnh đề", answer: "She was reading while he was watching TV." },
        { sentence: "I didn't go to school yesterday because of illness. (sick)", hint: "Quá khứ đơn của be", answer: "I didn't go to school yesterday because I was sick." },
        { sentence: "What were you doing at 8 PM yesterday? (happen)", hint: "Sử dụng What happened", answer: "What happened at 8 PM yesterday?" }
      ],
      review: [
        { sentence: "I ___ (study) English every day.", answer: "study", hint: "Hiện tại đơn" },
        { sentence: "Look! The baby ___ (sleep) peacefully.", answer: "is sleeping", hint: "Hiện tại tiếp diễn" },
        { sentence: "She ___ (not / like) playing sports.", answer: "does not like", hint: "Phủ định hiện tại đơn" },
        { sentence: "___ they ___ (watch) a movie right now?", answer: "Are watching", hint: "Câu hỏi hiện tại tiếp diễn" },
        { sentence: "Water ___ (boil) at 100 degrees Celsius.", answer: "boils", hint: "Sự thật hiển nhiên" }
      ],
`;

const dataS3 = `
      transformation: [
        { sentence: "I plan to visit Hue next month. (going)", hint: "Sử dụng be going to", answer: "I am going to visit Hue next month." },
        { sentence: "Perhaps it will rain tomorrow. (think)", hint: "Sử dụng I think", answer: "I think it will rain tomorrow." },
        { sentence: "We have decided to buy a new computer. (going)", hint: "Quyết định có sẵn", answer: "We are going to buy a new computer." },
        { sentence: "I promise not to be late again. (won't)", hint: "Sử dụng will not", answer: "I won't be late again." },
        { sentence: "Look at those black clouds! A storm is coming. (going)", hint: "Dự đoán có căn cứ", answer: "Look at those black clouds! It is going to storm." }
      ],
      review: [
        { sentence: "While I ___ (walk) home, I saw an accident.", answer: "was walking", hint: "Quá khứ tiếp diễn" },
        { sentence: "The electricity went off while she ___ (cook).", answer: "was cooking", hint: "Quá khứ tiếp diễn" },
        { sentence: "He ___ (break) his leg while he was playing soccer.", answer: "broke", hint: "Quá khứ đơn xen vào" },
        { sentence: "What ___ you ___ (do) when the earthquake happened?", answer: "were doing", hint: "Câu hỏi quá khứ tiếp diễn" },
        { sentence: "They ___ (not / hear) the bell because they were sleeping.", answer: "did not hear", hint: "Phủ định quá khứ đơn" }
      ],
`;

const dataS4 = `
      transformation: [
        { sentence: "The last time I saw him was in 2020. (since)", hint: "Hiện tại hoàn thành với since", answer: "I have not seen him since 2020." },
        { sentence: "She started working here three years ago. (for)", hint: "Hiện tại hoàn thành với for", answer: "She has worked here for three years." },
        { sentence: "This is the first time I have eaten Sushi. (never)", hint: "Sử dụng have never eaten", answer: "I have never eaten Sushi before." },
        { sentence: "I haven't finished the book yet. (still)", hint: "Sử dụng still", answer: "I still have not finished the book." },
        { sentence: "He bought that car 5 months ago. (had)", hint: "Hiện tại hoàn thành của have", answer: "He has had that car for 5 months." }
      ],
      review: [
        { sentence: "Look out! The cup ___ (fall) off the table.", answer: "is going to fall", hint: "Dự đoán có căn cứ" },
        { sentence: "I promise I ___ (help) you with your homework.", answer: "will help", hint: "Lời hứa (will)" },
        { sentence: "They ___ (have) a party next Saturday. They already invited guests.", answer: "are going to have", hint: "Kế hoạch đã định" },
        { sentence: "I think robots ___ (replace) humans in dangerous jobs.", answer: "will replace", hint: "Dự đoán cá nhân" },
        { sentence: "Oh, it's hot in here. I ___ (open) the window.", answer: "will open", hint: "Quyết định ngay lúc nói" }
      ],
`;

const files = [
  { f: 'english-g8-s1.html', data: dataS1 },
  { f: 'english-g8-s2.html', data: dataS2 },
  { f: 'english-g8-s3.html', data: dataS3 },
  { f: 'english-g8-s4.html', data: dataS4 }
];

files.forEach(item => {
  let content = fs.readFileSync(item.f, 'utf8');
  if (!content.includes('transformation: [')) {
    content = content.replace(/sentenceBuild: \[/, item.data + '      sentenceBuild: [');
    fs.writeFileSync(item.f, content);
    console.log('Added data to', item.f);
  } else {
    console.log('Data already present in', item.f);
  }
});
