// 题库（还原 SBTI 风格）
const questions = [
  {
    q: "当你被安排了不想做的任务，第一反应是？",
    options: [
      { t: "malo", c: "表面答应内心摆烂" },
      { t: "dead", c: "感觉人生已经结束了" },
      { t: "elite", c: "认真完成但内心不爽" },
      { t: "atm", c: "算了帮就帮吧" }
    ]
  },
  {
    q: "朋友约你出门，你通常？",
    options: [
      { t: "malo", c: "能不去就不去" },
      { t: "dead", c: "出门像历劫" },
      { t: "elite", c: "精心准备再出门" },
      { t: "atm", c: "随叫随到" }
    ]
  },
  {
    q: "工作/学习时你的状态更像？",
    options: [
      { t: "malo", c: "摸鱼为主" },
      { t: "dead", c: "机械完成" },
      { t: "elite", c: "力求完美" },
      { t: "atm", c: "帮别人兜底" }
    ]
  },
  {
    q: "遇到麻烦事你倾向于？",
    options: [
      { t: "malo", c: "假装看不见" },
      { t: "dead", c: "已经麻木了" },
      { t: "elite", c: "冷静解决" },
      { t: "atm", c: "主动扛下来" }
    ]
  },
  {
    q: "别人夸你时，你内心？",
    options: [
      { t: "malo", c: "随便夸吧无所谓" },
      { t: "dead", c: "毫无波澜" },
      { t: "elite", c: "暗自开心并记下来" },
      { t: "atm", c: "谢谢但觉得自己不配" }
    ]
  }
];

// 结果库
const resultMap = {
  malo: {
    name: "吗喽型",
    desc: "你是典型的佛系摆烂人，不卷不争，活着就行。心态超级稳，烦恼很少，主打一个顺其自然。"
  },
  dead: {
    name: "死者型",
    desc: "身心俱疲，灵魂已出窍。对很多事都提不起兴趣，只想安静躺平。你需要好好休息。"
  },
  elite: {
    name: "精致精英型",
    desc: "你有追求、有标准，做事认真，注重形象与效率。在人群中往往很靠谱，但也容易累。"
  },
  atm: {
    name: "老好人ATM型",
    desc: "习惯付出、不好意思拒绝，总在照顾别人。你很温柔，但也要记得多爱自己一点。"
  }
};

// 状态
let current = 0;
let answers = Array(questions.length).fill(null);

// DOM
const startPage = document.getElementById("start-page");
const quizPage = document.getElementById("quiz-page");
const resultPage = document.getElementById("result-page");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const currentNum = document.getElementById("current-num");
const totalNum = document.getElementById("total-num");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

totalNum.textContent = questions.length;

// 开始
startBtn.addEventListener("click", () => {
  startPage.classList.remove("show");
  quizPage.classList.add("show");
  renderQuestion();
});

// 渲染题目
function renderQuestion() {
  const q = questions[current];
  questionEl.textContent = q.q;
  currentNum.textContent = current + 1;
  optionsEl.innerHTML = "";

  q.options.forEach((opt, i) => {
    const div = document.createElement("div");
    div.className = "option";
    if (answers[current] === opt.t) div.classList.add("selected");
    div.textContent = opt.c;
    div.dataset.type = opt.t;
    div.addEventListener("click", () => {
      answers[current] = opt.t;
      document.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
      div.classList.add("selected");
    });
    optionsEl.appendChild(div);
  });

  prevBtn.disabled = current === 0;
  nextBtn.textContent = current === questions.length - 1 ? "查看结果" : "下一题";
}

// 上一题
prevBtn.addEventListener("click", () => {
  current--;
  renderQuestion();
});

// 下一题 / 结果
nextBtn.addEventListener("click", () => {
  if (answers[current] === null) {
    alert("请选择一个选项");
    return;
  }
  if (current < questions.length - 1) {
    current++;
    renderQuestion();
  } else {
    showResult();
  }
});

// 计算结果
function showResult() {
  const count = {};
  answers.forEach(t => count[t] = (count[t] || 0) + 1);
  const maxType = Object.keys(count).sort((a, b) => count[b] - count[a])[0];
  const res = resultMap[maxType];

  document.getElementById("result-type").textContent = res.name;
  document.getElementById("result-desc").textContent = res.desc;

  quizPage.classList.remove("show");
  resultPage.classList.add("show");
}

// 重来
restartBtn.addEventListener("click", () => {
  current = 0;
  answers.fill(null);
  resultPage.classList.remove("show");
  startPage.classList.add("show");
});
