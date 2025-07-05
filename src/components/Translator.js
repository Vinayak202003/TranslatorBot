import React, { useState } from "react";

const Translator = () => {
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");
  const [language, setLanguage] = useState("ml"); // Malayalam

  const handleTranslate = async () => {
    // Mock translation
    setTranslated(`Translated (${language}): ${text}`);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/bgg.png')" }}
    >
      <div className="bg-orange-50 p-8 rounded-3xl shadow-2xl w-full max-w-xl">
        <h1 className="text-3xl font-bold text-orange-700 mb-6 text-center">
          Translator Bot
        </h1>

        <textarea
          className="w-full p-3 border border-orange-200 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-orange-300"
          rows="4"
          placeholder="Enter text to translate..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <select
          className="w-full mb-4 p-3 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="ml">Malayalam</option>
        </select>

        <button
          onClick={handleTranslate}
          className="w-full bg-orange-600 text-white py-3 rounded-xl hover:bg-orange-700 transition"
        >
          Translate
        </button>

        {translated && (
          <div className="mt-4 p-4 bg-white rounded-xl border border-orange-200 text-gray-800 shadow">
            {translated}
          </div>
        )}
      </div>
    </div>
  );
};

export default Translator;
