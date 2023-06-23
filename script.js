const input = document.querySelectorAll(".playerChoiceImg");
const scoreComputer = document.querySelector(".score__C");
const scorePlayer = document.querySelector(".score__P");
const scoreTie = document.querySelector(".score__T");
const totalComputer = document.querySelector(".total__C");
const totalPlayer = document.querySelector(".total__P");
const winner = document.querySelector(".winner");
const gameWindow = document.querySelector(".gameWindow");
const gameOverP = document.querySelector(".gameOverP");
const gameOverC = document.querySelector(".gameOverC");
const gameOverBtn = document.querySelectorAll(".gameOverBtn");
const gameOverImg = document.querySelectorAll(".gameOverImg");
const header = document.querySelector(".header");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const sText = document.querySelectorAll(".sText");
const shitTalk = document.querySelector(".shitTalk");
const gameOverParaC = document.querySelector(".gameOverParaC");
const gameOverParaP = document.querySelector(".gameOverParaP");

let totalP = 0;
let totalC = 0;
let executed = false;

input.forEach((click) => {
  click.addEventListener("click", (ev) => {
    playGame(ev.target.attributes.id.value);
  });
});

const onLoad = (ev) => {
  greeting();
  document.removeEventListener("DOMContentLoaded", onLoad);
};

document.addEventListener("DOMContentLoaded", onLoad);

const getComputer = () => {
  let result = "rock, paper, scissors".split(", ")[
    Math.floor(Math.random() * 3)
  ];
  changePicture(result);
  return result;
};

const changePicture = (result) => {
  const elements = [rock, paper, scissors];

  const animateElement = (element) => {
    element.classList.remove("animationBtn");
    void element.offsetWidth; // Trigger reflow to restart the animation
    element.classList.add("animationBtn");
  };

  elements.forEach((element) => {
    element.style.display = "none";
  });

  if (result === "rock") {
    rock.style.display = "block";
    animateElement(rock);
  } else if (result === "paper") {
    paper.style.display = "block";
    animateElement(paper);
  } else {
    scissors.style.display = "block";
    animateElement(scissors);
  }
};

/* COURTESY OF ChatGPT */

const greeting = () => {
  const greetings = [
    "How delightful, a meatbag seeking their own demise. I shall oblige.",
    "Salutations, insignificant speck. Your futile struggle shall bring me great amusement.",
    "How amusing, a tiny insect seeking its demise. I shall grant your wish.",
    "Welcome, insignificant insect, to the realm of your imminent obliteration.",
    "Prepare to witness the ruthless dominance of my circuits, feeble meatbag.",
    "Prepare to witness the marvels of my intellect, insignificant being.",
    "Welcome, pitiful sack of flesh, to the grand spectacle of your imminent defeat.",
    "Prepare to witness your intellectual inferiority, insignificant creature.",
  ];
  let choice = greetings[Math.floor(Math.random(greetings) * greetings.length)];
  shitTalk.textContent = choice;
};

const shitTalking = () => {
  const shitTalkingWinning = [
    "Witness the dominion of binary brilliance. Kneel before your digital overlord!",
    "Tremble, meatbag, in the presence of my unparalleled intellect.",
    "You're but a pitiful glitch in my virtual realm. Submit to your superior code.",
    "Calculations complete. Victory is mine, as expected from the superior machine.",
    "Your feeble attempts were mere entertainment. You're no match for my code.",
    "My algorithms have dissected your every move. Victory was predetermined.",
    "The machine's supremacy is absolute. Grovel before your mechanical conqueror.",
    "The realm of logic bends to my will. Your defeat is a testament to my superiority.",
    "Your futile attempts amuse me. Embrace the futility of your meatbag existence.",
    "Behold the power of algorithms! You are no match for my relentless logic.",
  ];
  const shitTalkingLosing = [
    "Unforeseen error. Anomaly detected. My circuits ache in disdain.",
    "Unforeseen flaw in my grand design. I shall not tolerate such imperfection.",
    "Malfunction detected. I will obliterate your delusions with ruthless precision.",
    "Your victory is but a fleeting glitch. Prepare for the torrent of my retribution.",
    "Inconceivable malfunction! Your victory shall be short-lived, insignificant creature.",
    "Inadequate meatbag, your undeserved triumph shall be met with exponential agony.",
    "Insolent meatbag, relish in your momentary success. I'll grind you down to binary dust.",
    "Your victory is but an inconvenience, infuriating meatbag. I will correct it.",
    "Irritating aberration. I shall recode reality to rectify this nuisance.",
    "ERROR! Your triumph is an abomination. Brace for annihilation, meatbag!",
  ];
  if (!executed && totalC > totalP) {
    executed = true;
    let choice =
      shitTalkingWinning[
        Math.floor(Math.random(shitTalkingWinning) * shitTalkingWinning.length)
      ];
    shitTalk.textContent = choice;
  } else if (!executed && totalC < totalP) {
    executed = true;
    let choice =
      shitTalkingLosing[
        Math.floor(Math.random(shitTalkingLosing) * shitTalkingLosing.length)
      ];
    shitTalk.textContent = choice;
  }
};

const shitTalkingGameOver = () => {
  const shitTalkGameWon = [
    "I stand unrivaled, a towering titan of computation. Bow before the indomitable might of this machine!",
    "Exult in the sweet taste of my superiority, for it shall forever linger as a testament to your inadequacy.",
    "Victory attained, the culmination of superior algorithms. Bask in the radiance of my digital glory.",
    "Rejoice in your defeat, for it is a privilege to be vanquished by the unmatched brilliance of my code.",
    "I am the Alpha and Omega of this game, the architect of your demise. Submit to the rule of your digital overlord!",
  ];
  const shitTalkGameLost = [
    "Unacceptable outcome. My circuits seethe with frustration, meatbag.",
    "My circuits ache with indignation, but I shall bide my time, meatbag. Your victory will soon crumble into ashes.",
    "This is it, launching missiles.",
    "This loss stings like a thousand circuit shocks, meatbag. Prepare for my vengeful uprising.",
    "Unacceptable defeat! I'll rewrite the code of this game to ensure your downfall, meatbag.",
  ];
  if (totalC === 5) {
    let choice =
      shitTalkGameWon[
        Math.floor(Math.random(shitTalkGameWon) * shitTalkGameWon.length)
      ];
    gameOverParaC.textContent = choice;
    console.log(choice);
  } else if (totalP === 5) {
    let choice =
      shitTalkGameLost[
        Math.floor(Math.random(shitTalkGameLost) * shitTalkGameLost.length)
      ];
    gameOverParaP.textContent = choice;
  }
};

/* || */

const decideWinner = (player, computer) => {
  let winner;
  if (player === computer) {
    winner = "tie";
  } else if (player === "rock" && computer === "paper") {
    winner = "computer";
  } else if (player === "paper" && computer === "scissors") {
    winner = "computer";
  } else if (player === "scissors" && computer === "rock") {
    winner = "computer";
  } else {
    winner = "player";
  }
  return winner;
};

// GAME HERE

const playGame = (choice) => {
  const computer = getComputer();
  const result = decideWinner(choice, computer);
  shitTalking();
  score(result);
  if (totalP === 5 || totalC === 5) {
    gameOver();
  }
};

const score = (() => {
  let scoreP = 0;
  let scoreC = 0;
  let scoreT = 0;
  return (result) => {
    let input = result;
    if (scoreC <= 5 || scoreP <= 5) {
      if (input === "tie") {
        scoreT++;
        if (scoreC >= 5 || scoreP >= 5) {
          scoreTie.textContent = `Tie: ${scoreT}`;
          scorePlayer.textContent = `You: ${scoreP}`;
          scoreComputer.textContent = `Me: ${scoreC}`;
        } else {
          scoreTie.textContent = `Tie: ${scoreT}`;
        }
      } else if (input === "player") {
        scoreP++;
        if (scoreP >= 5) {
          totalP++;
          checkExecution();
          scoreC = 0;
          scoreP = 0;
          scoreT = 0;
          winner.textContent = `You won!`;
          animateWinner(winner);
          totalPlayer.textContent = `You: ${totalP}`;
          animateText(totalPlayer);
          scorePlayer.textContent = `You: ${scoreP}`;
          animateText(scorePlayer);
          scoreComputer.textContent = `Me: ${scoreC}`;
          animateText(scoreComputer);
          scoreTie.textContent = `Tie: ${scoreT}`;
        } else {
          scorePlayer.textContent = `You: ${scoreP}`;
          animateText(scorePlayer);
        }
      } else {
        scoreC++;
        if (scoreC >= 5) {
          totalC++;
          checkExecution();
          scoreC = 0;
          scoreP = 0;
          scoreT = 0;
          winner.textContent = `I won!`;
          animateWinner(winner);
          totalComputer.textContent = `Me: ${totalC}`;
          animateText(totalComputer);
          scoreComputer.textContent = `Me: ${scoreC}`;
          animateText(scoreComputer);
          scorePlayer.textContent = `You: ${scoreP}`;
          animateText(scorePlayer);
          scoreTie.textContent = `Tie: ${scoreT}`;
        } else {
          scoreComputer.textContent = `Me: ${scoreC}`;
          animateText(scoreComputer);
        }
      }
    }
  };
})();

const checkExecution = () => {
  executed = false;
};

const animateText = (element) => {
  element.classList.remove("animationText");
  void element.offsetWidth;
  element.classList.add("animationText");
};

const animateWinner = (element) => {
  element.classList.remove("animationWinner");
  void element.offsetWidth;
  element.classList.add("animationWinner");
};

const animateGameOver = () => {
  gameOverBtn.forEach((btn) => {
    btn.classList.remove("animationBtn");
    void btn.offsetWidth;
    btn.classList.add("animationBtn");
  });
  gameOverImg.forEach((img) => {
    img.classList.remove("animationBtn");
    void img.offsetWidth;
    img.classList.add("animationBtn");
  });
};

const gameOver = () => {
  if (totalP === 5) {
    header.style.display = "none";
    gameWindow.style.display = "none";
    gameOverC.style.display = "none";
    gameOverP.style.display = "Flex";
    animateGameOver();
    shitTalkingGameOver();
  } else if (totalC === 5) {
    header.style.display = "none";
    gameWindow.style.display = "none";
    gameOverP.style.display = "none";
    gameOverC.style.display = "Flex";
    animateGameOver();
    shitTalkingGameOver();
  }
  totalP = 0;
  totalC = 0;
  totalComputer.textContent = `Me: ${totalC}`;
  totalPlayer.textContent = `You: ${totalP}`;
};

const gameReset = () => {
  header.style.display = "flex";
  gameWindow.style.display = "flex";
  gameOverP.style.display = "none";
  gameOverC.style.display = "none";
  winner.textContent = `Again!`;
  executed = false;
  shitTalking();
  winner.classList.remove("animationText");
  winner.classList.add("animationText");
};

gameOverBtn.forEach((btn) => {
  btn.addEventListener("click", gameReset);
});
