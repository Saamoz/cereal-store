import React, { useState, useEffect } from 'react';
import { MessageCircle, AlertCircle, ChevronDown, Menu } from 'lucide-react';

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
      <div className="bg-[#004740]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between text-white">
            {/* Logo */}
            <a href="/" className="text-2xl font-bold text-white">
              voilà
            </a>

            {/* Search */}
            <div className="flex-1 max-w-lg mx-8">
              <input
                type="text"
                placeholder="Find a product"
                className="w-full px-3 py-2 border rounded text-gray-800"
              />
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span>English</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-2">
                <span>Sign in</span>
              </div>
              <div className="flex items-center gap-2">
                <span>$0.00</span>
              </div>
            </div>
          </div>

          {/* Secondary Navigation */}
          <div className="flex space-x-6 mt-4 text-white">
            <button className="flex items-center gap-2">
              <Menu className="h-4 w-4" />
              Browse
              <ChevronDown className="h-4 w-4" />
            </button>
            {['Promotions', 'Favourites', 'Lists', 'Regulars', 'Recipes'].map((item) => (
              <button key={item} className="flex items-center gap-2">
                {item}
                <ChevronDown className="h-4 w-4" />
              </button>
            ))}
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
                {/* Exclamation Mark Icon */}
                <div className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1 text-white">
                  <AlertCircle className="h-4 w-4" />
                  <div className="absolute invisible group-hover:visible bg-gray-800 text-white text-sm py-2 px-4 rounded -top-12 right-0 w-64">
                    This product has been discontinued. Sorry for any inconvenience!
                  </div>
                </div>
              </div>
              
              <div className="p-4 border rounded hover:border-[#004740] cursor-pointer">
                <div className="flex justify-between">
                  <span>Family Size - 480g</span>
                  <span>$7.99</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 space-y-8">
          <div className="border-t pt-8">
            <h2 className="text-2xl font-bold mb-4">Brand</h2>
            <p>Private Selection</p>
          </div>

          <div className="border-t pt-8">
            <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
            <p className="text-gray-700">Sugar, Whole Grain Corn Flour, Wheat Flour, Whole Grain Oat Flour, Corn Bran, Maltodextrin, Oat Hull Fibre, Hydrogenated Coconut And Vegetable Oil, Salt, Natural Flavour, Vitamins And Minerals.</p>
          </div>

          <div className="border-t pt-8">
            <h2 className="text-2xl font-bold mb-4">Nutritional Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="border-b py-2">
                <span className="font-bold">Calories:</span> 150 per 39g serving
              </div>
              <div className="border-b py-2">
                <span className="font-bold">Total Fat:</span> 1.5g
              </div>
              <div className="border-b py-2">
                <span className="font-bold">Carbohydrates:</span> 34g
              </div>
              <div className="border-b py-2">
                <span className="font-bold">Protein:</span> 2g
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Chat Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-4 right-4 bg-[#004740] text-white p-3 rounded-full shadow-lg"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-xl border">
          <div className="p-3 border-b flex justify-between items-center bg-[#004740] text-white">
            <h3 className="font-bold">Customer Support</h3>
            <button 
              onClick={() => setIsChatOpen(false)}
              className="hover:bg-[#005850] p-1 rounded"
            >
              <span className="text-lg">×</span>
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
                      ? 'bg-[#004740] text-white'
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
              className="w-full bg-[#004740] text-white py-2 rounded"
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