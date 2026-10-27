  const lessonData = {
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
      explanation: `
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
      `,
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
  };