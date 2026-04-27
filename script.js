const sayings = [
  {
    quote: "Z graczkōw przidōm płaczki",
    explanation:
      "Używamy tego ostrzegawczo, najczęściej wobec dzieci, gdy zabawa zaczyna iść w stronę łez i kłótni.",
  },
  {
    quote: "Fulosz jak mulorz",
    explanation:
      "Tak mówimy, kiedy ktoś opowiada kompletne bzdury i gubi sens z każdym kolejnym zdaniem.",
  },
  {
    quote: "Wiyszać nudle na uszy",
    explanation:
      "Zwrot o świadomym wciskaniu kitu, czyli o sytuacji, gdy ktoś próbuje nas oszukać ładnymi słowami.",
  },
  {
    quote: "Zygor ci wancki cisnōm",
    explanation:
      "Kierowane do notorycznych spóźnialskich, którym zegarek wyraźnie chodzi po swojemu.",
  },
  {
    quote: "Szpicato godka",
    explanation:
      "Rozmowa pełna przytyków i drobnych uszczypliwości, bardziej walka na słowa niż spokojny dialog.",
  },
  {
    quote: "Mimry z mamrami",
    explanation:
      "Określenie czegoś robionego byle jak, bez pomysłu i bez większej jakości.",
  },
  {
    quote: "Godka ku szkubaczce",
    explanation:
      "Luźna pogawędka o niczym konkretnym - dużo mówienia, mało konkretu.",
  },
  {
    quote: "Mosz czasu jak marasu",
    explanation:
      "Mówimy tak, żeby kogoś uspokoić: czasu jest jeszcze sporo, więc nie ma sensu panikować.",
  },
  {
    quote: "Niy mieć wszyjskich w doma",
    explanation:
      "Zwrot o kimś, kto zachowuje się nierozsądnie i mówi rzeczy całkiem oderwane od rzeczywistości.",
  },
  {
    quote: "Godać kōmu do lacza",
    explanation:
      "Opisuje sytuację, gdy mówimy coś ważnego, a druga strona kompletnie nas ignoruje.",
  },
  {
    quote: "Mosz ôczy z knefli",
    explanation:
      "Hasło rzucane, gdy ktoś ewidentnie czegoś nie dopatrzył - szczególnie często w sportowych emocjach.",
  },
  {
    quote: "Brać graczki a ciś na swōj plac",
    explanation:
      "Stanowcze zakończenie rozmowy: zabieraj swoje rzeczy i daj mi spokój.",
  },
  {
    quote: "Jeżeś lichy choby sucho wilijo",
    explanation:
      "Żartobliwe stwierdzenie, że ktoś wygląda na bardzo wychudzonego i koniecznie trzeba go porządnie nakarmić.",
  },
  {
    quote: "Niy być już zaś tako chwolno rzić",
    explanation:
      "Przestroga przed przechwalaniem się, zwłaszcza gdy nasze osiągnięcie nie jest aż tak wielkie.",
  },
  {
    quote: "Drzić sie choby stare galoty",
    explanation:
      "Mówimy o kimś, kto bardzo głośno krzyczy i robi wokół siebie przesadny hałas.",
  },
  {
    quote: "Grać ô tytka szklokōw",
    explanation:
      "Zwrot o rywalizacji o drobiazg - stawka mała, ale emocje potrafią być całkiem duże.",
  },
  {
    quote: "Lepij nosić jak sie prosić",
    explanation:
      "Klasyczne przypomnienie, że lepiej zrobić coś samemu od razu, niż potem prosić o pomoc.",
  },
  {
    quote: "Niy lyj sie żurym!",
    explanation:
      "Słowa zachęcające, żeby przestać udawać i nie kombinować, tylko przejść do konkretów.",
  },
  {
    quote: "Mosz kudły choby pierōn w rabarber trzas",
    explanation:
      "Komentarz na temat fryzury, gdy włosy są już w totalnym nieładzie i proszą się o fryzjera.",
  },
  {
    quote: "Mocie muskle choby żyniaty kopruch",
    explanation:
      "Przekorne określenie na bardzo mizerną kondycję - taki sygnał, że przydałoby się trochę ruchu.",
  },
  {
    quote: "Mieć piosek w rynkowach",
    explanation:
      "Mówimy tak o kimś, kto wyraźnie unika roboty i szuka każdej okazji, żeby się nie napracować.",
  },
  {
    quote: "Robiōm cosik na ôstatni driker",
    explanation:
      "Opis działania na ostatnią chwilę, kiedy terminy już niemal pukają do drzwi.",
  },
  {
    quote: "Wczora prziszliście do kościoła farorza seblyc",
    explanation:
      "Bardzo potoczny i zaczepny zwrot, zrozumiały głównie dla wtajemniczonych w śląski kontekst językowy.",
  },
];

const quoteNode = document.getElementById("saying-quote");
const explanationNode = document.getElementById("saying-explanation");
const heroPhotoNode = document.getElementById("hero-random-photo");
const menuToggleNode = document.getElementById("menu-toggle");
const siteMenuNode = document.getElementById("site-menu");

// Add more filenames here when you drop new images into the project root.
const heroPhotos = [
  {
    src: "slask.jpg",
    alt: "Industrialny krajobraz Górnego Śląska z elementami kolejnictwa",
  },
  {
    src: "slask2.jpg",
    alt: "Krajobraz przemysłowy Górnego Śląska",
  },
  {
    src: "slask3.jpg",
    alt: "Dziedzictwo przemysłowe Górnego Śląska",
  },
  {
    src: "slask4.jpg",
    alt: "Śląska architektura i klimat regionu",
  },
];

if (quoteNode && explanationNode && sayings.length > 0) {
  const randomIndex = Math.floor(Math.random() * sayings.length);
  const selected = sayings[randomIndex];

  quoteNode.textContent = `„${selected.quote}”`;
  explanationNode.textContent = selected.explanation;
}

if (heroPhotoNode && heroPhotos.length > 0) {
  const randomIndex = Math.floor(Math.random() * heroPhotos.length);
  const selected = heroPhotos[randomIndex];

  heroPhotoNode.src = selected.src;
  heroPhotoNode.alt = selected.alt;
}

if (menuToggleNode && siteMenuNode) {
  const closeMenu = () => {
    siteMenuNode.classList.remove("is-open");
    menuToggleNode.setAttribute("aria-expanded", "false");
  };

  menuToggleNode.addEventListener("click", () => {
    const isOpen = siteMenuNode.classList.toggle("is-open");
    menuToggleNode.setAttribute("aria-expanded", String(isOpen));
  });

  siteMenuNode.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}
