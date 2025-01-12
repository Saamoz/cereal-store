import React, { useState } from 'react';
import { ShoppingCart, Menu, Search, User, ChevronDown, MessageCircle, AlertCircle, X } from 'lucide-react';

const ProductPage = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [messageIndex, setMessageIndex] = useState(0);

  const scriptedMessages = [
    { sender: 'user', text: 'Hi, I\'m interested in the personal size Angel Food Cake cereal.' },
    { sender: 'support', text: 'The personal size has been indefinitely discontinued. We apologize for any inconvenience.' },
    { sender: 'support', text: 'You can order the family size though :)' }
  ];

  const addNextMessage = () => {
    if (messageIndex < scriptedMessages.length) {
      setChatMessages(prev => [...prev, scriptedMessages[messageIndex]]);
      setMessageIndex(prev => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-cyan-500">
                voilà
              </a>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Find a product"
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <button className="absolute right-2 top-2">
                  <Search className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-sm">
                English
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              <button className="flex items-center text-sm">
                <User className="h-5 w-5 mr-1" />
                Sign in
              </button>
              <button className="flex items-center space-x-2 bg-cyan-500 text-white px-4 py-2 rounded">
                <ShoppingCart className="h-5 w-5" />
                <span>$0.00</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <img
                src="/api/placeholder/400/400"
                alt="Angel Food Cake Cereal"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">Angel Food Cake Cereal</h1>
            
            {/* Size Options */}
            <div className="space-y-4">
              <div className="relative">
                <button 
                  disabled
                  className="w-full p-4 border rounded-lg bg-gray-100 text-gray-400 flex justify-between items-center group"
                >
                  <span>Personal Size - 280g</span>
                  <span>$4.99</span>
                  
                  {/* Tooltip */}
                  <div className="absolute invisible group-hover:visible bg-gray-800 text-white text-sm py-2 px-4 rounded -top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <div className="flex items-center">
                      <AlertCircle className="h-4 w-4 mr-2" />
                      This item is not available
                    </div>
                  </div>
                </button>
              </div>
              
              <button className="w-full p-4 border rounded-lg hover:border-cyan-500">
                <div className="flex justify-between items-center">
                  <span>Family Size - 480g</span>
                  <span>$7.99</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Chat Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-4 right-4 bg-cyan-500 text-white p-4 rounded-full shadow-lg hover:bg-cyan-600"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-4 w-96 bg-white rounded-lg shadow-xl border">
          <div className="p-4 border-b flex justify-between items-center bg-cyan-500 text-white rounded-t-lg">
            <h3 className="font-bold">Customer Support</h3>
            <button onClick={() => setIsChatOpen(false)}>
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {chatMessages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-100'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t">
            <button
              onClick={addNextMessage}
              className="w-full bg-cyan-500 text-white py-2 rounded hover:bg-cyan-600"
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