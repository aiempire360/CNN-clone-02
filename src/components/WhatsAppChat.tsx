import React from 'react';

const messages = [
  { id: 1, text: 'Hey! How are you?', sent: false, time: '10:00' },
  { id: 2, text: "I'm good, thanks! How about you?", sent: true, time: '10:01' },
  { id: 3, text: 'Doing well. Working on a project.', sent: false, time: '10:02' },
  { id: 4, text: 'That’s great! Need any help?', sent: true, time: '10:03' },
];

const WhatsAppChat = () => {
  return (
    <div className="flex flex-col h-[600px] w-[350px] border rounded-lg shadow-lg bg-gray-100">
      {/* Header */}
      <div className="flex items-center p-3 bg-green-600 text-white rounded-t-lg">
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-10 h-10 rounded-full mr-3" />
        <div className="flex-1">
          <div className="font-semibold">John Doe</div>
          <div className="text-xs text-green-100">online</div>
        </div>
        <div className="flex space-x-3">
          <span className="material-icons cursor-pointer">search</span>
          <span className="material-icons cursor-pointer">more_vert</span>
        </div>
      </div>
      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-chat-pattern">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sent ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] px-4 py-2 rounded-lg text-sm shadow
                ${msg.sent ? 'bg-green-500 text-white rounded-br-none' : 'bg-white text-gray-800 rounded-bl-none'}`}
            >
              {msg.text}
              <span className="block text-[10px] text-right text-gray-300 mt-1">{msg.time}</span>
            </div>
          </div>
        ))}
      </div>
      {/* Input Bar */}
      <div className="flex items-center p-3 bg-white rounded-b-lg border-t">
        <input
          type="text"
          placeholder="Type a message"
          className="flex-1 px-3 py-2 rounded-full border bg-gray-50 focus:outline-none text-sm"
          disabled
        />
        <button className="ml-2 text-green-600">
          <span className="material-icons">send</span>
        </button>
      </div>
    </div>
  );
};

export default WhatsAppChat;
