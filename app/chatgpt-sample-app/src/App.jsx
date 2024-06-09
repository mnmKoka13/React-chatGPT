import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [prompt, setPrompt] = useState("");
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const API_KEY = import.meta.env.VITE_API_KEY;

  const handlePrompt = async () => {
    try {
      setResponse("Loading...");
      setQuestion(prompt);
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: prompt,
            }
          ]
        }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );
      console.log(response);
      setResponse(response.data.choices[0].message.content);
      setPrompt("");
    } catch (error) {
      setResponse("Error ChatGPT: ${error}");
    }
  };

  return (
    <>
      <div className="chat-container">
        <header className="chat-header">
          <h1>ChatGPT App</h1>
        </header>
        
        <div className="message-form">
          <input
            type="text"
            className="message-input"
            value={prompt}
            placeholder="Please input prompt..."
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button className="send-button" onClick={() => handlePrompt()}>Ask</button>
        </div>

        <section id="chat-message" className="chat-message">
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