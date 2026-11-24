
const phases = [
  {
    id: "chemistry",
    name: "Química",
    icon: "⚗️",
    room: "chemistry-room",
    title: "Laboratório de Química",
    description: "Entre no laboratório e descubra os segredos das substâncias, dos elementos e das reações químicas!",
    decoration: "🧪　🧫　⚗️",
    equipment: "🔬　📚　🧴",
    questions: [
      { q: "Qual é a fórmula química da água?", a: ["CO₂", "H₂O", "O₂", "NaCl"], c: 1 },
      { q: "Qual é o símbolo químico do ouro?", a: ["Ag", "Fe", "Au", "O"], c: 2 },
      { q: "Qual é o gás que os seres humanos respiram para sobreviver?", a: ["Oxigênio", "Hidrogênio", "Nitrogênio", "Hélio"], c: 0 },
      { q: "Qual é o pH de uma substância neutra?", a: ["0", "3", "7", "14"], c: 2 },
      { q: "Qual partícula possui carga elétrica negativa?", a: ["Próton", "Nêutron", "Elétron", "Núcleo"], c: 2 },
      { q: "Qual é o símbolo químico do ferro?", a: ["Fe", "F", "Fr", "Ir"], c: 0 },
      { q: "A mistura de água e óleo é:", a: ["Homogênea", "Heterogênea", "Uma solução", "Um elemento"], c: 1 },
      { q: "Qual é o principal componente do ar atmosférico?", a: ["Oxigênio", "Gás carbônico", "Nitrogênio", "Hidrogênio"], c: 2 },
      { q: "Como é chamada a passagem do estado líquido para o gasoso?", a: ["Fusão", "Solidificação", "Condensação", "Vaporização"], c: 3 },
      { q: "Qual é a fórmula do gás carbônico?", a: ["CO₂", "H₂O", "O₃", "NaCl"], c: 0 }
    ]
  },
  {
    id: "physics",
    name: "Física",
    icon: "🧲",
    room: "physics-room",
    title: "Centro de Física",
    description: "Investigue as forças da natureza, a energia, o movimento e os fenômenos que acontecem ao nosso redor!",
    decoration: "🧲　⚙️　💡",
    equipment: "🔋　📏　🔭",
    questions: [
      { q: "Qual é a unidade de medida da força no Sistema Internacional?", a: ["Joule", "Newton", "Watt", "Metro"], c: 1 },
      { q: "Qual é a velocidade aproximada da luz no vácuo?", a: ["300 km/s", "3.000 km/s", "300.000 km/s", "30 km/s"], c: 2 },
      { q: "Qual força nos mantém presos à superfície da Terra?", a: ["Atrito", "Magnética", "Gravitacional", "Elétrica"], c: 2 },
      { q: "Qual é a unidade de medida da energia?", a: ["Joule", "Newton", "Quilograma", "Metro"], c: 0 },
      { q: "O que acontece com a luz ao atingir um espelho?", a: ["É refletida", "Desaparece", "Vira som", "É congelada"], c: 0 },
      { q: "Qual destes materiais é um bom condutor de eletricidade?", a: ["Borracha", "Plástico", "Cobre", "Madeira"], c: 2 },
      { q: "Qual é a unidade de medida da potência?", a: ["Watt", "Litro", "Newton", "Segundo"], c: 0 },
      { q: "O som se propaga no vácuo?", a: ["Sim, normalmente", "Não, precisa de um meio material", "Somente à noite", "Somente com luz"], c: 1 },
      { q: "Qual é o nome da energia associada ao movimento?", a: ["Térmica", "Química", "Cinética", "Nuclear"], c: 2 },
      { q: "A corrente elétrica é o movimento ordenado de:", a: ["Moléculas de água", "Cargas elétricas", "Ondas sonoras", "Fótons apenas"], c: 1 }
    ]
  },
  {
    id: "biology",
    name: "Biologia",
    icon: "🧬",
    room: "biology-room",
    title: "Estação de Biologia",
    description: "Explore a vida em todas as suas formas: células, organismos, ecossistemas e o incrível corpo humano!",
    decoration: "🌱　🧬　🌻",
    equipment: "🔬　🦠　🌿",
    questions: [
      { q: "Qual é a unidade básica da vida?", a: ["Átomo", "Célula", "Tecido", "Órgão"], c: 1 },
      { q: "Qual órgão é responsável por bombear o sangue?", a: ["Pulmão", "Cérebro", "Coração", "Estômago"], c: 2 },
      { q: "Qual organela realiza a fotossíntese nas plantas?", a: ["Mitocôndria", "Cloroplasto", "Ribossomo", "Lisossomo"], c: 1 },
      { q: "Qual molécula carrega as informações genéticas?", a: ["DNA", "Água", "Glicose", "Oxigênio"], c: 0 },
      { q: "Como são chamados os animais que possuem coluna vertebral?", a: ["Invertebrados", "Vertebrados", "Microrganismos", "Anfíbios"], c: 1 },
      { q: "Qual é o maior órgão do corpo humano?", a: ["Coração", "Fígado", "Pele", "Pulmão"], c: 2 },
      { q: "Qual gás as plantas absorvem durante a fotossíntese?", a: ["Oxigênio", "Hidrogênio", "Gás carbônico", "Hélio"], c: 2 },
      { q: "Qual sistema do corpo humano é responsável pela respiração?", a: ["Digestório", "Respiratório", "Nervoso", "Esquelético"], c: 1 },
      { q: "Os fungos pertencem a qual reino?", a: ["Animalia", "Plantae", "Fungi", "Monera"], c: 2 },
      { q: "Qual é a principal função dos glóbulos vermelhos?", a: ["Defender o corpo", "Transportar oxigênio", "Produzir hormônios", "Digerir alimentos"], c: 1 }
    ]
  },
  {
    id: "astronomy",
    name: "Astronomia",
    icon: "🔭",
    room: "astronomy-room",
    title: "Observatório Espacial",
    description: "Olhe para o céu e viaje pelo universo! Descubra planetas, estrelas, galáxias e mistérios espaciais.",
    decoration: "🌙　🪐　⭐",
    equipment: "🔭　🚀　🌌",
    questions: [
      { q: "Qual é a estrela mais próxima da Terra?", a: ["Sirius", "Sol", "Vega", "Próxima Centauri"], c: 1 },
      { q: "Qual é o maior planeta do Sistema Solar?", a: ["Terra", "Saturno", "Júpiter", "Netuno"], c: 2 },
      { q: "Qual planeta é conhecido como Planeta Vermelho?", a: ["Vênus", "Marte", "Mercúrio", "Urano"], c: 1 },
      { q: "Qual é o satélite natural da Terra?", a: ["Sol", "Europa", "Lua", "Titã"], c: 2 },
      { q: "Quantos planetas existem no Sistema Solar?", a: ["7", "8", "9", "10"], c: 1 },
      { q: "Qual planeta é famoso por seus grandes anéis?", a: ["Saturno", "Marte", "Mercúrio", "Terra"], c: 0 },
      { q: "Como se chama a galáxia onde está o Sistema Solar?", a: ["Andrômeda", "Via Láctea", "Olho Negro", "Sombrero"], c: 1 },
      { q: "Qual é o planeta mais próximo do Sol?", a: ["Vênus", "Terra", "Mercúrio", "Marte"], c: 2 },
      { q: "O que é uma estrela?", a: ["Um planeta gelado", "Um corpo celeste que produz luz própria", "Um satélite", "Um asteroide"], c: 1 },
      { q: "Qual movimento da Terra é responsável pelos dias e noites?", a: ["Translação", "Rotação", "Gravitação", "Revolução lunar"], c: 1 }
    ]
  },
  {
    id: "math",
    name: "Matemática",
    icon: "📐",
    room: "math-room",
    title: "Templo da Matemática",
    description: "Chegou a hora de testar sua lógica! Resolva problemas, descubra padrões e mostre suas habilidades matemáticas.",
    decoration: "📐　📏　🔢",
    equipment: "🧮　📚　✏️",
    questions: [
      { q: "Quanto é 8 × 7?", a: ["54", "56", "64", "48"], c: 1 },
      { q: "Qual é a raiz quadrada de 81?", a: ["7", "8", "9", "10"], c: 2 },
      { q: "Quanto é 25% de 200?", a: ["25", "40", "50", "75"], c: 2 },
      { q: "Quantos lados possui um hexágono?", a: ["5", "6", "7", "8"], c: 1 },
      { q: "Qual é o resultado de 144 ÷ 12?", a: ["10", "11", "12", "14"], c: 2 },
      { q: "Qual é o valor de π aproximadamente?", a: ["2,14", "3,14", "4,13", "1,34"], c: 1 },
      { q: "Quanto é 15²?", a: ["125", "200", "225", "250"], c: 2 },
      { q: "Um triângulo possui quantos graus na soma de seus ângulos internos?", a: ["90°", "180°", "270°", "360°"], c: 1 },
      { q: "Qual é o próximo número da sequência: 2, 4, 8, 16, ...?", a: ["20", "24", "30", "32"], c: 3 },
      { q: "Quanto é 3/4 em porcentagem?", a: ["25%", "50%", "75%", "80%"], c: 2 }
    ]
  }
];

// ESTADO DO JOGO
let playerName = "";
let playerAvatar = "🧑🏻‍🔬";
let lives = 5;
let trophies = 0;
let completedStations = [];
let currentStation = null;
let currentQuestion = 0;
let selectedAnswer = false;
let nearbyStation = null;
let playerX = 50;
let playerY = 87;
let gameFinished = false;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function showScreen(screenId) {
  $$(".screen").forEach(screen => screen.classList.remove("active"));
  $("#" + screenId).classList.add("active");
}

function getPhaseIndex(id) {
  return phases.findIndex(phase => phase.id === id);
}

function getCurrentPhase() {
  return phases[completedStations.length] || null;
}

// PERSONAGEM
$$(".avatar-choice").forEach(button => {
  button.addEventListener("click", () => {
    $$(".avatar-choice").forEach(item => item.classList.remove("selected"));
    button.classList.add("selected");
    playerAvatar = button.dataset.avatar;
  });
});

$("#start-button").addEventListener("click", () => {
  const name = $("#player-name").value.trim();

  if (!name) {
    $("#player-name").focus();
    $("#player-name").placeholder = "Digite seu nome primeiro!";
    return;
  }

  playerName = name;
  $("#greeting").textContent = playerName;
  $("#player-sprite").textContent = playerAvatar;

  lives = 5;
  trophies = 0;
  completedStations = [];
  currentStation = null;
  currentQuestion = 0;
  gameFinished = false;
  playerX = 50;
  playerY = 87;

  updateStats();
  updateStations();
  placePlayer();
  showScreen("game");
});

// STATUS
function updateStats() {
  $("#lives").textContent = lives;
  $("#trophies").textContent = trophies;
  $("#quiz-lives").textContent = lives;
  $("#quiz-trophies").textContent = trophies;
  $("#phase-progress").textContent = `${completedStations.length}/5 fases concluídas`;

  const phase = getCurrentPhase();

  if (phase) {
    $("#phase-label").textContent =
      `FASE ${completedStations.length + 1} DE 5 — ${phase.name.toUpperCase()}`;
  } else {
    $("#phase-label").textContent = "TODAS AS FASES CONCLUÍDAS!";
  }
}

// ESTAÇÕES E FASES
function updateStations() {
  const activePhase = getCurrentPhase();

  $$(".station").forEach(station => {
    const id = station.dataset.station;
    const index = getPhaseIndex(id);
    const status = station.querySelector(".station-status");

    station.classList.remove("locked", "completed", "near");

    if (completedStations.includes(id)) {
      station.classList.add("completed");
      status.textContent = "CONCLUÍDA ✓";
    } else if (activePhase && id === activePhase.id) {
      status.textContent = "DISPONÍVEL";
    } else {
      station.classList.add("locked");
      status.textContent = "BLOQUEADA 🔒";
    }
  });

  checkNearby();
}

function isUnlocked(id) {
  const phase = getCurrentPhase();
  return phase !== null && phase.id === id;
}

// MOVIMENTAÇÃO
function placePlayer() {
  const player = $("#player");
  player.style.left = playerX + "%";
  player.style.top = playerY + "%";
}

function movePlayer(direction) {
  if (!$("#game").classList.contains("active") || gameFinished) return;

  const step = window.innerWidth < 650 ? 2.4 : 1.8;

  if (direction === "up") playerY -= step;
  if (direction === "down") playerY += step;
  if (direction === "left") playerX -= step;
  if (direction === "right") playerX += step;

  playerX = Math.max(7, Math.min(93, playerX));
  playerY = Math.max(10, Math.min(90, playerY));

  placePlayer();
  checkNearby();
}

document.addEventListener("keydown", event => {
  if (!$("#game").classList.contains("active")) return;

  const key = event.key.toLowerCase();
  const directions = {
    arrowup: "up",
    w: "up",
    arrowdown: "down",
    s: "down",
    arrowleft: "left",
    a: "left",
    arrowright: "right",
    d: "right"
  };

  if (directions[key]) {
    event.preventDefault();
    movePlayer(directions[key]);
  }

  if (key === "e" || key === "enter") {
    event.preventDefault();
    enterNearbyStation();
  }
});

$$(".mobile-controls button").forEach(button => {
  const direction = button.dataset.move;

  button.addEventListener("click", () => movePlayer(direction));

  button.addEventListener("touchstart", event => {
    event.preventDefault();
    movePlayer(direction);
  }, { passive: false });
});

// VERIFICAÇÃO DE PROXIMIDADE
function checkNearby() {
  const island = $("#island");
  if (!island) return;

  const islandRect = island.getBoundingClientRect();
  const playerCenterX = islandRect.left + islandRect.width * playerX / 100;
  const playerCenterY = islandRect.top + islandRect.height * playerY / 100;

  let closest = null;
  let closestDistance = Infinity;

  $$(".station").forEach(station => {
    station.classList.remove("near");

    const rect = station.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = centerX - playerCenterX;
    const dy = centerY - playerCenterY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < closestDistance) {
      closestDistance = distance;
      closest = station;
    }
  });

  nearbyStation = null;
  const enterButton = $("#enter-button");

  if (closest && closestDistance < 95) {
    const id = closest.dataset.station;
    closest.classList.add("near");

    if (isUnlocked(id)) {
      nearbyStation = id;
      $("#nearby").textContent = `Você está perto da estação de ${getPhaseName(id)}!`;
      enterButton.disabled = false;
      enterButton.textContent = `ENTRAR EM ${getPhaseName(id).toUpperCase()}`;
    } else if (completedStations.includes(id)) {
      $("#nearby").textContent = "Você já concluiu esta estação! Procure a próxima.";
      enterButton.disabled = true;
      enterButton.textContent = "ESTAÇÃO CONCLUÍDA";
    } else {
      $("#nearby").textContent = "Esta estação ainda está bloqueada. Conclua a fase anterior!";
      enterButton.disabled = true;
      enterButton.textContent = "FASE BLOQUEADA 🔒";
    }
  } else {
    $("#nearby").textContent = "Explore a ilha e aproxime-se de uma barraca!";
    enterButton.disabled = true;
    enterButton.textContent = "APROXIME-SE DE UMA BARRACA";
  }

  updateStationsStatusOnly();
}

function updateStationsStatusOnly() {
  $$(".station").forEach(station => {
    if (station.dataset.station === nearbyStation) {
      station.classList.add("near");
    }
  });
}

function getPhaseName(id) {
  const phase = phases.find(item => item.id === id);
  return phase ? phase.name : "";
}

// TOQUE NA BARRACA PARA SE APROXIMAR E ENTRAR
$$(".station").forEach(station => {
  station.addEventListener("click", () => {
    const id = station.dataset.station;

    if (!isUnlocked(id)) {
      if (completedStations.includes(id)) {
        $("#nearby").textContent = "Você já concluiu essa fase!";
      } else {
        $("#nearby").textContent = "Essa barraca está bloqueada! Termine a fase atual primeiro.";
      }
      return;
    }

    const x = parseFloat(station.style.getPropertyValue("--x"));
    const y = parseFloat(station.style.getPropertyValue("--y"));

    playerX = x;
    playerY = Math.min(91, y + 10);
    placePlayer();
    checkNearby();

    nearbyStation = id;
    enterStation(id);
  });
});

$("#enter-button").addEventListener("click", () => {
  if (nearbyStation) enterStation(nearbyStation);
});

function enterNearbyStation() {
  if (nearbyStation) enterStation(nearbyStation);
}

// ENTRADA NA ESTAÇÃO
function enterStation(id) {
  if (!isUnlocked(id)) {
    $("#nearby").textContent = "Conclua a fase anterior para desbloquear esta barraca!";
    return;
  }

  currentStation = id;
  const phase = phases.find(item => item.id === id);

  if (!phase) return;

  $("#room").className = "room " + phase.room;
  $("#room-icon").textContent = phase.icon;
  $("#room-title").textContent = phase.title;
  $("#room-description").textContent = phase.description;
  $("#room-decoration").textContent = phase.decoration;
  $("#room-equipment").textContent = phase.equipment;
  $("#room-challenge").textContent =
    `Responda às 10 perguntas de ${phase.name} para conquistar seu troféu!`;

  $("#room-start").textContent = "COMEÇAR DESAFIO";
  $("#room-start").onclick = startQuiz;

  showScreen("interior");
}

$("#back-map").addEventListener("click", () => {
  showScreen("game");
  currentStation = null;
  nearbyStation = null;
  checkNearby();
});

// QUIZ
function startQuiz() {
  if (!currentStation || !isUnlocked(currentStation)) return;

  currentQuestion = 0;
  showScreen("quiz");
  showQuestion();
}

function showQuestion() {
  const phase = phases.find(item => item.id === currentStation);

  if (!phase) return;

  const question = phase.questions[currentQuestion];
  selectedAnswer = false;

  $("#quiz-icon").textContent = phase.icon;
  $("#quiz-title").textContent = phase.name;
  $("#quiz-phase").textContent = `FASE ${getPhaseIndex(currentStation) + 1} DE 5`;

  $("#question-number").textContent =
    `PERGUNTA ${currentQuestion + 1} DE 10`;

  const percentage = ((currentQuestion + 1) / 10) * 100;
  $("#progress").style.width = percentage + "%";
  $("#progress-percent").textContent = percentage + "%";

  $("#question").textContent = question.q;
  $("#feedback").textContent = "";
  $("#feedback").className = "feedback";

  $("#next-button").disabled = true;
  $("#next-button").textContent =
    currentQuestion === 9 ? "FINALIZAR FASE" : "PRÓXIMA PERGUNTA";

  const answersContainer = $("#answers");
  answersContainer.innerHTML = "";

  question.a.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-option";
    button.textContent = `${String.fromCharCode(65 + index)}) ${answer}`;

    button.addEventListener("click", () => checkAnswer(index, button));

    answersContainer.appendChild(button);
  });

  updateStats();
}

function checkAnswer(index, selectedButton) {
  if (selectedAnswer) return;
  selectedAnswer = true;

  const phase = phases.find(item => item.id === currentStation);
  const question = phase.questions[currentQuestion];
  const answerButtons = $$(".answer-option");

  answerButtons.forEach(button => button.disabled = true);

  if (index === question.c) {
    selectedButton.classList.add("correct");
    $("#feedback").textContent = "Muito bem! Resposta correta! +1 troféu";
    $("#feedback").className = "feedback good";
    trophies++;
  } else {
    selectedButton.classList.add("wrong");
    answerButtons[question.c].classList.add("correct");
    lives--;

    $("#feedback").textContent =
      `Ops! Não foi dessa vez. A resposta certa era: ${question.a[question.c]}.`;

    $("#feedback").className = "feedback bad";
  }

  updateStats();
  $("#next-button").disabled = false;

  if (lives <= 0) {
    $("#next-button").textContent = "VER RESULTADO";
  }
}

$("#next-button").addEventListener("click", () => {
  if (!selectedAnswer) return;

  if (lives <= 0) {
    finishGame(false);
    return;
  }

  if (currentQuestion < 9) {
    currentQuestion++;
    showQuestion();
  } else {
    completePhase();
  }
});

// CONCLUSÃO DE FASE
function completePhase() {
  if (!currentStation || completedStations.includes(currentStation)) return;

  completedStations.push(currentStation);

  const finishedPhase = phases.find(item => item.id === currentStation);
  const allDone = completedStations.length === phases.length;

  if (allDone) {
    finishGame(true);
    return;
  }

  updateStats();
  updateStations();

  $("#room").className = "room " + finishedPhase.room;
  $("#room-icon").textContent = "🏆";
  $("#room-title").textContent = "Fase concluída!";
  $("#room-description").textContent =
    `Parabéns, ${playerName}! Você terminou o desafio de ${finishedPhase.name}.`;

  $("#room-decoration").textContent = "⭐　🏆　⭐";
  $("#room-equipment").textContent = "🎉　🌴　🎉";
  $("#room-challenge").textContent =
    "Sua próxima aventura já está liberada. Volte ao mapa e encontre a nova estação!";

  $("#room-start").textContent = "CONTINUAR A AVENTURA";
  $("#room-start").onclick = () => {
    currentStation = null;
    nearbyStation = null;
    playerX = 50;
    playerY = 87;
    placePlayer();
    showScreen("game");
    checkNearby();
  };

  showScreen("interior");
}

// SAIR DO QUIZ
$("#quit-quiz").addEventListener("click", () => {
  if (!currentStation) {
    showScreen("game");
    return;
  }

  enterStation(currentStation);
});

// FINAL DO JOGO
function finishGame(victory) {
  gameFinished = true;

  $("#final-trophies").textContent = trophies;
  $("#final-lives").textContent = lives;
  $("#final-stations").textContent = `${completedStations.length}/5`;

  if (victory) {
    $("#result-icon").textContent = "🏝️";
    $("#result-title").textContent = `Você conseguiu, ${playerName}!`;
    $("#result-message").textContent =
      "Você completou todas as cinco fases da Science Island. Uma verdadeira aventura pelo conhecimento!";
  } else {
    $("#result-icon").textContent = "💫";
    $("#result-title").textContent = "Fim de jogo!";
    $("#result-message").textContent =
      `Você chegou a ${completedStations.length} de 5 fases. Não desista, ${playerName}! O conhecimento sempre vale uma nova tentativa.`;
  }

  showScreen("result");
}

// RECOMEÇAR
$("#restart-button").addEventListener("click", () => {
  lives = 5;
  trophies = 0;
  completedStations = [];
  currentStation = null;
  currentQuestion = 0;
  nearbyStation = null;
  gameFinished = false;
  playerX = 50;
  playerY = 87;

  updateStats();
  updateStations();
  placePlayer();
  showScreen("game");
});

// INICIALIZAÇÃO
updateStats();
updateStations();
placePlayer();
