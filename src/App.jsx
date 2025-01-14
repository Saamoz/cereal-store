import React, { useState, useEffect } from 'react';
import { MessageCircle, AlertCircle, ChevronDown, Menu, Search, X } from 'lucide-react';

const TypingIndicator = () => (
  <div className="flex space-x-2 p-3 bg-gray-100 rounded-lg w-16">
    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
  </div>
);

import cerealImage from './assets/cereal.jpg';

const ProductPage = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

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
    <div className="min-h-screen bg-white w-full">
      {/* Header */}
      <div className="bg-[#004740] w-full">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between text-white">
            <a href="/" className="text-2xl font-bold text-white">
              hola
            </a>

            <div className="flex-1 mx-8">
              <input
                type="text"
                placeholder="Find a product"
                className="w-full px-3 py-2 border rounded text-gray-800"
              />
            </div>

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

          <div className="flex space-x-6 mt-4 text-white">
            <button className="flex items-center gap-2 bg-transparent hover:bg-[#003730] text-white">
              <Menu className="h-4 w-4" />
              Browse
              <ChevronDown className="h-4 w-4" />
            </button>
            {['Promotions', 'Favourites', 'Lists', 'Regulars', 'Recipes'].map((item) => (
              <button key={item} className="flex items-center gap-2 bg-transparent hover:bg-[#003730] text-white">
                {item}
                <ChevronDown className="h-4 w-4" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Banner Ad */}
      <div className="w-full bg-gray-200 p-4 text-center">
        <div className="w-full">
          Advertisement Banner Space
        </div>
      </div>

      {/* Main Content */}
      <main className="w-full px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Product Cards */}
          <div className="space-y-6">
            <div className="relative">
              <img
                src={cerealImage}
                alt="Angel Food Cake Cereal - Personal Size"
                className="w-full max-w-sm mx-auto cursor-pointer filter grayscale opacity-75"
                onClick={() => setIsZoomed(true)}
              />
              <button 
                className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-lg"
                onClick={() => setIsZoomed(true)}
              >
                <Search className="h-4 w-4 text-gray-600" />
              </button>
            </div>
            <div className="p-3 border rounded group relative max-w-sm mx-auto bg-gray-100">
              <h2 className="text-xl font-bold text-gray-500">Personal Size - 280g</h2>
              <div className="text-gray-400">This item is not available</div>
              <div className="mt-2 text-lg font-bold text-gray-400">$4.99</div>
              <div className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1 text-white">
                <AlertCircle className="h-4 w-4" />
                <div className="absolute invisible group-hover:visible bg-gray-800 text-white text-sm py-2 px-4 rounded -top-12 right-0 w-64">
                  This product has been discontinued. Sorry for any inconvenience!
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <img
                src={cerealImage}
                alt="Angel Food Cake Cereal - Family Size"
                className="w-full max-w-sm mx-auto"
              />
              <button 
                className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-lg"
                onClick={() => setIsZoomed(true)}
              >
                <Search className="h-4 w-4 text-gray-600" />
              </button>
            </div>
            <div className="p-3 border rounded hover:border-[#004740] cursor-pointer max-w-sm mx-auto">
              <h2 className="text-xl font-bold">Family Size - 480g</h2>
              <div className="mt-2 text-lg font-bold">$7.99</div>
              <button className="mt-4 w-full bg-white text-black border border-gray-300 hover:bg-[#004740] hover:text-white transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Side Ad Space */}
        <div className="fixed right-0 top-1/4 w-32 bg-gray-200 p-4 text-center h-96">
          Vertical Ad Space
        </div>

        {/* Additional Information */}
        <div className="mt-12 space-y-8 max-w-5xl mx-auto">
          <div className="border-t pt-8">
            <h2 className="text-2xl font-bold mb-4">Brand</h2>
            <p>Angel Food</p>
          </div>

          <div className="border-t pt-8">
            <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
            <p className="text-gray-700">Sugar, Whole Grain Corn Flour, Wheat Flour, Whole Grain Oat Flour, Corn Bran, Maltodextrin, Oat Hull Fibre, Hydrogenated Coconut And Vegetable Oil, Salt, Natural Flavour, Vitamins And Minerals.</p>
          </div>

          <div className="border-t pt-8">
            <h2 className="text-2xl font-bold mb-4">Nutrition Facts</h2>
            <div className="border border-black p-4 max-w-md">
              <div className="text-3xl font-bold border-b-8 border-black pb-1">Nutrition Facts</div>
              <div className="text-sm mt-1">Serving Size 39g (1 cup)</div>
              <div className="text-sm">Servings Per Container about 7</div>
              
              <div className="border-b-8 border-black mt-4 pb-1">
                <div className="text-lg font-bold">Amount Per Serving</div>
                <div className="flex justify-between items-baseline">
                  <span className="text-2xl font-bold">Calories</span>
                  <span className="text-2xl">150</span>
                </div>
              </div>
              
              <div className="text-right text-sm border-b border-black py-1">% Daily Value*</div>
              
              <div className="border-b border-black">
                <div className="flex justify-between py-1">
                  <span><strong>Total Fat</strong> 1.5g</span>
                  <span>2%</span>
                </div>
                <div className="flex justify-between py-1 pl-4">
                  <span>Saturated Fat 0.5g</span>
                  <span>3%</span>
                </div>
                <div className="flex justify-between py-1 pl-4">
                  <span>Trans Fat 0g</span>
                  <span></span>
                </div>
              </div>
              
              <div className="flex justify-between py-1 border-b border-black">
                <span><strong>Cholesterol</strong> 0mg</span>
                <span>0%</span>
              </div>
              
              <div className="flex justify-between py-1 border-b border-black">
                <span><strong>Sodium</strong> 180mg</span>
                <span>8%</span>
              </div>
              
              <div className="flex justify-between py-1 border-b border-black">
                <span><strong>Total Carbohydrates</strong> 34g</span>
                <span>11%</span>
              </div>
              
              <div className="flex justify-between py-1 pl-4 border-b border-black">
                <span>Dietary Fiber 2g</span>
                <span>7%</span>
              </div>
              
              <div className="flex justify-between py-1 pl-4 border-b border-black">
                <span>Total Sugars 14g</span>
                <span></span>
              </div>
              
              <div className="flex justify-between py-1 pl-8 border-b border-black">
                <span>Includes 12g Added Sugars</span>
                <span>24%</span>
              </div>
              
              <div className="flex justify-between py-1 border-b border-black">
                <span><strong>Protein</strong> 2g</span>
                <span>4%</span>
              </div>
              
              <div className="mt-2 text-sm">
                * The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Image Zoom Modal */}
      {isZoomed && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full">
            <button 
              className="absolute top-4 right-4 text-white"
              onClick={() => setIsZoomed(false)}
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={cerealImage}
              alt="Angel Food Cake Cereal - Zoomed"
              className="w-full"
            />
          </div>
        </div>
      )}

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
              className="w-full bg-white text-black border border-gray-300 hover:bg-[#004740] hover:text-white transition-colors"
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