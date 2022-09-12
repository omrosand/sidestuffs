const quoteParagraph = document.getElementById("quote");

const apiKey = "KsFGLH8zYLZN9zBGGs9f";
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${apiKey}`,
};
const quotesCall = "https://the-one-api.dev/v2/quote";
const charactersCall = "https://the-one-api.dev/v2/character";

const fetchQuotesAndCharacters = async () => {
  const recievedQuotes = await fetch(quotesCall, {
    headers: headers,
  });
  const quotes = await recievedQuotes.json();
  const quote = quotes.docs[Math.floor(Math.random() * quotes.docs.length)];

  quoteParagraph.innerHTML = `"${quote.dialog}"`;

  const correctCharacter = await fetch(
    charactersCall + "?_id=" + quote.character,
    {
      headers: headers,
    }
  );
  const characters = await correctCharacter.json();
  const character = characters.docs[0];
  twoCharacters.push(character.name);
  correctAnswer = character.name;

  const randomCharacter = await fetch(charactersCall, {
    headers: headers,
  });
  const moreCharacters = await randomCharacter.json();
  console.log(moreCharacters.docs.length);
  const wrongCharacter =
    moreCharacters.docs[Math.floor(Math.random() * moreCharacters.docs.length)];
  twoCharacters.push(wrongCharacter.name);

  console.log(`${quote.dialog} - ${character.name}`);
};

const twoCharacters = [];
let correctAnswer = null;

const shuffleCharacters = (twoCharacters) => {
  for (let i = twoCharacters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = twoCharacters[i];
    twoCharacters[i] = twoCharacters[j];
    twoCharacters[j] = temp;
  }
  return twoCharacters;
};

const guessBtn1 = document.getElementById("guessBtn1");
const guessBtn2 = document.getElementById("guessBtn2");

const shuffledCharacters = shuffleCharacters(twoCharacters);

const handleGuess = (e) => {
  const target = e.target.nodeText;
  console.log(target);
};

guessBtn1.addEventListener("click", handleGuess);
guessBtn2.addEventListener("click", handleGuess);

console.log(shuffledCharacters);

guessBtn1.innerHTML = shuffledCharacters[0];
guessBtn2.innerHTML = shuffledCharacters[1];

fetchQuotesAndCharacters();
