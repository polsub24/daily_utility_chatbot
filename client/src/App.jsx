import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div>
      <h1>My Everyday ChatBot</h1>
      <p></p>
      {/* WotNot iframe */}
      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
        <iframe
          width="640"
          height="480"
          src="https://embed.wotnot.io/7CwCKtweaScY134423446108TUswz8JP/bot/5rTsucYKk9c91346546578758yZ0UZja?display_header=false&history_retention=false"
          frameBorder="0"
          title="WotNot Chatbot"
          style={{ border: 'none', borderRadius: '10px' }}
        ></iframe>
      </div>
    </div>
  );
}
export default App;

