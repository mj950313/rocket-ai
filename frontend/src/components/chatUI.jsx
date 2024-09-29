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

        const response = await axios.post(
          "https://rocket-ai.onrender.com/api/message",
          {
            message: input,
          }
        );

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
    <div className="border rounded-lg shadow-lg flex flex-col m-4 w-[500px] lg:w-[600px] xl:w-[700px] h-[600px] lg:h-[700px] xl:h-[800px] bg-white">
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

      <div className="p-4 border-t flex items-center text-base bg-[#F9FAFB]">
        <input
          type="text"
          placeholder={t("chat.placeholder")}
          className="flex-1 p-2 border-l border-y rounded-l-lg placeholder:text-base"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              sendMessage();
            }
          }}
        />
        <button
          type="button"
          onClick={sendMessage}
          className="bg-blue-500 text-white px-3 py-2 text-base border-blue-500 border-r border-y box-border rounded-r-lg hover:bg-blue-600"
        >
          전송
        </button>
      </div>
    </div>
  );
}
