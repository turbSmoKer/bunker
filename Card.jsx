import React, { useState } from "react";

const Card = ({ attributes, onToggle, playerName, onNameChange, onDelete }) => {
  const { revealed, health, profession, hobby, age, phobia, backpack, fact, moovea, moovem } = attributes;
  const [isDeleted, setIsDeleted] = useState(false);

  const handleToggle = (key) => {
    onToggle(key);
  };

  const handleNameChange = (event) => {
    onNameChange(event.target.value);
  };
  
  const downloadAttributes = () => {
    let content = `Игрок: ${playerName}\n`;

    content += `Здоровье: ${health.disease} (Тяжесть: ${health.severity})\n`;
    content += `Профессия: ${profession}\n`;
    content += `Хобби: ${hobby}\n`;
    content += `Возраст: ${age}\n`;
    content += `Фобия: ${phobia}\n`;
    content += `Рюкзак: ${backpack}\n`;
    content += `Факт: ${fact}\n`;
    content += `Карточка 1: ${moovea}\n`;
    content += `Карточка 2: ${moovem}\n`;

    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${playerName}_attributes.txt`;
    link.click();
  };

  const handleDelete = () => {
    setIsDeleted(true);
    onDelete(); // Вызываем функцию удаления
  };

  if (isDeleted) return null;

  return (
    <div className="card">
      <input
        type="text"
        value={playerName}
        onChange={handleNameChange}
        className="player-name"
      />
      <p onClick={() => handleToggle("health")}>
        Здоровье: {revealed.health ? `${health.disease} (Тяжесть: ${health.severity})` : "---"}
      </p>
      <p onClick={() => handleToggle("profession")}>
        Профессия: {revealed.profession ? profession : "---"}
      </p>
      <p onClick={() => handleToggle("hobby")}>
        Хобби: {revealed.hobby ? hobby : "---"}
      </p>
      <p onClick={() => handleToggle("age")}>
        Возраст: {revealed.age ? age : "---"}
      </p>
      <p onClick={() => handleToggle("phobia")}>
        Фобия: {revealed.phobia ? phobia : "---"}
      </p>
      <p onClick={() => handleToggle("backpack")}>
        Рюкзак: {revealed.backpack ? backpack : "---"}
      </p>
      <p onClick={() => handleToggle("fact")}>
        Факт: {revealed.fact ? fact : "---"}
      </p>
      <p onClick={() => handleToggle("moovea")}>
        Карточка 1: {revealed.moovea ? moovea : "---"}
      </p>
      <p onClick={() => handleToggle("moovem")}>
        Карточка 2: {revealed.moovem ? moovem : "---"}
      </p>

      <button onClick={downloadAttributes}>Скачать характеристики</button>
      <button onClick={handleDelete}>Удалить</button>
    </div>
  );
};

export default Card;
