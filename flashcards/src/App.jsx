import { useState } from "react";
import "./App.css";

const cards = [
  { id: 1, question: "Which pizza chain is known for its stuffed crust?", answer: "Pizza Hut", color: "#c8102e" },
  { id: 2, question: "Which chain has the slogan 'Better Ingredients, Better Pizza'?", answer: "Papa John's", color: "#006341" },
  { id: 3, question: "Which pizza place is famous for its $5 Hot-N-Ready?", answer: "Little Caesars", color: "#ff6600" },
  { id: 4, question: "Which chain is known for its Domino mascot?", answer: "Domino's", color: "#006491" },
  { id: 5, question: "Which pizza chain originated in the DC/Maryland area?", answer: "Ledo Pizza", color: "#8b0000" },
  { id: 6, question: "Which chain's logo features a red roof?", answer: "Pizza Hut", color: "#c8102e" },
  { id: 7, question: "Which chain is known for its garlic dipping sauce?", answer: "Papa John's", color: "#006341" },
  { id: 8, question: "Which chain was founded in Ypsilanti, Michigan in 1960?", answer: "Domino's", color: "#006491" },
  { id: 9, question: "Which chain is known for its square-cut thin crust pizza?", answer: "Ledo Pizza", color: "#8b0000" },
  { id: 10, question: "Which chain is famous for its Crazy Bread?", answer: "Little Caesars", color: "#ff6600" },
  { id: 11, question: "Which chain has the most locations worldwide?", answer: "Domino's", color: "#006491" },
  { id: 12, question: "Which chain's founder is named 'Papa' John Schnatter?", answer: "Papa John's", color: "#006341" },
];
function getRandomIndex(exclude, total) {
  let idx;
  do { idx = Math.floor(Math.random() * total); } while (idx === exclude && total > 1);
  return idx;
}

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = cards[currentIndex];

  function handleNext() {
    setFlipped(false);
    setTimeout(() => {
      setCurrentIndex(getRandomIndex(currentIndex, cards.length));
    }, 200);
  }

  return (
    <div className="app">
      <header>
        <h1>🍕 Pizza Trivia</h1>
        <p>How well do you know your pizza chains?</p>
        <span className="count">{cards.length} cards</span>
      </header>

      <div className="card-container" onClick={() => setFlipped(!flipped)}>
        <div className={`card-inner ${flipped ? "flipped" : ""}`}>
          <div className="card-face card-front">
            <p>{card.question}</p>
            <span className="hint">tap to reveal</span>
          </div>
          <div
            className="card-face card-back"
            style={{ background: card.color, borderColor: card.color }}
          >
            <p>{card.answer}</p>
          </div>
        </div>
      </div>

      <button className="next-btn" onClick={handleNext}>
        Next Card →
      </button>
    </div>
  );
}