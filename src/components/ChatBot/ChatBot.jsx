import React, { useState, useRef, useEffect } from "react";
import styles from "./ChatBot.module.css";
// import { getResumeAnswer } from "./resumeQA";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Welcome to KaziBot! How can I help you?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [shake, setShake] = useState(false);
  const chatWindowRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      const newUserMessage = { text: input, sender: "user" };
      setMessages((prevMessages) => [...prevMessages, newUserMessage]);
      setInput("");

      // Simulate bot response
      setTimeout(() => {
        const botResponse = generateBotResponse(input);
        const newBotMessage = { text: botResponse, sender: "bot" };
        setMessages((prevMessages) => [...prevMessages, newBotMessage]);
      }, 500); // Simulate delay
    }
  };

  const generateBotResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();
    if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
      return "Hello! How can I help you?";
    } else if (lowerInput.includes("projects")) {
      return "You can find my projects in the projects section of my portfolio.";
    } else if (lowerInput.includes("experience")) {
      return "You can find my past experiences in the experience section of my portfolio.";
    } else if (lowerInput.includes("contact")) {
      return "Feel free to reach out via the contact form or my email.";
    } else if (
      lowerInput.includes("tell me about yourself") ||
      lowerInput.includes("brief description")
    ) {
      return "Sure! My name is Kazi, I'm currently a junior studying computer science at the University of Central Florida and I love software engineering and solving problems!";
    } else {
      return "I'm still learning, but I'll do my best to help!";
    }
  };

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const shakeInterval = setInterval(() => {
      setShake(true);
      setTimeout(() => setShake(false), 500); // Shake duration
    }, 5000); // Shake every 8 seconds

    return () => clearInterval(shakeInterval); // Cleanup on unmount
  }, []);

  return (
    <div className={styles.container}>
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            Chat with me!
            <button className={styles.closeButton} onClick={toggleChat}>
              X
            </button>
          </div>
          <div className={styles.chatMessages} ref={chatWindowRef}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`${styles.message} ${
                  message.sender === "user"
                    ? styles.userMessage
                    : styles.botMessage
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className={styles.chatInput}>
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Type a message..."
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
      <button
        className={`${styles.chatButton} ${shake ? styles.shake : ""}`}
        onClick={toggleChat}
      >
        <img
          src="/assets/chatbot/chat.png"
          alt="Chat With AI Icon"
          className={styles.chatImage}
        />
      </button>
    </div>
  );
};

export default ChatBot;
