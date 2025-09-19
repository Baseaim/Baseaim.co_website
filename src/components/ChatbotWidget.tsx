'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from '@/contexts/FormContext';
import Image from 'next/image';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hi! 👋 Welcome to Baseaim. How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { openForm } = useForm();

  const WEBHOOK_URL = 'https://n8n.ryderagency.com/webhook/80174bb5-5ca5-43ec-bf4d-c0a2c90e052f/chat';

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  const handleGetStarted = () => {
    closeChat();
    openForm();
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: text.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId,
          chatInput: text.trim(),
          action: 'sendMessage'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();

      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        text: data.output || data.text || 'I apologize, but I encountered an issue. Please try again.',
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);

      // Check if bot suggests booking a consultation
      if (botMessage.text.toLowerCase().includes('consultation') ||
          botMessage.text.toLowerCase().includes('schedule') ||
          botMessage.text.toLowerCase().includes('get started')) {
        // Show Get Started button after a delay
        setTimeout(() => {
          const ctaMessage: Message = {
            id: `cta-${Date.now()}`,
            text: 'SHOW_CTA',
            sender: 'bot',
            timestamp: new Date()
          };
          setMessages(prev => [...prev, ctaMessage]);
        }, 1000);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        text: 'Sorry, I couldn\'t send your message. Please try again.',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  // Handle click outside to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeChat();
    }
  };

  const bubbleVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.3,
        ease: "easeOut"
      }
    },
    hover: { 
      scale: prefersReducedMotion ? 1 : 1.05,
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: prefersReducedMotion ? 1 : 0.95,
      transition: { duration: 0.1 }
    }
  };

  const chatVariants = {
    hidden: {
      opacity: 0,
      scale: prefersReducedMotion ? 1 : 0.8,
      y: prefersReducedMotion ? 0 : 20,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.2,
        ease: "easeIn"
      }
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <>
      {/* Chat Bubble */}
      {!isOpen && (
        <motion.button
          className="chatbot-bubble"
          onClick={toggleChat}
          variants={bubbleVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          whileTap="tap"
          aria-label="Open chat"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none"
            className="chat-icon"
          >
            <path 
              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <circle cx="9" cy="11" r="1" fill="currentColor"/>
            <circle cx="12" cy="11" r="1" fill="currentColor"/>
            <circle cx="15" cy="11" r="1" fill="currentColor"/>
          </svg>
        </motion.button>
      )}

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <div className="chatbot-overlay" onClick={handleBackdropClick}>
            <motion.div
              className="chatbot-interface"
              variants={chatVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Chat Header */}
              <div className="chat-header">
                <div className="chat-header-content">
                  <div className="chat-title">
                    <h3>Chat with us</h3>
                    <span className="chat-status">
                      <span className="status-dot"></span>
                      Online
                    </span>
                  </div>
                  <button 
                    className="chat-close-button"
                    onClick={closeChat}
                    aria-label="Close chat"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path 
                        d="M18 6L6 18M6 6l12 12" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="chat-messages">
                {messages.map((message) => (
                  message.text === 'SHOW_CTA' ? (
                    <div key={message.id} className="message bot-message">
                      <div className="message-avatar">
                        <Image
                          src="../BASEAIM BLACK.png"
                          alt="Baseaim"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="message-content">
                        <button
                          className="chat-cta-button"
                          onClick={handleGetStarted}
                        >
                          Get Started - Schedule a Consultation
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div key={message.id} className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}>
                      {message.sender === 'bot' && (
                        <div className="message-avatar">
                          <Image
                            src="../BASEAIM BLACK.png"
                            alt="Baseaim"
                            width={24}
                            height={24}
                          />
                        </div>
                      )}
                      <div className="message-content">
                        <p>{message.text}</p>
                      </div>
                    </div>
                  )
                ))}
                {isLoading && (
                  <div className="message bot-message">
                    <div className="message-avatar">
                      <Image
                        src="/black logo .png"
                        alt="Baseaim"
                        width={24}
                        height={24}
                      />
                    </div>
                    <div className="message-content">
                      <div className="typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input */}
              <div className="chat-input-container">
                <form onSubmit={handleSubmit} className="chat-input-wrapper">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="chat-input"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    className="chat-send-button"
                    disabled={!inputValue.trim() || isLoading}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </form>
                <div className="chat-disclaimer">
                  <Image
                    src="/black logo .png"
                    alt="Baseaim"
                    width={32}
                    height={32}
                  />
                  <span>Powered by Baseaim AI</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}