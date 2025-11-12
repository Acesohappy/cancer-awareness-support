import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = () => {
    fetch('https://api.realinspire.live/v1/quotes/random')
      .then((res) => res.json())
      .then((data) => {
        setQuote(data[0].content);
        setAuthor(data[0].author);
      })
      .catch(() => {
        setQuote('Stay strong and keep fighting!');
        setAuthor('Unknown');
      });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/031/347/366/small/pink-or-purple-ribbon-as-breast-cancer-or-epilepsy-awareness-symbol-and-copy-space-world-cancer-day-concept-by-ai-generated-free-photo.jpg"
          alt="Cancer Awareness Banner"
          className="Banner-image"
        />
        <div className="header-text">
          <h1>Join the Fight Against Cancer</h1>
          <p>
            Every battle begins with hope. Together, we can create awareness,
            offer support, and stand by those who need courage the most.
          </p>
        </div>
      </header>

      <main>
        <section className="quote-section">
          <h2>Daily Inspiration</h2>
          <p className="quote">“{quote}”</p>
          <p className="author">— {author}</p>
          <button onClick={fetchQuote}>Get New Quote</button>
        </section>

        <section className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label>Your Message</label>
              <textarea placeholder="Your message" required></textarea>
            </div>
            <button type="button">Send Message</button>
          </form>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Cancer Awareness & Support. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
