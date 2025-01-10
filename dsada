import React, { useState } from "react";
import Card from "./Card";
import generateRandomAttributes from "./randomAttributes";
import "./App.css";

const App = () => {
  const [cards, setCards] = useState(
    Array.from({ length: 12 }, () => ({
      id: crypto.randomUUID(), // Генерируем уникальный идентификатор
      ...generateRandomAttributes(),
      revealed: {
        health: false,
        profession: false,
        hobby: false,
        age: false,
        phobia: false,
      },
      playerName: `Игрок ${Math.floor(Math.random() * 100)}`, // Для примера
    }))
  );

  const toggleReveal = (id, key) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id
          ? {
              ...card,
              revealed: { ...card.revealed, [key]: !card.revealed[key] },
            }
          : card
      )
    );
  };

  const updatePlayerName = (id, newName) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, playerName: newName } : card
      )
    );
  };

  const deleteCard = (id) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  return (
    <div className="app">
      <h1>Игра "Бункер"</h1>
      <div className="cards-container">
        {cards.map((card) => (
          <Card
            key={card.id} // Используем уникальный id как ключ
            attributes={card}
            onToggle={(key) => toggleReveal(card.id, key)}
            playerName={card.playerName}
            onNameChange={(newName) => updatePlayerName(card.id, newName)}
            onDelete={() => deleteCard(card.id)} // Передаем id карточки
          />
        ))}
      </div>
    </div>
  );
};

export default App;
