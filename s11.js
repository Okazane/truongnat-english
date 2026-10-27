  const lessonData = {
    session: 11,
    title: "Bài 11: Câu đơn, câu ghép, câu phức",
    vocab: [
      { en: "although", pos: "conj", ipa: "/ɔːlˈðoʊ/", vi: "mặc dù", example: "Although it rained, we played football." },
      { en: "because", pos: "conj", ipa: "/bɪˈkɒz/", vi: "bởi vì", example: "I am happy because I passed the test." },
      { en: "but", pos: "conj", ipa: "/bʌt/", vi: "nhưng", example: "I like cats, but I don't like dogs." },
      { en: "so", pos: "conj", ipa: "/soʊ/", vi: "vì vậy", example: "It was late, so I went to bed." },
      { en: "and", pos: "conj", ipa: "/ænd/", vi: "và", example: "I bought apples and oranges." },
      { en: "or", pos: "conj", ipa: "/ɔːr/", vi: "hoặc", example: "You can have tea or coffee." }
    ],
    grammar: {
      point: "Câu đơn, câu ghép, câu phức",
      explanation: `
        <div class="eng-formula-box">
          <div class="eng-formula-title">1. Câu đơn (Simple Sentences)</div>
          Là câu chỉ có MỘT mệnh đề độc lập (1 chủ ngữ + 1 vị ngữ).<br/>
          <i>Ví dụ: I like playing football.</i>
        </div>
        <div class="eng-formula-box">
          <div class="eng-formula-title">2. Câu ghép (Compound Sentences)</div>
          Được nối với nhau bởi liên từ đẳng lập (and, or, but, so...).<br/>
          <i>Ví dụ: I like playing football, <b>but</b> my brother prefers reading.</i>
        </div>
        <div class="eng-formula-box">
          <div class="eng-formula-title">3. Câu phức (Complex Sentences)</div>
          Gồm một mệnh đề chính và một hay nhiều mệnh đề phụ, nối bằng liên từ phụ thuộc (because, although, if, when...).<br/>
          <i>Ví dụ: <b>Although</b> it rained heavily, they still went out.</i>
        </div>
      `,
      examples: [
        "I was tired, <b>so</b> I went to bed early.",
        "She didn't go to school <b>because</b> she was ill."
      ],
      commonMistake: {
        wrong: "Although it rained, but we went out.",
        right: "Although it rained, we went out.",
        note: "Đã dùng 'Although' thì KHÔNG dùng 'but', đã dùng 'Because' thì KHÔNG dùng 'so'."
      },
      memoryTip: "FANBOYS cho câu ghép: For, And, Nor, But, Or, Yet, So."
    },
    dialogue: {
      titleVi: "Tình huống: Chia sẻ lý do",
      lines: [
        { speaker: "Nam", en: "Why were you late this morning?", vi: "Sao sáng nay cậu đến muộn thế?" },
        { speaker: "Mai", en: "Because my alarm didn't go off.", vi: "Bởi vì đồng hồ báo thức của tớ không kêu." },
        { speaker: "Nam", en: "Oh. Although it was raining heavily, I arrived on time.", vi: "Ồ. Mặc dù trời mưa to, tớ vẫn đến đúng giờ." },
        { speaker: "Mai", en: "I missed the bus, so I had to walk.", vi: "Tớ lỡ xe buýt, nên tớ phải đi bộ." }
      ]
    },
    exercises: {
      multipleChoice: [
        { q: "I wanted to buy a new car, ___ I didn't have enough money.", options: ["and", "but", "so"], answer: "but" },
        { q: "___ it was raining, we still played football.", options: ["Because", "Although", "So"], answer: "Although" },
        { q: "He studied hard, ___ he passed the exam easily.", options: ["so", "but", "although"], answer: "so" },
        { q: "Would you like tea ___ coffee?", options: ["and", "or", "but"], answer: "or" },
        { q: "She didn't go to work ___ she was sick.", options: ["because", "although", "but"], answer: "because" },
        { q: "It is a beautiful ___ expensive dress.", options: ["and", "but", "or"], answer: "but" },
        { q: "___ he is very rich, he is not happy.", options: ["Because", "Although", "So"], answer: "Although" },
        { q: "I like apples, ___ my sister likes oranges.", options: ["and", "so", "because"], answer: "and" },
        { q: "He went to bed early ___ he was tired.", options: ["because", "although", "so"], answer: "because" },
        { q: "We can go to the beach ___ we can stay at home.", options: ["or", "and", "but"], answer: "or" }
      ],
      fillBlank: [
        { sentence: "I missed the bus, ___ I was late for school.", answer: "so" },
        { sentence: "___ it was cold, he didn't wear a coat.", answer: "Although" },
        { sentence: "She is crying ___ she lost her dog.", answer: "because" },
        { sentence: "You can have a burger ___ a pizza.", answer: "or" },
        { sentence: "I love reading books, ___ I hate watching TV.", answer: "but" },
        { sentence: "He bought a pen ___ a notebook.", answer: "and" },
        { sentence: "___ I was tired, I finished my homework.", answer: "Although" },
        { sentence: "The test was hard, ___ I tried my best.", answer: "but" }
      ],
      transformation: [
        { sentence: "Because it rained heavily, we stayed at home. (so)", answer: "It rained heavily, so we stayed at home." },
        { sentence: "He was ill, so he didn't go to school. (Because)", answer: "Because he was ill, he didn't go to school." },
        { sentence: "Although she was tired, she kept working. (but)", answer: "She was tired, but she kept working." },
        { sentence: "I didn't have money, so I didn't buy it. (Because)", answer: "Because I didn't have money, I didn't buy it." },
        { sentence: "It was cold. He went out without a coat. (Although)", answer: "Although it was cold, he went out without a coat." }
      ],
      review: [
        { sentence: "I ___ (know) him for 5 years.", answer: "have known" },
        { sentence: "She is the ___ (tall) girl in the class.", answer: "tallest" },
        { sentence: "He enjoys ___ (play) tennis.", answer: "playing" },
        { sentence: "If I have money, I ___ (buy) a car.", answer: "will buy" },
        { sentence: "Let's go out, ___ we?", answer: "shall" }
      ],
      sentenceBuild: [
        { words: ["I", "was", "tired", ",", "so", "I", "went", "to", "sleep", "."], answer: "I was tired , so I went to sleep ." },
        { words: ["Although", "it", "rained", ",", "we", "played", "football", "."], answer: "Although it rained , we played football ." },
        { words: ["She", "cried", "because", "she", "lost", "her", "money", "."], answer: "She cried because she lost her money ." },
        { words: ["I", "like", "dogs", ",", "but", "I", "don't", "like", "cats", "."], answer: "I like dogs , but I don't like cats ." },
        { words: ["You", "can", "drink", "tea", "or", "coffee", "."], answer: "You can drink tea or coffee ." },
        { words: ["Because", "it", "was", "late", ",", "I", "ran", "home", "."], answer: "Because it was late , I ran home ." },
        { words: ["He", "is", "poor", ",", "but", "he", "is", "happy", "."], answer: "He is poor , but he is happy ." }
      ]
    }
  };