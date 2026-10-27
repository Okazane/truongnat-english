  const lessonData = {
    session: 9,
    title: "Bài 9: Từ để hỏi & Câu hỏi đuôi",
    vocab: [
      { en: "communicate", pos: "v", ipa: "/kəˈmjuːnɪkeɪt/", vi: "giao tiếp", example: "We communicate via email." },
      { en: "interact", pos: "v", ipa: "/ˌɪntərˈækt/", vi: "tương tác", example: "Students interact with the teacher." },
      { en: "socialize", pos: "v", ipa: "/ˈsəʊʃəlaɪz/", vi: "giao lưu", example: "She likes to socialize with friends." },
      { en: "participate", pos: "v", ipa: "/pɑːˈtɪsɪpeɪt/", vi: "tham gia", example: "He participates in many clubs." },
      { en: "gather", pos: "v", ipa: "/ˈɡæðər/", vi: "tụ tập, thu thập", example: "We gather at the park every Sunday." },
      { en: "festival", pos: "n", ipa: "/ˈfestɪvl/", vi: "lễ hội", example: "Tet is the most important festival." },
      { en: "ceremony", pos: "n", ipa: "/ˈserəməni/", vi: "buổi lễ", example: "The opening ceremony was grand." }
    ],
    grammar: {
      point: "TỪ ĐỂ HỎI (Wh-words) & CÂU HỎI ĐUÔI (Tag Questions)",
      explanation: `
        <div class="eng-formula-box">
          <div class="eng-formula-title">1. Từ để hỏi (Wh-words)</div>
          • <b>What</b> (cái gì), <b>Who</b> (ai), <b>Where</b> (ở đâu), <b>When</b> (khi nào), <b>Why</b> (tại sao), <b>How</b> (như thế nào).<br/>
          • <b>How much / How many:</b> Bao nhiêu (Không đếm được / Đếm được).<br/>
          • <b>How often:</b> Bao lâu 1 lần (Hỏi tần suất).<br/>
          • <b>How long:</b> Bao lâu (Hỏi khoảng thời gian).
        </div>
        <div class="eng-formula-box">
          <div class="eng-formula-title">2. Câu Hỏi Đuôi (Tag Questions)</div>
          Dùng để xác nhận lại thông tin. Có 2 phần: Mệnh đề chính , Phần đuôi?<br/>
          <b>Nguyên tắc cơ bản:</b><br/>
          • Mệnh đề chính Khẳng định (+) ➔ Đuôi Phủ định (-).<br/>
          • Mệnh đề chính Phủ định (-) ➔ Đuôi Khẳng định (+).<br/>
          • Chủ ngữ ở phần đuôi LUÔN LÀ ĐẠI TỪ (I, you, we, they, he, she, it).<br/>
          <i>Ví dụ: You are a student, <b>aren't you?</b> / She doesn't like dogs, <b>does she?</b></i>
        </div>
        <div class="eng-formula-box">
          <div class="eng-formula-title">3. Các trường hợp đặc biệt (Câu hỏi đuôi)</div>
          • I am... ➔ <b>aren't I?</b><br/>
          • Let's... ➔ <b>shall we?</b><br/>
          • Câu mệnh lệnh (Open the door) ➔ <b>will you?</b><br/>
          • Don't + V ➔ <b>will you?</b>
        </div>
      `,
      examples: [
        "<b>How often</b> do you visit your grandparents?",
        "It's a beautiful day, <b>isn't it?</b>"
      ],
      commonMistake: {
        wrong: "I am late, am not I?",
        right: "I am late, **aren't I**?",
        note: "Đuôi phủ định của 'I am' đặc biệt phải dùng 'aren't I?'."
      },
      memoryTip: "Đầu khẳng thì Đuôi phủ. Đầu phủ thì Đuôi khẳng. Rất logic!"
    },
    dialogue: {
      titleVi: "Tình huống: Giao tiếp tại lễ hội",
      lines: [
        { speaker: "John", en: "You are going to the festival, aren't you?", vi: "Bạn định đi dự lễ hội, đúng không?" },
        { speaker: "Hoa", en: "Yes, I am. It's the biggest festival here, isn't it?", vi: "Vâng, đúng vậy. Nó là lễ hội lớn nhất ở đây, phải không?" },
        { speaker: "John", en: "How often does it take place?", vi: "Nó diễn ra bao lâu một lần?" },
        { speaker: "Hoa", en: "Every year. Let's go together, shall we?", vi: "Mỗi năm. Chúng ta cùng đi nhé, được không?" }
      ]
    },
    exercises: {
      multipleChoice: [
        { q: "___ do you go to the gym? - Twice a week.", options: ["How much", "How often", "How long"], answer: "How often" },
        { q: "___ is your favorite singer? - Taylor Swift.", options: ["What", "Who", "Which"], answer: "Who" },
        { q: "You like playing football, ___?", options: ["don't you", "do you", "aren't you"], answer: "don't you" },
        { q: "She didn't go to school yesterday, ___?", options: ["did she", "didn't she", "does she"], answer: "did she" },
        { q: "I am your best friend, ___?", options: ["am not I", "aren't I", "don't I"], answer: "aren't I" },
        { q: "Let's go to the cinema tonight, ___?", options: ["will we", "shall we", "do we"], answer: "shall we" },
        { q: "Don't make noise, ___?", options: ["do you", "will you", "shall you"], answer: "will you" },
        { q: "___ money do you have left?", options: ["How many", "How much", "How long"], answer: "How much" },
        { q: "They have finished their homework, ___?", options: ["haven't they", "have they", "didn't they"], answer: "haven't they" },
        { q: "Mary is a good student, ___?", options: ["is she", "isn't she", "doesn't she"], answer: "isn't she" }
      ],
      fillBlank: [
        { sentence: "___ (What/Who) did you meet at the party? - I met Tom.", answer: "Who" },
        { sentence: "___ (How long/How often) have you lived here? - For 5 years.", answer: "How long" },
        { sentence: "He plays the guitar very well, ___ he?", answer: "doesn't" },
        { sentence: "We are late, ___ we?", answer: "aren't" },
        { sentence: "She can't swim, ___ she?", answer: "can" },
        { sentence: "Close the door, ___ you?", answer: "will" },
        { sentence: "Let's have a party, ___ we?", answer: "shall" },
        { sentence: "You haven't seen this movie, ___ you?", answer: "have" }
      ],
      transformation: [
        { sentence: "She is a doctor. (isn't)", answer: "She is a doctor, isn't she?" },
        { sentence: "I suggest we go to the beach. (Let's)", answer: "Let's go to the beach, shall we?" },
        { sentence: "You don't like coffee. (do)", answer: "You don't like coffee, do you?" },
        { sentence: "What is the price of this shirt? (How much)", answer: "How much is this shirt?" },
        { sentence: "I want you to turn off the TV. (Turn)", answer: "Turn off the TV, will you?" }
      ],
      review: [
        { sentence: "I bought ___ (a/the) apple yesterday.", answer: "an" }, // Wait, the hint was removed. The blank asks a/the. I'll just put "an"
        { sentence: "___ (The/A) sun rises in the east.", answer: "The" },
        { sentence: "He goes to school by ___ (x/a) bus.", answer: "x" },
        { sentence: "She is ___ (a/an) honest girl.", answer: "an" },
        { sentence: "We visited ___ (x/the) Hoan Kiem Lake.", answer: "x" }
      ],
      sentenceBuild: [
        { words: ["How", "often", "do", "you", "visit", "your", "grandparents", "?"], answer: "How often do you visit your grandparents ?" },
        { words: ["You", "are", "a", "student", ",", "aren't", "you", "?"], answer: "You are a student , aren't you ?" },
        { words: ["Let's", "go", "out", "for", "dinner", ",", "shall", "we", "?"], answer: "Let's go out for dinner , shall we ?" },
        { words: ["She", "doesn't", "like", "dogs", ",", "does", "she", "?"], answer: "She doesn't like dogs , does she ?" },
        { words: ["I", "am", "late", ",", "aren't", "I", "?"], answer: "I am late , aren't I ?" },
        { words: ["How", "much", "water", "do", "you", "drink", "daily", "?"], answer: "How much water do you drink daily ?" },
        { words: ["Don't", "open", "the", "window", ",", "will", "you", "?"], answer: "Don't open the window , will you ?" }
      ]
    }
  };