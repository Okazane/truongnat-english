const fs = require('fs');

const s11 = `  const lessonData = {
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
      explanation: \`
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
      \`,
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
  };`;

const s12 = `  const lessonData = {
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
      explanation: \`
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
      \`,
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
  };`;

const s13 = `  const lessonData = {
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
      explanation: \`
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
      \`,
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
  };`;

const s14 = `  const lessonData = {
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
      explanation: \`
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
      \`,
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
  };`;

const s15 = `  const lessonData = {
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
  };`;

fs.writeFileSync('s11.js', s11);
fs.writeFileSync('s12.js', s12);
fs.writeFileSync('s13.js', s13);
fs.writeFileSync('s14.js', s14);
fs.writeFileSync('s15.js', s15);
console.log('Saved s11.js to s15.js');
