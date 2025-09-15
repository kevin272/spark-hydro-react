import { useEffect, useState } from "react";
import axios from "axios";

export default function ContactDashboard() {
  const [messages, setMessages] = useState([]);
  const [selectedMsg, setSelectedMsg] = useState(null);

  const fetchMessages = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/contact/list`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        withCredentials: true,
      });
      setMessages(res.data.data || []);
    } catch (err) {
      console.error("Error fetching messages:", err);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this message?")) return;
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/contact/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setMessages(messages.filter((msg) => msg._id !== id));
      if (selectedMsg?._id === id) setSelectedMsg(null);
    } catch (err) {
      console.error("Error deleting message:", err);
    }
  };

  const handleOpenMessage = async (msg) => {
  setSelectedMsg(msg);

  if (msg.status === "new") {
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/contact/${msg._id}/status`,
        { status: "read" },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      // Update local state
      setMessages((prev) =>
        prev.map((m) =>
          m._id === msg._id ? { ...m, status: res.data.data.status } : m
        )
      );
      setSelectedMsg((prev) => ({ ...prev, status: res.data.data.status }));
    } catch (err) {
      console.error("Error updating message status:", err);
    }
  }
};


  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Contact Messages</h1>

      {messages.length === 0 ? (
        <p className="text-gray-500">No messages yet.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {messages.map((msg) => (
            <div
              key={msg._id}
              onClick={() => handleOpenMessage(msg)}
              className="p-5 bg-white border border-gray-200 rounded-2xl shadow-md cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-transform flex flex-col justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-1 truncate">
                  {msg.name}
                </h2>
                <p className="text-sm text-gray-600 truncate">
                  <strong>Email:</strong> {msg.email}
                </p>
                <p className="text-sm text-gray-600 truncate mt-1">
                  <strong>Subject:</strong> {msg.subject}
                </p>
              </div>
              <div className="flex items-center justify-between mt-3">
                <span
                  className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                    msg.status === "new"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {msg.status || "new"}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(msg._id);
                  }}
                  className="text-red-500 hover:text-red-700 text-sm font-semibold"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedMsg && (
        <div className="fixed inset-0 bg-white bg-opacity-10 !important flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative">
            {/* Close button */}
            <button
              onClick={() => setSelectedMsg(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>

            <h2 className="text-xl font-bold text-gray-800 mb-4 truncate">
              {selectedMsg.subject}
            </h2>

            <div className="space-y-2">
              <p>
                <strong>Name:</strong> {selectedMsg.name}
              </p>
              <p>
                <strong>Email:</strong> {selectedMsg.email}
              </p>
              <p>
                <strong>Phone:</strong> {selectedMsg.number || "N/A"}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                    selectedMsg.status === "new"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {selectedMsg.status || "new"}
                </span>
              </p>
              <div className="mt-4 p-3 bg-gray-50 rounded-lg border">
                <p className="text-gray-700 whitespace-pre-line">{selectedMsg.message}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
