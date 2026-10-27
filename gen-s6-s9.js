const fs = require('fs');

const s6 = `  const lessonData = {
    session: 6,
    title: "Bài 6: Động từ chỉ sở thích + V-ing / to V",
    vocab: [
      { en: "adore", pos: "v", ipa: "/əˈdɔːr/", vi: "thích cực kỳ, say mê", example: "I adore playing computer games." },
      { en: "fancy", pos: "v", ipa: "/ˈfænsi/", vi: "thích", example: "Do you fancy going to the cinema?" },
      { en: "detest", pos: "v", ipa: "/dɪˈtest/", vi: "ghét cay ghét đắng", example: "She detests washing the dishes." },
      { en: "mind", pos: "v", ipa: "/maɪnd/", vi: "phiền, ngại", example: "I don't mind helping you." },
      { en: "leisure", pos: "n", ipa: "/ˈleʒər/", vi: "thời gian rảnh rỗi", example: "In my leisure time, I read books." },
      { en: "addicted", pos: "adj", ipa: "/əˈdɪktɪd/", vi: "nghiện", example: "He is addicted to social media." },
      { en: "hooked", pos: "adj", ipa: "/hʊkt/", vi: "cuốn hút, đam mê", example: "I am hooked on this new TV series." }
    ],
    grammar: {
      point: "ĐỘNG TỪ CHỈ SỞ THÍCH (Verbs of Liking) + V-ing / to V",
      explanation: \`
        <div class="eng-formula-box">
          <div class="eng-formula-title">1. Nhóm Động Từ + V-ing</div>
          <b>• Yêu thích:</b> enjoy, fancy, adore, love, like<br/>
          <b>• Ghét/Không thích:</b> detest, hate, dislike<br/>
          <b>• Không bận tâm:</b> don't mind<br/>
          <i>Ví dụ: I adore <b>listening</b> to music. / She detests <b>doing</b> homework.</i>
        </div>
        <div class="eng-formula-box">
          <div class="eng-formula-title">2. Nhóm Động Từ + To V (Hoặc cả 2)</div>
          <b>• Cả V-ing và to V (Không đổi nghĩa):</b> love, like, hate, prefer<br/>
          <i>Ví dụ: I like <b>to read</b> = I like <b>reading</b>.</i><br/>
          <b>• Cấu trúc "would like / would love":</b> BẮT BUỘC dùng <b>to V</b>.<br/>
          <i>Ví dụ: I would like <b>to drink</b> some water. (KHÔNG dùng drinking)</i>
        </div>
      \`,
      examples: [
        "She fancies <b>going</b> out with friends.",
        "I wouldn't mind <b>waiting</b> a few minutes."
      ],
      commonMistake: {
        wrong: "I enjoy to play football.",
        right: "I enjoy **playing** football.",
        note: "Sau 'enjoy', 'fancy', 'detest', 'mind' LUÔN LUÔN là V-ing!"
      },
      memoryTip: "Nhớ câu thần chú V-ing: 'Thích (adore, fancy), Ghét (detest), và Không màng (mind)'."
    },
    dialogue: {
      titleVi: "Tình huống: Trò chuyện về sở thích cuối tuần",
      lines: [
        { speaker: "Lan", en: "What do you fancy doing this weekend?", vi: "Bạn thích làm gì cuối tuần này?" },
        { speaker: "Minh", en: "I adore playing football, but it's going to rain. I don't mind staying at home.", vi: "Mình cực thích đá bóng, nhưng trời sắp mưa. Mình không ngại ở nhà đâu." },
        { speaker: "Lan", en: "I detest staying indoors. Do you want to go to the cinema?", vi: "Mình ghét cay ghét đắng việc ở rịt trong nhà. Bạn muốn đi xem phim không?" },
        { speaker: "Minh", en: "I would love to go! Let's watch a comedy.", vi: "Mình rất muốn đi! Hãy xem một bộ phim hài nhé." }
      ]
    },
    exercises: {
      multipleChoice: [
        { q: "My sister fancies ___ clothes online.", options: ["buying", "to buy", "buy"], answer: "buying" },
        { q: "We don't mind ___ late to finish the project.", options: ["working", "to work", "work"], answer: "working" },
        { q: "Tom detests ___ his room. It's always messy.", options: ["cleaning", "to clean", "cleans"], answer: "cleaning" },
        { q: "I would like ___ a cup of tea, please.", options: ["to have", "having", "have"], answer: "to have" },
        { q: "Are you hooked ___ playing computer games?", options: ["in", "on", "at"], answer: "on" },
        { q: "Many teenagers are addicted ___ their smartphones.", options: ["with", "to", "for"], answer: "to" },
        { q: "She adores ___ with her friends at the weekend.", options: ["hanging out", "to hang out", "hang out"], answer: "hanging out" },
        { q: "I prefer ___ to reading books.", options: ["watching TV", "watch TV", "to watch TV"], answer: "watching TV" },
        { q: "They hate ___ up early in the winter.", options: ["waking", "wake", "woke"], answer: "waking" },
        { q: "Would you love ___ to my party tonight?", options: ["to come", "coming", "come"], answer: "to come" }
      ],
      fillBlank: [
        { sentence: "Do you enjoy ___ (listen) to pop music?", answer: "listening" },
        { sentence: "He detests ___ (wash) the dishes after dinner.", answer: "washing" },
        { sentence: "I don't mind ___ (wait) for you if you're late.", answer: "waiting" },
        { sentence: "She would like ___ (travel) around the world.", answer: "to travel" },
        { sentence: "My brother is addicted ___ (play) video games.", answer: "to playing" },
        { sentence: "We fancy ___ (eat) out tonight.", answer: "eating" },
        { sentence: "I adore ___ (collect) stamps from different countries.", answer: "collecting" },
        { sentence: "Would they prefer ___ (stay) at home or go out?", answer: "to stay" }
      ],
      transformation: [
        { sentence: "I like reading comics very much. (adore)", answer: "I adore reading comics." },
        { sentence: "She hates doing the laundry. (detests)", answer: "She detests doing the laundry." },
        { sentence: "Do you want to go for a walk? (fancy)", answer: "Do you fancy going for a walk?" },
        { sentence: "He is a big fan of K-pop. (hooked)", answer: "He is hooked on K-pop." },
        { sentence: "I want to have a pizza. (would like)", answer: "I would like to have a pizza." }
      ],
      review: [
        { sentence: "By this time tomorrow, they ___ (finish) their final exam.", answer: "will have finished" },
        { sentence: "We ___ (know) each other since we were in primary school.", answer: "have known" },
        { sentence: "What ___ you ___ (do) when the phone rang?", answer: "were doing" },
        { sentence: "Look at the dark clouds! It ___ (rain).", answer: "is going to rain" },
        { sentence: "My parents ___ (buy) a new car last week.", answer: "bought" }
      ],
      sentenceBuild: [
        { words: ["I", "fancy", "reading", "books", "in", "my", "leisure", "time", "."], answer: "I fancy reading books in my leisure time ." },
        { words: ["She", "detests", "making", "models", "because", "it", "is", "boring", "."], answer: "She detests making models because it is boring ." },
        { words: ["We", "don't", "mind", "helping", "you", "with", "your", "homework", "."], answer: "We don't mind helping you with your homework ." },
        { words: ["Are", "you", "hooked", "on", "watching", "TV", "series", "?"], answer: "Are you hooked on watching TV series ?" },
        { words: ["I", "would", "like", "to", "drink", "some", "orange", "juice", "."], answer: "I would like to drink some orange juice ." },
        { words: ["He", "adores", "hanging", "out", "with", "his", "best", "friends", "."], answer: "He adores hanging out with his best friends ." },
        { words: ["My", "brother", "is", "addicted", "to", "social", "media", "."], answer: "My brother is addicted to social media ." }
      ]
    }
  };`;

fs.writeFileSync('s6.js', s6);

const s7 = `  const lessonData = {
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
      explanation: \`
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
      \`,
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
  };`;

fs.writeFileSync('s7.js', s7);

const s8 = `  const lessonData = {
    session: 8,
    title: "Bài 8: Mạo từ: a, an, the, rỗng",
    vocab: [
      { en: "custom", pos: "n", ipa: "/ˈkʌstəm/", vi: "phong tục", example: "It's a traditional custom in my country." },
      { en: "tradition", pos: "n", ipa: "/trəˈdɪʃn/", vi: "truyền thống", example: "We respect our family traditions." },
      { en: "respect", pos: "v", ipa: "/rɪˈspekt/", vi: "tôn trọng", example: "You should respect elderly people." },
      { en: "ancestor", pos: "n", ipa: "/ˈænsestər/", vi: "tổ tiên", example: "We worship our ancestors at Tet." },
      { en: "worship", pos: "v", ipa: "/ˈwɜːʃɪp/", vi: "thờ cúng", example: "They worship their ancestors." },
      { en: "offering", pos: "n", ipa: "/ˈɒfərɪŋ/", vi: "đồ cúng, lễ vật", example: "They put offerings on the altar." },
      { en: "altar", pos: "n", ipa: "/ˈɔːltər/", vi: "bàn thờ", example: "The altar is in the middle of the house." }
    ],
    grammar: {
      point: "MẠO TỪ (Articles): A / AN / THE / RỖNG",
      explanation: \`
        <div class="eng-formula-box">
          <div class="eng-formula-title">1. Mạo từ không xác định (A / An)</div>
          Dùng trước danh từ đếm được SỐ ÍT, nhắc đến lần ĐẦU TIÊN.<br/>
          <b>• A:</b> Đi trước danh từ bắt đầu bằng PHỤ ÂM (a cat, a house, a uniform - chữ u đọc là /ju/ nên là phụ âm).<br/>
          <b>• An:</b> Đi trước danh từ bắt đầu bằng NGUYÊN ÂM (u, e, o, a, i - uể oải) hoặc âm 'h' câm (an apple, an hour).
        </div>
        <div class="eng-formula-box">
          <div class="eng-formula-title">2. Mạo từ xác định (The)</div>
          Dùng cho cả số ít, số nhiều, đếm được, không đếm được KHI NÓ ĐÃ XÁC ĐỊNH.<br/>
          <b>• Các trường hợp PHẢI dùng THE:</b><br/>
          &nbsp;&nbsp;- Vật duy nhất (the sun, the moon, the Earth).<br/>
          &nbsp;&nbsp;- Tên biển, đại dương, sông, dãy núi, quần đảo (the Pacific Ocean, the Thames, the Himalayas).<br/>
          &nbsp;&nbsp;- Cụm từ: in the morning/afternoon, the first, the best (so sánh nhất).
        </div>
        <div class="eng-formula-box">
          <div class="eng-formula-title">3. Mạo từ rỗng (Không dùng mạo từ)</div>
          <b>• Các trường hợp KHÔNG dùng:</b><br/>
          &nbsp;&nbsp;- Trước danh từ số nhiều / không đếm được chỉ MỌI VẬT NÓI CHUNG (I like cats. Water is important).<br/>
          &nbsp;&nbsp;- Trước tên các bữa ăn, môn thể thao, môn học (play football, have breakfast, study math).<br/>
          &nbsp;&nbsp;- Tên các quốc gia, đường phố, hồ, ngọn núi đơn lẻ (Vietnam, Mount Everest, Hoan Kiem Lake).
        </div>
      \`,
      examples: [
        "I bought <b>an</b> apple and <b>a</b> banana. <b>The</b> apple was sweet.",
        "<b>The</b> sun rises in the east."
      ],
      commonMistake: {
        wrong: "I play the football every day.",
        right: "I play **football** every day.",
        note: "Các môn thể thao KHÔNG dùng THE."
      },
      memoryTip: "A/An = một cái ngẫu nhiên. The = cái đó (cả người nói và nghe đều biết)."
    },
    dialogue: {
      titleVi: "Tình huống: Phong tục thờ cúng tổ tiên",
      lines: [
        { speaker: "Nam", en: "What is a common custom in Vietnam?", vi: "Phong tục phổ biến ở Việt Nam là gì?" },
        { speaker: "Lan", en: "It's the custom of worshiping ancestors. Almost every house has an altar.", vi: "Đó là phong tục thờ cúng tổ tiên. Hầu như nhà nào cũng có một bàn thờ." },
        { speaker: "Nam", en: "Where do you usually put the altar?", vi: "Bạn thường đặt bàn thờ ở đâu?" },
        { speaker: "Lan", en: "We put it in the most respectful place. We often put offerings like fruit and flowers on it.", vi: "Chúng tôi đặt ở nơi trang trọng nhất. Chúng tôi thường đặt lễ vật như trái cây và hoa lên đó." }
      ]
    },
    exercises: {
      multipleChoice: [
        { q: "I have ___ cat and ___ dog.", options: ["a / a", "the / the", "a / the"], answer: "a / a" },
        { q: "___ sun is shining brightly today.", options: ["A", "An", "The"], answer: "The" },
        { q: "He goes to school by ___ bus every day.", options: ["a", "the", "rỗng (no article)"], answer: "rỗng (no article)" },
        { q: "My father is ___ engineer.", options: ["a", "an", "the"], answer: "an" },
        { q: "They are playing ___ football in the yard.", options: ["a", "the", "rỗng (no article)"], answer: "rỗng (no article)" },
        { q: "Vietnam is a country in ___ Southeast Asia.", options: ["a", "the", "rỗng (no article)"], answer: "rỗng (no article)" },
        { q: "I waited for him for ___ hour.", options: ["a", "an", "the"], answer: "an" },
        { q: "Do you know ___ girl standing over there?", options: ["a", "an", "the"], answer: "the" },
        { q: "___ Pacific Ocean is the largest ocean.", options: ["A", "The", "rỗng (no article)"], answer: "The" },
        { q: "She usually has ___ breakfast at 7 AM.", options: ["a", "the", "rỗng (no article)"], answer: "rỗng (no article)" }
      ],
      fillBlank: [
        { sentence: "I bought ___ (a/an/the) umbrella yesterday.", answer: "an" },
        { sentence: "Where is ___ (a/an/the) book I lent you?", answer: "the" },
        { sentence: "She is reading ___ (a/an/the) interesting story.", answer: "an" },
        { sentence: "___ (A/An/The) Earth goes around the sun.", answer: "The" },
        { sentence: "I love listening to ___ (a/an/the/x) music.", answer: "x" },
        { sentence: "He is ___ (a/an/the) honest boy.", answer: "an" },
        { sentence: "We went to ___ (a/an/the) Hoan Kiem Lake.", answer: "x" },
        { sentence: "This is ___ (a/an/the) best movie ever.", answer: "the" }
      ],
      transformation: [
        { sentence: "She is the most beautiful girl in the class. (a)", answer: "She is a beautiful girl in the class." },
        { sentence: "I bought a pen. The pen is blue. (which)", answer: "The pen which I bought is blue." },
        { sentence: "There is an apple on the table. (The)", answer: "The apple is on the table." },
        { sentence: "He plays guitar very well. (the)", answer: "He plays the guitar very well." },
        { sentence: "Water is essential for life. (x)", answer: "Water is essential for life." }
      ],
      review: [
        { sentence: "My brother runs ___ (fast) than me.", answer: "faster" },
        { sentence: "This is the ___ (interesting) book I have ever read.", answer: "most interesting" },
        { sentence: "Today the weather is ___ (bad) than yesterday.", answer: "worse" },
        { sentence: "City life is ___ (noisy) than country life.", answer: "noisier" },
        { sentence: "He drives ___ (careful) than his sister.", answer: "more carefully" }
      ],
      sentenceBuild: [
        { words: ["I", "saw", "a", "dog", "in", "the", "park", "."], answer: "I saw a dog in the park ." },
        { words: ["The", "sun", "rises", "in", "the", "east", "."], answer: "The sun rises in the east ." },
        { words: ["He", "is", "an", "honest", "man", "."], answer: "He is an honest man ." },
        { words: ["They", "play", "football", "after", "school", "every", "day", "."], answer: "They play football after school every day ." },
        { words: ["We", "have", "a", "custom", "of", "worshiping", "ancestors", "."], answer: "We have a custom of worshiping ancestors ." },
        { words: ["The", "Pacific", "Ocean", "is", "very", "large", "."], answer: "The Pacific Ocean is very large ." },
        { words: ["I", "waited", "for", "her", "for", "an", "hour", "."], answer: "I waited for her for an hour ." }
      ]
    }
  };`;

fs.writeFileSync('s8.js', s8);

const s9 = `  const lessonData = {
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
      explanation: \`
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
      \`,
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
  };`;

fs.writeFileSync('s9.js', s9);

console.log("Saved s7.js, s8.js, s9.js");
