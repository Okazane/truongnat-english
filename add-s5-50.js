const fs = require('fs');

const extraMC = `
        { q: "By this time tomorrow, they ___ their final exam.", options: ["will finish", "are finishing", "will have finished"], answer: "will have finished" },
        { q: "We ___ each other since we were in primary school.", options: ["know", "knew", "have known"], answer: "have known" },
        { q: "What ___ you ___ when the phone rang?", options: ["did / do", "were / doing", "are / doing"], answer: "were / doing" },
        { q: "Look at the dark clouds! It ___ rain.", options: ["will", "is going to", "rains"], answer: "is going to" },
        { q: "I promise I ___ tell anyone your secret.", options: ["won't", "am not going to", "don't"], answer: "won't" },
        { q: "She ___ to London three times this year.", options: ["has gone", "has been", "went"], answer: "has been" },
        { q: "He usually ___ his homework before dinner.", options: ["is doing", "has done", "does"], answer: "does" },
        { q: "My parents ___ a new car last week.", options: ["bought", "buy", "have bought"], answer: "bought" },
        { q: "While I ___ in my room, my sister was listening to music.", options: ["studied", "was studying", "study"], answer: "was studying" },
        { q: "They ___ playing football because it is raining.", options: ["stop", "have stopped", "stopped"], answer: "have stopped" },
`;

const extraFill = `
        { sentence: "I ___ (not/see) him since last Monday.", answer: "have not seen", hint: "Hiện tại hoàn thành với since" },
        { sentence: "Listen! Someone ___ (knock) at the door.", answer: "is knocking", hint: "Hiện tại tiếp diễn" },
        { sentence: "When I arrived, they ___ (have) dinner.", answer: "were having", hint: "Quá khứ tiếp diễn" },
        { sentence: "We ___ (visit) our grandparents next weekend. We bought the tickets.", answer: "are going to visit", hint: "Tương lai gần" },
        { sentence: "He ___ (live) in this city for 10 years.", answer: "has lived", hint: "Hiện tại hoàn thành với for" },
        { sentence: "She ___ (go) to the supermarket yesterday.", answer: "went", hint: "Quá khứ đơn" },
        { sentence: "I think it ___ (rain) tomorrow.", answer: "will rain", hint: "Tương lai đơn (dự đoán)" },
        { sentence: "They ___ (play) tennis every Sunday.", answer: "play", hint: "Hiện tại đơn" },
        { sentence: "While he ___ (drive), he saw a terrible accident.", answer: "was driving", hint: "Quá khứ tiếp diễn" },
        { sentence: "___ you ever ___ (eat) Japanese food?", answer: "Have eaten", hint: "Hiện tại hoàn thành (Have...eaten)" },
`;

const extraBuild = `
        { words: ["I", "have", "lived", "here", "since", "2020", "."], answer: "I have lived here since 2020 ." },
        { words: ["What", "were", "you", "doing", "at", "8", "PM", "yesterday", "?"], answer: "What were you doing at 8 PM yesterday ?" },
        { words: ["She", "is", "going", "to", "buy", "a", "new", "car", "."], answer: "She is going to buy a new car ." },
        { words: ["He", "usually", "plays", "football", "on", "Sundays", "."], answer: "He usually plays football on Sundays ." },
        { words: ["Look", "!", "The", "bus", "is", "coming", "."], answer: "Look ! The bus is coming ." },
`;

let content = fs.readFileSync('english-g8-s5.html', 'utf8');

// Insert at the beginning of the arrays
content = content.replace(/multipleChoice: \[/, 'multipleChoice: [\n' + extraMC);
content = content.replace(/fillBlank: \[/, 'fillBlank: [\n' + extraFill);
content = content.replace(/sentenceBuild: \[/, 'sentenceBuild: [\n' + extraBuild);
// Update button text
content = content.replace(/>Kiểm tra kết quả 25 câu</g, '>Kiểm tra kết quả 50 câu<');

fs.writeFileSync('english-g8-s5.html', content);
console.log("Upgraded S5 to 50 questions");
