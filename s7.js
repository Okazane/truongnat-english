  const lessonData = {
    session: 7,
    title: "Bài 7: So sánh hơn & So sánh nhất",
    vocab: [
      { en: "convenient", pos: "adj", ipa: "/kənˈviːniənt/", vi: "thuận tiện", example: "Living in the city is very convenient." },
      { en: "peaceful", pos: "adj", ipa: "/ˈpiːsfl/", vi: "thanh bình", example: "The countryside is so peaceful." },
      { en: "crowded", pos: "adj", ipa: "/ˈkraʊdɪd/", vi: "đông đúc", example: "The streets are crowded with traffic." },
      { en: "hospitable", pos: "adj", ipa: "/hɒˈspɪtəbl/", vi: "hiếu khách", example: "The locals are very hospitable." },
      { en: "noisy", pos: "adj", ipa: "/ˈnɔɪzi/", vi: "ồn ào", example: "It is noisier here than in my village." },
      { en: "generous", pos: "adj", ipa: "/ˈdʒenərəs/", vi: "hào phóng", example: "He is the most generous person I know." },
      { en: "hard-working", pos: "adj", ipa: "/ˌhɑːd ˈwɜːkɪŋ/", vi: "chăm chỉ", example: "Farmers are very hard-working." }
    ],
    grammar: {
      point: "SO SÁNH HƠN & SO SÁNH NHẤT CỦA TÍNH TỪ / TRẠNG TỪ",
      explanation: `
        <div class="eng-formula-box">
          <div class="eng-formula-title">1. So Sánh Hơn (Comparative)</div>
          <b>• Tính từ/Trạng từ ngắn (1 âm tiết, hoặc 2 âm tiết tận cùng y):</b><br/>
          <code>S1 + V + Adj/Adv + ER + THAN + S2</code><br/>
          <i>Ví dụ: He runs <b>faster</b> than me. / City life is <b>noisier</b> than country life.</i><br/>
          <b>• Tính từ/Trạng từ dài (2 âm tiết trở lên):</b><br/>
          <code>S1 + V + MORE + Adj/Adv + THAN + S2</code><br/>
          <i>Ví dụ: She is <b>more beautiful</b> than her sister.</i>
        </div>
        <div class="eng-formula-box">
          <div class="eng-formula-title">2. So Sánh Nhất (Superlative)</div>
          <b>• Tính từ/Trạng từ ngắn:</b><br/>
          <code>S + V + THE + Adj/Adv + EST</code><br/>
          <i>Ví dụ: He is <b>the tallest</b> boy in my class.</i><br/>
          <b>• Tính từ/Trạng từ dài:</b><br/>
          <code>S + V + THE MOST + Adj/Adv</code><br/>
          <i>Ví dụ: This is <b>the most interesting</b> book I have ever read.</i>
        </div>
        <div class="eng-formula-box">
          <div class="eng-formula-title">3. Các Trường Hợp Đặc Biệt (Bất quy tắc)</div>
          • good / well ➔ better ➔ the best<br/>
          • bad / badly ➔ worse ➔ the worst<br/>
          • far ➔ farther / further ➔ the farthest / furthest<br/>
          • little ➔ less ➔ the least<br/>
          • much / many ➔ more ➔ the most
        </div>
      `,
      examples: [
        "A car is <b>more expensive</b> than a bicycle.",
        "Nile is <b>the longest</b> river in the world."
      ],
      commonMistake: {
        wrong: "He is more taller than me.",
        right: "He is **taller** than me.",
        note: "Đã thêm đuôi '-er' thì KHÔNG dùng 'more' nữa. Bị thừa chữ 'more' là lỗi sai phổ biến nhất!"
      },
      memoryTip: "Đuôi '-y' đọc là hai nhưng tính là ngắn: noisy ➔ noisier ➔ the noisiest. Happy ➔ happier."
    },
    dialogue: {
      titleVi: "Tình huống: Tranh luận giữa cuộc sống thành thị và nông thôn",
      lines: [
        { speaker: "Tom", en: "I think living in the city is better than living in the countryside.", vi: "Tôi nghĩ sống ở thành phố thì tốt hơn sống ở nông thôn." },
        { speaker: "Anna", en: "Why? The city is noisier and more polluted.", vi: "Tại sao? Thành phố ồn ào hơn và ô nhiễm hơn mà." },
        { speaker: "Tom", en: "But it is more convenient. We have the best hospitals and schools here.", vi: "Nhưng nó thuận tiện hơn. Chúng ta có những bệnh viện và trường học tốt nhất ở đây." },
        { speaker: "Anna", en: "Maybe, but the countryside is the most peaceful place. The people are more hospitable too.", vi: "Có thể, nhưng nông thôn là nơi thanh bình nhất. Con người cũng hiếu khách hơn nữa." }
      ]
    },
    exercises: {
      multipleChoice: [
        { q: "This is ___ book I have ever read.", options: ["more interesting", "the most interesting", "most interesting"], answer: "the most interesting" },
        { q: "My brother runs ___ than me.", options: ["faster", "more fast", "the fastest"], answer: "faster" },
        { q: "Life in the countryside is ___ than life in the city.", options: ["peacefuler", "more peaceful", "most peaceful"], answer: "more peaceful" },
        { q: "Who is ___ student in your class?", options: ["the smarter", "the smartest", "smartest"], answer: "the smartest" },
        { q: "Today the weather is ___ than yesterday.", options: ["worse", "badder", "the worst"], answer: "worse" },
        { q: "She works ___ than any other student.", options: ["more hard", "harder", "the hardest"], answer: "harder" },
        { q: "I think math is ___ difficult than English.", options: ["more", "the most", "much"], answer: "more" },
        { q: "Mount Everest is ___ mountain in the world.", options: ["highest", "the highest", "higher"], answer: "the highest" },
        { q: "Of the two sisters, Mary is ___ .", options: ["the prettier", "prettier", "the prettiest"], answer: "the prettier" },
        { q: "He drives ___ carefully than his brother.", options: ["more", "most", "the more"], answer: "more" }
      ],
      fillBlank: [
        { sentence: "Health is ___ (important) than money.", answer: "more important" },
        { sentence: "This is the ___ (bad) movie I have ever seen.", answer: "worst" },
        { sentence: "A snail is much ___ (slow) than a rabbit.", answer: "slower" },
        { sentence: "Russia is the ___ (large) country in the world.", answer: "largest" },
        { sentence: "My house is ___ (far) from school than yours.", answer: "farther" },
        { sentence: "She is the ___ (beautiful) girl in the village.", answer: "most beautiful" },
        { sentence: "Can you speak a bit ___ (slowly), please?", answer: "more slowly" },
        { sentence: "August is usually the ___ (hot) month of the year.", answer: "hottest" }
      ],
      transformation: [
        { sentence: "No one in my class is taller than John. (the)", answer: "John is the tallest in my class." },
        { sentence: "A car is more expensive than a motorbike. (cheaper)", answer: "A motorbike is cheaper than a car." },
        { sentence: "I have never read a better book than this one. (best)", answer: "This is the best book I have ever read." },
        { sentence: "Mary works harder than Tom. (doesn't)", answer: "Tom doesn't work as hard as Mary." },
        { sentence: "He is the smartest boy in the school. (smarter)", answer: "No other boy in the school is smarter than him." }
      ],
      review: [
        { sentence: "I don't mind ___ (clean) the floor.", answer: "cleaning" },
        { sentence: "She adores ___ (listen) to K-pop music.", answer: "listening" },
        { sentence: "Would you like ___ (go) to the cinema tonight?", answer: "to go" },
        { sentence: "Many kids are addicted ___ (play) video games.", answer: "to playing" },
        { sentence: "I fancy ___ (eat) a big pizza right now.", answer: "eating" }
      ],
      sentenceBuild: [
        { words: ["City", "life", "is", "busier", "than", "country", "life", "."], answer: "City life is busier than country life ." },
        { words: ["This", "is", "the", "most", "interesting", "book", "I", "have", "read", "."], answer: "This is the most interesting book I have read ." },
        { words: ["My", "sister", "drives", "more", "carefully", "than", "I", "do", "."], answer: "My sister drives more carefully than I do ." },
        { words: ["He", "is", "the", "best", "student", "in", "our", "school", "."], answer: "He is the best student in our school ." },
        { words: ["Rural", "areas", "are", "more", "peaceful", "than", "urban", "areas", "."], answer: "Rural areas are more peaceful than urban areas ." },
        { words: ["She", "speaks", "English", "fluently", "than", "her", "brother", "more", "."], answer: "She speaks English more fluently than her brother ." },
        { words: ["What", "is", "the", "highest", "mountain", "in", "the", "world", "?"], answer: "What is the highest mountain in the world ?" }
      ]
    }
  };