  const lessonData = {
    session: 14,
    title: "Bài 14: Câu điều kiện Loại 2",
    vocab: [
      { en: "imagine", pos: "v", ipa: "/ɪˈmædʒɪn/", vi: "tưởng tượng", example: "Imagine you won the lottery." },
      { en: "lottery", pos: "n", ipa: "/ˈlɒtəri/", vi: "xổ số", example: "If I won the lottery, I would buy a house." },
      { en: "billionaire", pos: "n", ipa: "/ˌbɪljəˈneər/", vi: "tỷ phú", example: "He wishes he were a billionaire." },
      { en: "travel", pos: "v", ipa: "/ˈtrævl/", vi: "du lịch", example: "I would travel around the world." },
      { en: "million", pos: "n", ipa: "/ˈmɪljən/", vi: "triệu", example: "A million dollars is a lot of money." }
    ],
    grammar: {
      point: "Câu điều kiện loại 2 (Conditional sentence type 2)",
      explanation: `
        <div class="eng-formula-box">
          <div class="eng-formula-title">Câu Điều Kiện Loại 2</div>
          Dùng để diễn tả một điều kiện KHÔNG có thật hoặc KHÔNG thể xảy ra ở hiện tại hoặc tương lai.<br/>
          <b>Cấu trúc:</b><br/>
          <span style="color:var(--eng-primary)">If + S + V(quá khứ đơn), S + would/could + V(nguyên thể)</span><br/>
          *Lưu ý: Động từ "to be" thường dùng là <b>were</b> cho tất cả các ngôi.<br/>
          <i>Ví dụ: If I <b>had</b> a million dollars, I <b>would buy</b> a big house.</i>
        </div>
        <div class="eng-formula-box">
          <div class="eng-formula-title">Dùng để đưa ra lời khuyên</div>
          <b>If I were you, I would...</b> (Nếu tôi là bạn, tôi sẽ...)<br/>
          <i>Ví dụ: <b>If I were you</b>, I <b>would see</b> a doctor.</i>
        </div>
      `,
      examples: [
        "If I <b>were</b> a bird, I <b>would fly</b>.",
        "If he <b>knew</b> her number, he <b>would call</b> her."
      ],
      commonMistake: {
        wrong: "If I am you, I would study harder.",
        right: "If I were you, I would study harder.",
        note: "Đã giả định trái hiện tại thì phải dùng 'were' (hoặc lùi thì về quá khứ)."
      },
      memoryTip: "If + Quá khứ, Would + V."
    },
    dialogue: {
      titleVi: "Tình huống: Mơ mộng trúng số",
      lines: [
        { speaker: "Linda", en: "What would you do if you won the lottery?", vi: "Bạn sẽ làm gì nếu bạn trúng xổ số?" },
        { speaker: "Peter", en: "If I won the lottery, I would travel around the world.", vi: "Nếu tôi trúng xổ số, tôi sẽ đi du lịch vòng quanh thế giới." },
        { speaker: "Linda", en: "If I were you, I would buy a big house first.", vi: "Nếu tôi là bạn, tôi sẽ mua một ngôi nhà lớn trước." },
        { speaker: "Peter", en: "That's a good idea too!", vi: "Đó cũng là một ý hay!" }
      ]
    },
    exercises: {
      multipleChoice: [
        { q: "If I ___ a million dollars, I would buy a yacht.", options: ["have", "had", "would have"], answer: "had" },
        { q: "If I ___ you, I wouldn't do that.", options: ["was", "were", "am"], answer: "were" },
        { q: "What ___ you do if you saw a ghost?", options: ["will", "do", "would"], answer: "would" },
        { q: "If she knew his address, she ___ him a letter.", options: ["will send", "would send", "sent"], answer: "would send" },
        { q: "He would buy a new car if he ___ enough money.", options: ["has", "had", "have"], answer: "had" },
        { q: "If I ___ wings, I would fly to you.", options: ["have", "had", "has"], answer: "had" },
        { q: "If it ___, I would stay at home. (but it's sunny now)", options: ["rained", "rains", "will rain"], answer: "rained" },
        { q: "I would help you if I ___ the answer.", options: ["know", "knew", "known"], answer: "knew" },
        { q: "If he ___ taller, he could play basketball well.", options: ["is", "was", "were"], answer: "were" },
        { q: "We ___ go to the beach if we had free time.", options: ["will", "would", "can"], answer: "would" }
      ],
      fillBlank: [
        { sentence: "If I ___ (be) you, I would apologize.", answer: "were" },
        { sentence: "If she ___ (study) harder, she would pass the exam.", answer: "studied" },
        { sentence: "I would travel the world if I ___ (have) a lot of money.", answer: "had" },
        { sentence: "If we ___ (know) his number, we would call him.", answer: "knew" },
        { sentence: "If I ___ (win) the lottery, I would quit my job.", answer: "won" },
        { sentence: "He ___ (be) healthier if he didn't smoke.", answer: "would be" },
        { sentence: "If you ___ (go) to bed earlier, you wouldn't be so tired.", answer: "went" },
        { sentence: "I ___ (buy) that dress if it were cheaper.", answer: "would buy" }
      ],
      transformation: [
        { sentence: "I don't have enough money, so I can't buy a car. (If)", answer: "If I had enough money, I could buy a car." },
        { sentence: "She doesn't know the answer, so she doesn't tell you. (If)", answer: "If she knew the answer, she would tell you." },
        { sentence: "I am not you, but my advice is to stop smoking. (were)", answer: "If I were you, I would stop smoking." },
        { sentence: "He is lazy, so he fails the exam. (If)", answer: "If he weren't lazy, he wouldn't fail the exam." },
        { sentence: "We don't have a map, so we get lost. (If)", answer: "If we had a map, we wouldn't get lost." }
      ],
      review: [
        { sentence: "If it rains tomorrow, we ___ (cancel) the picnic.", answer: "will cancel" },
        { sentence: "You ___ (should/mustn't) eat more vegetables.", answer: "should" },
        { sentence: "I went to school ___ it was raining.", answer: "although" },
        { sentence: "He is the ___ (smart) boy in the class.", answer: "smartest" },
        { sentence: "We ___ (play) football at 5 PM yesterday.", answer: "were playing" }
      ],
      sentenceBuild: [
        { words: ["If", "I", "had", "money", ",", "I", "would", "travel", "."], answer: "If I had money , I would travel ." },
        { words: ["If", "I", "were", "you", ",", "I", "would", "study", "harder", "."], answer: "If I were you , I would study harder ." },
        { words: ["What", "would", "you", "do", "if", "you", "were", "a", "bird", "?"], answer: "What would you do if you were a bird ?" },
        { words: ["If", "she", "knew", "the", "truth", ",", "she", "would", "be", "sad", "."], answer: "If she knew the truth , she would be sad ." },
        { words: ["I", "would", "buy", "a", "car", "if", "I", "were", "rich", "."], answer: "I would buy a car if I were rich ." },
        { words: ["If", "he", "didn't", "smoke", ",", "he", "would", "be", "healthier", "."], answer: "If he didn't smoke , he would be healthier ." },
        { words: ["We", "would", "go", "camping", "if", "it", "weren't", "raining", "."], answer: "We would go camping if it weren't raining ." }
      ]
    }
  };