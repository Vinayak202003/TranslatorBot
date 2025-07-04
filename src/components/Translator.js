import React, { useState } from "react";

const Translator = () => {
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");
  const [language, setLanguage] = useState("es"); // Default to Spanish

  const handleTranslate = async () => {
    // Mock translation – we'll replace this with real API later
    setTranslated(`Translated (${language}): ${text}`);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Translator Bot</h1>
      <textarea
        className="w-full p-2 border rounded mb-4"
        rows="4"
        placeholder="Enter text to translate..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <select
        className="w-full mb-4 p-2 border rounded"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="es">Malayalam</option>
        
      </select>

      <button
        onClick={handleTranslate}
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Translate
      </button>

      {translated && (
        <div className="mt-4 p-3 bg-gray-100 rounded border text-gray-800">
          {translated}
        </div>
      )}
    </div>
  );
};

export default Translator;
