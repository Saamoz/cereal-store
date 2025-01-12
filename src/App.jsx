import React, { useEffect , useState } from 'react';
import './index.css'
import { MessageCircle, X } from 'lucide-react';

const TypingIndicator = () => (
  <div className="flex space-x-2 p-3 bg-gray-100 rounded-lg w-16">
    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
  </div>
);

const ProductPage = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const scriptedMessages = [
    { sender: 'user', text: 'Hi, I\'m interested in the personal size Angel Food Cake cereal.' },
    { sender: 'support', text: 'The personal size has been indefinitely discontinued. We apologize for any inconvenience.' },
    { sender: 'support', text: 'You can order the family size though :)' }
  ];

  useEffect(() => {
    if (messageIndex > 0 && messageIndex < scriptedMessages.length) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setIsTyping(false);
        setChatMessages(prev => [...prev, scriptedMessages[messageIndex]]);
        setMessageIndex(prev => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [messageIndex]);

  const addNextMessage = () => {
    if (messageIndex < scriptedMessages.length) {
      setChatMessages(prev => [...prev, scriptedMessages[messageIndex]]);
      setMessageIndex(prev => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b">
        <div className=".max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="text-2xl font-bold text-blue-600">
              hola
            </a>

            {/* Search */}
            <div className="flex-1 max-w-lg mx-8">
              <input
                type="text"
                placeholder="Find a product"
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span>English</span>
                <span>▼</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Sign in</span>
              </div>
              <div className="flex items-center gap-2">
                <span>$0.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div>
            <img
              src="https://www.cerealously.net/wp-content/uploads/2020/08/new-funfetti-cereal-review-box.jpg"
              alt="Angel Food Cake Cereal"
              className="w-full"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Angel Food Cake Cereal</h1>
            
            {/* Size Options */}
            <div className="space-y-4">
              <div className="relative group">
                <div className="p-4 border rounded bg-gray-100 text-gray-400">
                  <div className="flex justify-between">
                    <span>Personal Size - 280g</span>
                    <span>$4.99</span>
                  </div>
                  <div className="text-sm text-gray-400">This item is not available</div>
                </div>
              </div>
              
              <div className="p-4 border rounded hover:border-blue-500 cursor-pointer">
                <div className="flex justify-between">
                  <span>Family Size - 480g</span>
                  <span>$7.99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Chat Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-xl border">
          <div className="p-3 border-b flex justify-between items-center bg-blue-500 text-white">
            <h3 className="font-bold">Customer Support</h3>
            <button 
              onClick={() => setIsChatOpen(false)}
              className="text-white text-xl font-bold hover:text-gray-200"
            >
              ×
            </button>
          </div>
          
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {chatMessages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-2 rounded ${
                    message.sender === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <TypingIndicator />
              </div>
            )}
          </div>
          
          <div className="p-3 border-t">
            <button
              onClick={addNextMessage}
              className="w-full bg-blue-500 text-white py-2 rounded"
              disabled={messageIndex >= scriptedMessages.length}
            >
              Send Message
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;