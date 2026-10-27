  const lessonData = {
    session: 10,
    title: "Bài 10: Bài thi Tổng Ôn Cụm 2",
    vocab: [
      { en: "Test", pos: "n", ipa: "/test/", vi: "Bài kiểm tra", example: "Good luck with your test." }
    ],
    grammar: null,
    dialogue: {
      titleVi: "Tình huống: Chúc thi tốt!",
      lines: [
        { speaker: "Teacher", en: "Are you ready for the test?", vi: "Các em đã sẵn sàng cho bài kiểm tra chưa?" },
        { speaker: "Student", en: "Yes, we are. We have reviewed all the grammar points.", vi: "Dạ rồi. Chúng em đã ôn lại tất cả các chủ điểm ngữ pháp." },
        { speaker: "Teacher", en: "Good luck! Do your best.", vi: "Chúc may mắn! Hãy làm hết sức mình nhé." }
      ]
    },
    exercises: {
      multipleChoice: [
        { q: "I adore ___ books in my free time.", options: ["reading", "to read", "read"], answer: "reading" },
        { q: "She is ___ girl in our class.", options: ["the most beautiful", "more beautiful", "most beautiful"], answer: "the most beautiful" },
        { q: "He works ___ than his brother.", options: ["harder", "more hard", "hardest"], answer: "harder" },
        { q: "I bought ___ umbrella yesterday.", options: ["an", "a", "the"], answer: "an" },
        { q: "___ sun is hot today.", options: ["The", "A", "An"], answer: "The" },
        { q: "You like coffee, ___ you?", options: ["don't", "do", "aren't"], answer: "don't" },
        { q: "He didn't go to school, ___ he?", options: ["did", "didn't", "does"], answer: "did" },
        { q: "___ do you go to the cinema? - Twice a month.", options: ["How often", "How long", "How much"], answer: "How often" },
        { q: "I would like ___ a cup of coffee.", options: ["to have", "having", "have"], answer: "to have" },
        { q: "They detest ___ up early.", options: ["waking", "to wake", "wake"], answer: "waking" },
        { q: "City life is ___ than country life.", options: ["busier", "more busy", "the busiest"], answer: "busier" },
        { q: "He plays ___ football every afternoon.", options: ["rỗng (no article)", "a", "the"], answer: "rỗng (no article)" },
        { q: "I am late, ___ I?", options: ["aren't", "am not", "don't"], answer: "aren't" },
        { q: "Let's go for a walk, ___ we?", options: ["shall", "will", "do"], answer: "shall" },
        { q: "___ is your English teacher? - Mr. Brown.", options: ["Who", "What", "Which"], answer: "Who" },
        { q: "She is addicted ___ playing games.", options: ["to", "with", "in"], answer: "to" },
        { q: "This is ___ worst movie ever.", options: ["the", "a", "an"], answer: "the" },
        { q: "My house is ___ from school than yours.", options: ["farther", "farthest", "more far"], answer: "farther" },
        { q: "Water ___ at 100 degrees.", options: ["boils", "is boiling", "boil"], answer: "boils" },
        { q: "Don't open the window, ___ you?", options: ["will", "do", "shall"], answer: "will" }
      ],
      fillBlank: [
        { sentence: "Do you fancy ___ (go) to the park?", answer: "going" },
        { sentence: "He is the ___ (tall) boy in the team.", answer: "tallest" },
        { sentence: "A turtle is much ___ (slow) than a rabbit.", answer: "slower" },
        { sentence: "She plays ___ (the/x) piano beautifully.", answer: "the" },
        { sentence: "I visited ___ (the/x) London last year.", answer: "x" },
        { sentence: "You haven't finished your homework, ___ you?", answer: "have" },
        { sentence: "___ (What/Who) are you looking for? - My keys.", answer: "What" },
        { sentence: "I don't mind ___ (help) you.", answer: "helping" },
        { sentence: "Would you love ___ (come) to my party?", answer: "to come" },
        { sentence: "She is ___ (a/an) honest person.", answer: "an" },
        { sentence: "They are playing ___ (the/x) volleyball.", answer: "x" },
        { sentence: "Russia is the ___ (large) country.", answer: "largest" },
        { sentence: "Health is ___ (important) than money.", answer: "more important" },
        { sentence: "I prefer ___ (read) to watching TV.", answer: "reading" },
        { sentence: "Let's eat out, ___ we?", answer: "shall" },
        { sentence: "Close the door, ___ you?", answer: "will" },
        { sentence: "She can speak English, ___ she?", answer: "can't" },
        { sentence: "___ (How long/How often) have you learned English? - 3 years.", answer: "How long" }
      ],
      sentenceBuild: [
        { words: ["I", "adore", "listening", "to", "music", "."], answer: "I adore listening to music ." },
        { words: ["City", "life", "is", "noisier", "than", "country", "life", "."], answer: "City life is noisier than country life ." },
        { words: ["This", "is", "the", "most", "beautiful", "flower", "."], answer: "This is the most beautiful flower ." },
        { words: ["The", "sun", "rises", "in", "the", "east", "."], answer: "The sun rises in the east ." },
        { words: ["How", "often", "do", "you", "go", "swimming", "?"], answer: "How often do you go swimming ?" },
        { words: ["You", "are", "a", "doctor", ",", "aren't", "you", "?"], answer: "You are a doctor , aren't you ?" },
        { words: ["Let's", "play", "chess", ",", "shall", "we", "?"], answer: "Let's play chess , shall we ?" },
        { words: ["She", "is", "an", "excellent", "student", "."], answer: "She is an excellent student ." },
        { words: ["He", "drives", "more", "carefully", "than", "me", "."], answer: "He drives more carefully than me ." },
        { words: ["I", "would", "like", "to", "drink", "milk", "."], answer: "I would like to drink milk ." },
        { words: ["They", "detest", "getting", "up", "early", "."], answer: "They detest getting up early ." },
        { words: ["He", "doesn't", "like", "cats", ",", "does", "he", "?"], answer: "He doesn't like cats , does he ?" }
      ]
    }
  };