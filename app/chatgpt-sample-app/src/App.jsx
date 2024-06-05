import { useState } from "react";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const API_KEY = import.meta.env.VITE_API_KEY;

  const handlePrompt = async () => {console.log("prompt: ", prompt);};

  return (
    <>
      <div className="chat-container">
        <header className="chat-header">
          <h1>ChatGPT App</h1>
        </header>
        
        <div className="message-form">
          <input
            type="text"
            value={prompt}
            placeholder="Please input prompt..."
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button onClick={() => handlePrompt()}>Ask</button>
        </div>

        <section className="chat-message">
          <div className="message user-message">
            <div className="text">{question}</div>
          </div>

          <div className="message gpt-response">
            <div className="text">{response}</div>
          </div>
        </section>

        <div className="info-button">
          <button className="button" onClick={() => console.log(response)}>Print Response to Console</button>
        </div>
      </div>
    </>
  );
}

export default App;