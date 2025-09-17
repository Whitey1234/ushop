'use client'
import { useState } from "react";
import { FaComments, FaPaperPlane, FaTimes } from "react-icons/fa";

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "ai", content: "Hi 👋, how can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      if (!data.reply) {
        throw new Error(data.error || "No reply from server");
      }

      setMessages((prev) => [...prev, { role: "ai", content: data.reply }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: "⚠️ Failed to get a response." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 bottom-6 bg-blue-600 text-white p-4 rounded-full shadow-lg z-50"
      >
        {isOpen ? <FaTimes /> : <FaComments />}
      </button>

      {isOpen && (
        <div className="fixed left-4 bottom-20 w-80 h-96 bg-white shadow-2xl rounded-lg flex flex-col overflow-hidden z-50">
          <div className="bg-blue-600 text-white p-3 font-semibold">AI Assistant</div>

          <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.role === "user"
                    ? "bg-blue-100 self-end ml-auto"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {msg.content}
              </div>
            ))}
            {loading && (
              <div className="bg-gray-200 p-2 rounded-lg w-fit text-gray-600">
                Typing...
              </div>
            )}
          </div>

          <div className="border-t p-2 flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
