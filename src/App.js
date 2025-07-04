import React from "react";

function App() {
  return (
  <div
    className="min-h-screen bg-cover bg-center"
    style={{ backgroundImage: "url('/bgg.png')" }}
  >
    <div className="flex items-center justify-center min-h-screen bg-black/50">
      <div className="bg-orange-100/90 backdrop-blur p-10 rounded-3xl shadow-2xl w-full max-w-xl">
        <h1 className="text-4xl font-bold text-orange-700 mb-6 text-center">
          Translator Bot
        </h1>

      <textarea
  rows="6"
  placeholder="Enter text to translate..."
  className="w-full p-4 rounded-lg border border-orange-300 mb-6 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
/>


        <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-5 rounded-lg w-full transition duration-300">
          Translate
        </button>
      </div>
    </div>
  </div>
);

}

export default App;
