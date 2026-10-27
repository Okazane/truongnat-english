  const lessonData = {
    session: 13,
    title: "Bài 13: Câu điều kiện Loại 1",
    vocab: [
      { en: "if", pos: "conj", ipa: "/ɪf/", vi: "nếu", example: "If it rains, we will stay at home." },
      { en: "unless", pos: "conj", ipa: "/ənˈles/", vi: "trừ khi (bằng If...not)", example: "Unless you study, you will fail." },
      { en: "happen", pos: "v", ipa: "/ˈhæpən/", vi: "xảy ra", example: "What will happen if we are late?" },
      { en: "promise", pos: "v", ipa: "/ˈprɒmɪs/", vi: "hứa", example: "I promise I will help you." },
      { en: "pass", pos: "v", ipa: "/pɑːs/", vi: "vượt qua", example: "If you study hard, you will pass the exam." }
    ],
    grammar: {
      point: "Câu điều kiện loại 1 (Conditional sentence type 1)",
      explanation: `
        <div class="eng-formula-box">
          <div class="eng-formula-title">Câu Điều Kiện Loại 1</div>
          Dùng để diễn tả một điều kiện có thể xảy ra ở hiện tại hoặc tương lai.<br/>
          <b>Cấu trúc:</b><br/>
          <span style="color:var(--eng-primary)">If + S + V(hiện tại đơn), S + will/can/should + V(nguyên thể)</span><br/>
          <i>Ví dụ: If it <b>rains</b> tomorrow, I <b>will stay</b> at home.</i>
        </div>
        <div class="eng-formula-box">
          <div class="eng-formula-title">Unless (Trừ khi)</div>
          <b>Unless = If ... not</b><br/>
          <i>Ví dụ: Unless you <b>hurry</b>, you will miss the bus.<br/>
          (= If you <b>don't hurry</b>, you will miss the bus.)</i>
        </div>
      `,
      examples: [
        "If she <b>invites</b> me, I <b>will go</b> to the party.",
        "You <b>will fail</b> the test unless you <b>study</b> harder."
      ],
      commonMistake: {
        wrong: "If it will rain, I will stay at home.",
        right: "If it rains, I will stay at home.",
        note: "Mệnh đề 'If' dùng thì Hiện tại đơn, mệnh đề chính dùng Tương lai đơn (will)."
      },
      memoryTip: "If + Hiện tại, Will + V."
    },
    dialogue: {
      titleVi: "Tình huống: Kế hoạch cuối tuần",
      lines: [
        { speaker: "Mary", en: "What will we do if the weather is nice tomorrow?", vi: "Chúng ta sẽ làm gì nếu ngày mai thời tiết đẹp?" },
        { speaker: "John", en: "If it is sunny, we will go for a picnic.", vi: "Nếu trời nắng, chúng ta sẽ đi dã ngoại." },
        { speaker: "Mary", en: "And what if it rains?", vi: "Và nếu trời mưa thì sao?" },
        { speaker: "John", en: "If it rains, we will watch a movie at home.", vi: "Nếu trời mưa, chúng ta sẽ xem phim ở nhà." }
      ]
    },
    exercises: {
      multipleChoice: [
        { q: "If it ___, we will not go out.", options: ["rains", "will rain", "rain"], answer: "rains" },
        { q: "If you ___ hard, you will pass the exam.", options: ["study", "will study", "studied"], answer: "study" },
        { q: "I will call you if I ___ any news.", options: ["have", "will have", "had"], answer: "have" },
        { q: "___ you hurry, you will miss the train.", options: ["If", "Unless", "Because"], answer: "Unless" },
        { q: "If she ___, she will be late.", options: ["doesn't hurry", "don't hurry", "won't hurry"], answer: "doesn't hurry" },
        { q: "We will go to the beach if the weather ___ nice.", options: ["is", "will be", "be"], answer: "is" },
        { q: "Unless he ___, he will fail the test.", options: ["tries", "doesn't try", "will try"], answer: "tries" },
        { q: "If they invite me, I ___ to their party.", options: ["will go", "go", "went"], answer: "will go" },
        { q: "What ___ you do if you lose your job?", options: ["will", "do", "are"], answer: "will" },
        { q: "If you mix blue and yellow, you ___ green.", options: ["get", "will get", "got"], answer: "get" }
      ],
      fillBlank: [
        { sentence: "If she ___ (call) me, I will tell her the truth.", answer: "calls" },
        { sentence: "If I ___ (find) your keys, I will give them to you.", answer: "find" },
        { sentence: "You will feel better if you ___ (take) this medicine.", answer: "take" },
        { sentence: "Unless you ___ (apologize), she won't forgive you.", answer: "apologize" },
        { sentence: "If it ___ (not rain) tomorrow, we will go camping.", answer: "doesn't rain" },
        { sentence: "He will miss the flight if he ___ (not leave) now.", answer: "doesn't leave" },
        { sentence: "What will happen if we ___ (be) late?", answer: "are" },
        { sentence: "If you don't eat, you ___ (be) hungry.", answer: "will be" }
      ],
      transformation: [
        { sentence: "If you don't hurry, you will be late. (Unless)", answer: "Unless you hurry, you will be late." },
        { sentence: "Unless it rains, we will go out. (If)", answer: "If it doesn't rain, we will go out." },
        { sentence: "Study hard, or you will fail. (If)", answer: "If you don't study hard, you will fail." },
        { sentence: "Don't touch that wire, or you will get a shock. (If)", answer: "If you touch that wire, you will get a shock." },
        { sentence: "Unless she studies, she will fail. (If)", answer: "If she doesn't study, she will fail." }
      ],
      review: [
        { sentence: "I don't have to ___ (wear) a uniform.", answer: "wear" },
        { sentence: "You ___ (mustn't/shouldn't) park here. It's against the law.", answer: "mustn't" },
        { sentence: "Although it was raining, we ___ (go) out.", answer: "went" },
        { sentence: "She loves ___ (read) comic books.", answer: "reading" },
        { sentence: "I ___ (buy) a new phone yesterday.", answer: "bought" }
      ],
      sentenceBuild: [
        { words: ["If", "it", "rains", ",", "I", "will", "stay", "home", "."], answer: "If it rains , I will stay home ." },
        { words: ["Unless", "you", "study", ",", "you", "will", "fail", "."], answer: "Unless you study , you will fail ." },
        { words: ["If", "she", "calls", ",", "I", "will", "tell", "her", "."], answer: "If she calls , I will tell her ." },
        { words: ["We", "will", "go", "out", "if", "the", "weather", "is", "fine", "."], answer: "We will go out if the weather is fine ." },
        { words: ["If", "he", "doesn't", "hurry", ",", "he", "will", "miss", "the", "bus", "."], answer: "If he doesn't hurry , he will miss the bus ." },
        { words: ["What", "will", "you", "do", "if", "you", "are", "late", "?"], answer: "What will you do if you are late ?" },
        { words: ["I", "will", "help", "you", "if", "you", "need", "me", "."], answer: "I will help you if you need me ." }
      ]
    }
  };