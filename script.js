let score = 0;
let current = 0;

const questions = [
  { q: "كم عدد ألوان قوس قزح؟ 🌈", a: ["5","7","10"], correct: 1 },
  { q: "كم عدد أيام الأسبوع؟ 📅", a: ["5","7","10"], correct: 1 },
  { q: "ما لون السماء؟ ☁️", a: ["أحمر","أزرق","أخضر"], correct: 1 },
  { q: "كم عدد أصابع اليد؟ ✋", a: ["5","10","8"], correct: 1 },
  { q: "ما الحيوان الذي يقول مياو؟ 🐱", a: ["كلب","قطة","بقرة"], correct: 1 },
  { q: "ما اسم كوكبنا؟ 🌍", a: ["المريخ","الأرض","الزهرة"], correct: 1 },
];

function showQuestion() {

  if (current >= questions.length) {
    document.getElementById("question").innerHTML = "🎉 خلصت اللعبة!";
    document.getElementById("answers").innerHTML = "";
    return;
  }

  let q = questions[current];

  document.getElementById("question").innerHTML = q.q;

  let answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.a.forEach((ans, index) => {

    let btn = document.createElement("button");
    btn.innerHTML = ans;

    btn.onclick = function () {
      if (index === q.correct) score++;
      current++;

      document.getElementById("score").innerHTML = "النقاط: " + score;

      showQuestion();
    };

    answersDiv.appendChild(btn);
  });
}

showQuestion();