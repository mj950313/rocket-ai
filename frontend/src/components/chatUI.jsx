import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

export default function ChatUI() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const bottomRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (input.trim()) {
      try {
        setMessages([...messages, { text: input, sender: "user" }]);

        const response = await axios.post("http://localhost:8080/api/message", {
          message: input,
        });

        setMessages((prevMessages) => [
          ...prevMessages,
          { text: response.data.response, sender: "bot" },
        ]);

        setInput("");
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  return (
    <div className="border w-[700px] mx-auto h-[700px] rounded-lg shadow-xl flex flex-col">
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            ref={bottomRef}
            className={`mb-2 p-2 rounded-lg ${
              msg.sender === "user"
                ? "bg-blue-100 text-right"
                : "bg-gray-100 text-left"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="p-4 border-t flex items-center text-xl">
        <input
          type="text"
          placeholder={t("chat.placeholder")}
          className="flex-1 p-2 border-l border-y rounded-l-lg"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              sendMessage();
            }
          }}
        />
        <button
          type="button"
          onClick={sendMessage}
          className="bg-blue-500 text-white px-3 py-2 border-blue-500 border-r border-y box-border rounded-r-lg"
        >
          전송
        </button>
      </div>
    </div>
  );
}
