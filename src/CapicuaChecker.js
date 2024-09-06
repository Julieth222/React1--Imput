
import React, { useState } from 'react';

const CapicuaChecker = () => {
  const [inputText, setInputText] = useState('');
  const [isCapicua, setIsCapicua] = useState(null);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const analyzeText = () => {
    const cleanedText = inputText.replace(/\s+/g, '').toLowerCase();
    const reversedText = cleanedText.split('').reverse().join('');
    setIsCapicua(cleanedText === reversedText);
  };

  return (
    <div>
      <h1>Verificador de Capicúa</h1>
      <input 
        type="text" 
        value={inputText} 
        onChange={handleInputChange} 
        placeholder="Escribe aquí" 
      />
      <button onClick={analyzeText}>Analizar</button>
      {isCapicua !== null && (
        <p>{isCapicua ? 'El texto es capicúa' : 'El texto no es capicúa'}</p>
      )}
    </div>
  );
};

export default CapicuaChecker;
