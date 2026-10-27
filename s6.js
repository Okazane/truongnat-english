  const lessonData = {
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
      explanation: `
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
      `,
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
  };