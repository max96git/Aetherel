import React from 'react';
import './styles.css';

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>Welcome to Aetherel</h1>
        <button className="cta-button">Get Started</button>
      </header>
      <main>
        <h2>Features</h2>
        <div className="features">
          <div className="feature-card">Fast Deployment</div>
          <div className="feature-card">Custom Domains</div>
          <div className="feature-card">Scalability</div>
        </div>
      </main>
      <footer>
        <p>Made with passion for developers.</p>
      </footer>
    </div>
  );
};

export default App;
