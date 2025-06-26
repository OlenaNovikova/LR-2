const questions = [
  {
    question: "Що таке IP-адреса?",
    options: [
      "Тип кабелю для з’єднання",
      "Програма для керування мережею",
      "Унікальний ідентифікатор пристрою в мережі",
      "Назва комп’ютера"
    ],
    correct: 2,
  },
  {
    question: "Яка модель описує 7 рівнів взаємодії в мережах?",
    options: ["TCP/IP", "DNS", "OSI", "HTTP"],
    correct: 2,
  },
  {
    question: "Яке обладнання з’єднує кілька локальних мереж?",
    options: ["Комутатор", "Маршрутизатор", "Принтер", "Кабель"],
    correct: 1,
  },
  {
    question: "Що таке DNS?",
    options: [
      "Пристрій для зберігання даних",
      "Система безпеки",
      "Служба перетворення доменних імен у IP",
      "Програма для редагування сайтів",
    ],
    correct: 2,
  },
  {
    question: "Що з наведеного є протоколом передачі даних?",
    options: ["HDMI", "TCP", "USB", "SSD"],
    correct: 1,
  },
  {
    question: "Який тип мережі охоплює великі відстані?",
    options: ["LAN", "PAN", "WAN", "WLAN"],
    correct: 2,
  },
  {
    question: "Для чого використовується комутатор (switch)?",
    options: [
      "Друк документів",
      "З’єднання пристроїв в одній мережі",
      "Роздача Wi-Fi",
      "Резервне копіювання",
    ],
    correct: 1,
  },
  {
    question: "Що забезпечує DHCP-сервер?",
    options: [
      "Захист мережі",
      "Автоматичну видачу IP-адрес",
      "Резервне копіювання",
      "Відеозв’язок",
    ],
    correct: 1,
  },
  {
    question: "Який протокол забезпечує захищене з’єднання в Інтернеті?",
    options: ["FTP", "HTTP", "HTTPS", "SSH"],
    correct: 2,
  },
  {
    question: "Що таке пакет даних у мережі?",
    options: [
      "Група кабелів",
      "Упакований пристрій",
      "Частина переданої інформації",
      "Мережева карта",
    ],
    correct: 2,
  },
];

async function runQuiz() {
  let score = 0;

  for (const [index, q] of questions.entries()) {
    console.log(`\nПитання ${index + 1}: ${q.question}`);
    q.options.forEach((opt, i) => console.log(`  ${i}: ${opt}`));

    
    let answer = prompt(`Введіть номер правильної відповіді (0-${q.options.length - 1}):`);

    answer = Number(answer);
    if (answer === q.correct) {
      console.log("Правильно!");
      score++;
    } else {
      console.log(`Неправильно! Правильна відповідь: ${q.options[q.correct]}`);
    }
  }

  console.log(`\nВи відповіли правильно на ${score} з ${questions.length} питань.`);
}

runQuiz();

