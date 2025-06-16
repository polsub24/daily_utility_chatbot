import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.wotnot.io/chat-widget/7CwCKtweaScY134423446108TUswz8JP.js';
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <h1>Welcome to Our Chatbot Page</h1>
      <p>Ask us anything!</p>
    </div>
  );
}

export default App;
