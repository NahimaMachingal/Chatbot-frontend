import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from './store';

const Chat = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);

  const handleSend = () => {
    if (input.trim()) {
      dispatch(sendMessage(input));
      setInput('');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.chatBox}>
        <h1 style={styles.header}>Chat</h1>
        <div style={styles.messageArea}>
          {messages.map((msg, idx) => (
            <div
              key={idx}
              style={{
                ...styles.messageContainer,
                flexDirection: msg.sender === 'bot' ? 'row' : 'row-reverse',
              }}
            >
              <img
                src={
                  msg.sender === 'bot'
                    ? '/robot.png' // Replace with actual bot avatar URL
                    : '/user.jpg' // Replace with actual user avatar URL
                }
                alt={msg.sender}
                style={styles.avatar}
              />
              <div
                style={{
                  ...styles.messageBubble,
                  backgroundColor: msg.sender === 'bot' ? '#e3f2fd' : '#c8e6c9',
                }}
              >
                <span>{msg.text}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={styles.inputArea}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            style={styles.input}
          />
          <button onClick={handleSend} style={styles.button}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height
    width: '100vw', // Full viewport width
    backgroundImage: 'url("/chatbt.jpg")',
    backgroundSize: 'cover', // Ensures the image fully covers the screen
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', // Prevents repetition of background image
    
  },
  chatBox: {
    width: '400px',
    height: '500px',
    backgroundColor: '#fff',
    borderRadius: '15px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  header: {
    margin: 0,
    padding: '15px',
    backgroundColor: '#2196f3',
    color: '#fff',
    textAlign: 'center',
    fontSize: '20px',
  },
  messageArea: {
    flex: 1,
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    overflowY: 'auto',
    backgroundColor: '#f9f9f9',
  },
  messageContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '10px',
  },
  messageBubble: {
    maxWidth: '70%',
    padding: '10px',
    borderRadius: '15px',
    fontSize: '14px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
  },
  inputArea: {
    display: 'flex',
    padding: '10px',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '14px',
  },
  button: {
    marginLeft: '10px',
    padding: '10px 20px',
    backgroundColor: '#2196f3',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
  },
};

export default Chat;
