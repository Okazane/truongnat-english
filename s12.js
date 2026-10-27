  const lessonData = {
    session: 12,
    title: "Bài 12: Động từ khuyết thiếu cơ bản",
    vocab: [
      { en: "should", pos: "modal", ipa: "/ʃʊd/", vi: "nên", example: "You should see a doctor." },
      { en: "shouldn't", pos: "modal", ipa: "/ˈʃʊdnt/", vi: "không nên", example: "You shouldn't eat too much sugar." },
      { en: "have to", pos: "modal", ipa: "/hæv tuː/", vi: "phải (khách quan)", example: "I have to wear a uniform at school." },
      { en: "must", pos: "modal", ipa: "/mʌst/", vi: "phải (chủ quan)", example: "I must finish this today." },
      { en: "don't have to", pos: "modal", ipa: "/doʊnt hæv tuː/", vi: "không cần phải", example: "You don't have to come if you're busy." },
      { en: "mustn't", pos: "modal", ipa: "/ˈmʌsnt/", vi: "cấm", example: "You mustn't smoke here." }
    ],
    grammar: {
      point: "Động từ khuyết thiếu: Should, Must, Have to",
      explanation: `
        <div class="eng-formula-box">
          <div class="eng-formula-title">1. Should / Shouldn't (Nên / Không nên)</div>
          Dùng để đưa ra lời khuyên.<br/>
          <i>Ví dụ: You <b>should</b> drink more water.</i>
        </div>
        <div class="eng-formula-box">
          <div class="eng-formula-title">2. Must / Mustn't (Phải / Cấm)</div>
          <b>Must</b>: Sự bắt buộc (thường do cảm giác chủ quan của người nói).<br/>
          <b>Mustn't</b>: Sự cấm đoán.<br/>
          <i>Ví dụ: You <b>mustn't</b> park here. (Cấm đỗ xe ở đây)</i>
        </div>
        <div class="eng-formula-box">
          <div class="eng-formula-title">3. Have to / Don't have to</div>
          <b>Have to</b>: Sự bắt buộc (do nội quy, luật lệ).<br/>
          <b>Don't have to</b>: Không cần thiết (làm cũng được, không làm cũng được).<br/>
          <i>Ví dụ: Today is Sunday. I <b>don't have to</b> go to school.</i>
        </div>
      `,
      examples: [
        "You <b>shouldn't</b> stay up too late.",
        "We <b>must</b> obey the traffic rules."
      ],
      commonMistake: {
        wrong: "You mustn't go to work on Sunday because it's a day off.",
        right: "You don't have to go to work on Sunday because it's a day off.",
        note: "Mustn't là CẤM ĐOÁN, Don't have to là KHÔNG CẦN PHẢI."
      },
      memoryTip: "Mustn't = Cấm; Don't have to = Không cần (nhưng vẫn có thể làm)."
    },
    dialogue: {
      titleVi: "Tình huống: Lời khuyên cho kỳ thi",
      lines: [
        { speaker: "Tom", en: "I'm so tired. I must study all night.", vi: "Tớ mệt quá. Tớ phải học cả đêm nay." },
        { speaker: "Anna", en: "You shouldn't stay up late. It's bad for your health.", vi: "Cậu không nên thức khuya. Rất hại sức khỏe đấy." },
        { speaker: "Tom", en: "But I have to pass the exam tomorrow.", vi: "Nhưng tớ phải qua bài kiểm tra ngày mai." },
        { speaker: "Anna", en: "You don't have to worry too much. Just sleep now.", vi: "Cậu không cần phải quá lo. Ngủ đi đã." }
      ]
    },
    exercises: {
      multipleChoice: [
        { q: "You ___ brush your teeth twice a day.", options: ["should", "mustn't", "don't have to"], answer: "should" },
        { q: "Students ___ wear a uniform at this school. It's the rule.", options: ["have to", "should", "mustn't"], answer: "have to" },
        { q: "You ___ smoke in the hospital.", options: ["mustn't", "don't have to", "shouldn't"], answer: "mustn't" },
        { q: "Tomorrow is a holiday, so we ___ go to school.", options: ["don't have to", "mustn't", "shouldn't"], answer: "don't have to" },
        { q: "I ___ finish this report today. My boss needs it.", options: ["must", "should", "don't have to"], answer: "must" },
        { q: "You ___ eat too much junk food.", options: ["shouldn't", "don't have to", "must"], answer: "shouldn't" },
        { q: "He ___ work on weekends if he doesn't want to.", options: ["doesn't have to", "mustn't", "shouldn't"], answer: "doesn't have to" },
        { q: "We ___ cross the street when the light is red.", options: ["mustn't", "don't have to", "should"], answer: "mustn't" },
        { q: "You ___ listen to your teacher.", options: ["should", "mustn't", "don't have to"], answer: "should" },
        { q: "I feel sick. I think I ___ see a doctor.", options: ["should", "mustn't", "don't have to"], answer: "should" }
      ],
      fillBlank: [
        { sentence: "You ___ (should/mustn't) watch TV so close to the screen.", answer: "shouldn't" },
        { sentence: "We ___ (have to/mustn't) be quiet in the library.", answer: "have to" },
        { sentence: "You ___ (don't have to/mustn't) do the washing up. I already did it.", answer: "don't have to" },
        { sentence: "She ___ (should/mustn't) go to bed earlier.", answer: "should" },
        { sentence: "You ___ (mustn't/don't have to) tell anyone this secret.", answer: "mustn't" },
        { sentence: "I ___ (have to/shouldn't) get a visa to travel to the US.", answer: "have to" },
        { sentence: "He ___ (doesn't have to/mustn't) wear a suit. It's a casual party.", answer: "doesn't have to" },
        { sentence: "Children ___ (mustn't/don't have to) play with fire.", answer: "mustn't" }
      ],
      transformation: [
        { sentence: "It is a good idea for you to exercise daily. (should)", answer: "You should exercise daily." },
        { sentence: "It is necessary for him to leave now. (has)", answer: "He has to leave now." },
        { sentence: "You are not allowed to park here. (mustn't)", answer: "You mustn't park here." },
        { sentence: "It is not necessary for her to buy a ticket. (doesn't)", answer: "She doesn't have to buy a ticket." },
        { sentence: "My advice is that you don't eat too much candy. (shouldn't)", answer: "You shouldn't eat too much candy." }
      ],
      review: [
        { sentence: "I ___ (read) a book when the lights went out.", answer: "was reading" },
        { sentence: "He hasn't finished his homework ___.", answer: "yet" },
        { sentence: "Let's go to the cinema, ___ we?", answer: "shall" },
        { sentence: "She prefers ___ (walk) to riding a bike.", answer: "walking" },
        { sentence: "I was tired, ___ I went to bed.", answer: "so" }
      ],
      sentenceBuild: [
        { words: ["You", "should", "drink", "plenty", "of", "water", "."], answer: "You should drink plenty of water ." },
        { words: ["We", "have", "to", "wear", "a", "uniform", "to", "school", "."], answer: "We have to wear a uniform to school ." },
        { words: ["You", "mustn't", "smoke", "in", "this", "room", "."], answer: "You mustn't smoke in this room ." },
        { words: ["She", "doesn't", "have", "to", "cook", "tonight", "."], answer: "She doesn't have to cook tonight ." },
        { words: ["He", "shouldn't", "play", "video", "games", "all", "day", "."], answer: "He shouldn't play video games all day ." },
        { words: ["I", "must", "finish", "my", "homework", "now", "."], answer: "I must finish my homework now ." },
        { words: ["They", "don't", "have", "to", "come", "if", "they", "are", "busy", "."], answer: "They don't have to come if they are busy ." }
      ]
    }
  };