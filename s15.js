  const lessonData = {
    session: 15,
    title: "Bài 15: Bài thi Tổng Ôn Cụm 3",
    vocab: [
      { en: "Review", pos: "n", ipa: "/rɪˈvjuː/", vi: "Ôn tập", example: "Let's review the lessons." }
    ],
    grammar: null,
    dialogue: {
      titleVi: "Tình huống: Sẵn sàng cho bài kiểm tra",
      lines: [
        { speaker: "Teacher", en: "Are you ready for the test?", vi: "Các em đã sẵn sàng cho bài kiểm tra chưa?" },
        { speaker: "Student", en: "Yes, we are. We have reviewed all the grammar points.", vi: "Dạ rồi. Chúng em đã ôn lại tất cả các chủ điểm ngữ pháp." }
      ]
    },
    exercises: {
      multipleChoice: [
        { q: "I wanted to go out, ___ it was raining.", options: ["and", "but", "so"], answer: "but" },
        { q: "___ he was tired, he finished his work.", options: ["Although", "Because", "So"], answer: "Although" },
        { q: "You ___ stop when the traffic light is red.", options: ["must", "should", "don't have to"], answer: "must" },
        { q: "You ___ wear a uniform if it's Sunday.", options: ["mustn't", "don't have to", "shouldn't"], answer: "don't have to" },
        { q: "If it ___, I will stay at home.", options: ["rains", "will rain", "rained"], answer: "rains" },
        { q: "I will call you if I ___ time.", options: ["have", "had", "will have"], answer: "have" },
        { q: "If I ___ you, I would go to the doctor.", options: ["were", "was", "am"], answer: "were" },
        { q: "If I had a million dollars, I ___ travel the world.", options: ["will", "would", "can"], answer: "would" },
        { q: "We missed the train, ___ we were late for the meeting.", options: ["so", "because", "although"], answer: "so" },
        { q: "She stayed at home ___ she was ill.", options: ["because", "although", "but"], answer: "because" },
        { q: "You ___ smoke here. It's against the law.", options: ["mustn't", "don't have to", "should"], answer: "mustn't" },
        { q: "I think you ___ talk to your parents about it.", options: ["should", "mustn't", "have to"], answer: "should" },
        { q: "___ you study hard, you will pass the exam.", options: ["If", "Unless", "Because"], answer: "If" },
        { q: "___ you hurry, you will miss the bus.", options: ["Unless", "If", "Because"], answer: "Unless" },
        { q: "What ___ you do if you were a billionaire?", options: ["will", "would", "do"], answer: "would" },
        { q: "If he knew her address, he ___ her a gift.", options: ["would send", "will send", "sent"], answer: "would send" },
        { q: "I like coffee, ___ my brother prefers tea.", options: ["but", "so", "and"], answer: "but" },
        { q: "He is smart, ___ he is very lazy.", options: ["but", "so", "because"], answer: "but" },
        { q: "You ___ finish your homework before playing games.", options: ["should", "mustn't", "don't have to"], answer: "should" },
        { q: "If we ___ free time, we would visit you.", options: ["had", "have", "will have"], answer: "had" }
      ],
      fillBlank: [
        { sentence: "I went to bed early ___ I was tired.", answer: "because" },
        { sentence: "___ it was cold, we didn't turn on the heater.", answer: "Although" },
        { sentence: "You ___ (mustn't/don't have to) drive too fast.", answer: "mustn't" },
        { sentence: "Tomorrow is a holiday, so you ___ (don't have to/mustn't) work.", answer: "don't have to" },
        { sentence: "If she ___ (invite) me, I will come.", answer: "invites" },
        { sentence: "Unless you ___ (try), you will fail.", answer: "try" },
        { sentence: "If I ___ (be) you, I would buy that car.", answer: "were" },
        { sentence: "If I ___ (have) money, I would travel around the world.", answer: "had" },
        { sentence: "The book is interesting, ___ it is too long.", answer: "but" },
        { sentence: "He studied hard, ___ he got a good mark.", answer: "so" },
        { sentence: "You ___ (should/mustn't) eat a lot of vegetables.", answer: "should" },
        { sentence: "Students ___ (have to/mustn't) wear uniforms at school.", answer: "have to" },
        { sentence: "If it ___ (rain) tomorrow, we will stay home.", answer: "rains" },
        { sentence: "What will happen if you ___ (lose) your keys?", answer: "lose" },
        { sentence: "If she ___ (know) his number, she would call him.", answer: "knew" },
        { sentence: "If they ___ (have) time, they would go to the gym.", answer: "had" },
        { sentence: "We can go by bus ___ we can take a taxi.", answer: "or" },
        { sentence: "I am hungry ___ I haven't eaten anything.", answer: "because" }
      ],
      sentenceBuild: [
        { words: ["I", "was", "tired", ",", "so", "I", "went", "to", "bed", "."], answer: "I was tired , so I went to bed ." },
        { words: ["Although", "it", "was", "cold", ",", "he", "went", "swimming", "."], answer: "Although it was cold , he went swimming ." },
        { words: ["You", "should", "listen", "to", "your", "teacher", "."], answer: "You should listen to your teacher ." },
        { words: ["We", "have", "to", "finish", "the", "project", "today", "."], answer: "We have to finish the project today ." },
        { words: ["If", "it", "rains", ",", "we", "will", "stay", "at", "home", "."], answer: "If it rains , we will stay at home ." },
        { words: ["Unless", "you", "study", ",", "you", "will", "fail", "the", "exam", "."], answer: "Unless you study , you will fail the exam ." },
        { words: ["If", "I", "were", "you", ",", "I", "would", "buy", "it", "."], answer: "If I were you , I would buy it ." },
        { words: ["What", "would", "you", "do", "if", "you", "were", "rich", "?"], answer: "What would you do if you were rich ?" },
        { words: ["He", "is", "poor", ",", "but", "he", "is", "happy", "."], answer: "He is poor , but he is happy ." },
        { words: ["You", "mustn't", "smoke", "in", "the", "hospital", "."], answer: "You mustn't smoke in the hospital ." },
        { words: ["If", "she", "comes", ",", "I", "will", "be", "happy", "."], answer: "If she comes , I will be happy ." },
        { words: ["If", "I", "had", "time", ",", "I", "would", "read", "books", "."], answer: "If I had time , I would read books ." }
      ]
    }
  };