
import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from './ui/button';

const EveBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm Eve, your AI learning assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (!newMessage.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { text: newMessage, sender: 'user' }]);
    
    // Simulate bot response
    setTimeout(() => {
      const responses = [
        "I can help you find the right AI course for your needs!",
        "Would you like to learn more about our upcoming events?",
        "Our personalized learning paths can help you master AI at your own pace.",
        "Have you checked out our hackathons? They're a great way to apply your skills!",
        "I'm here to assist with any questions about our courses, events, or community."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { text: randomResponse, sender: 'bot' }]);
    }, 1000);
    
    setNewMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="glass-panel w-80 h-96 flex flex-col overflow-hidden animate-fade-in">
          <div className="flex items-center justify-between p-3 bg-unai-blue/20 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-unai-blue animate-pulse"></div>
              <h3 className="font-medium text-white">Eve AI Assistant</h3>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 rounded-full hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`max-w-[80%] p-3 rounded-lg ${
                  msg.sender === 'bot' 
                    ? 'bg-unai-blue/20 self-start' 
                    : 'bg-unai-blue self-end'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          
          <div className="p-3 border-t border-white/10 flex gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-unai-blue"
            />
            <Button 
              onClick={handleSend} 
              size="icon"
              className="bg-unai-blue hover:bg-unai-blue/90 rounded-full"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-unai-blue hover:bg-unai-blue/90 shadow-[0_0_15px_rgba(0,119,255,0.5)] hover:shadow-[0_0_25px_rgba(0,119,255,0.8)]"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default EveBot;
