import './App.css';

function App() {
  return (
    <div className="App">
      <title>Cancer Awareness</title>
      <header className="App-header">
        <img src='./assests/' alt='Banner' className='Banner-image'></img>
        <h1>Welcome to the Cancer Awareness and Support Page</h1>
      </header>
      <main>
        <p>Thankyou for being part of Cancer Awareness program</p>

        <form className='contact-form'>
          <div className='name'>
            <label className='label'>Name</label>
            <input type='text' placeholder='Enter your name' className='input'></input>
          </div>
          <div className='Email'>
            <label className='label'>Email</label>
            <input type='email' placeholder='Enter your email id' className='input'></input>
          </div>
          <div className='Message'>
            <label className='label'>Your Message</label>
            <textarea placeholder='your message' className='input'/>
          </div>
        </form>
      </main>
      <footer>
        <p>@All rights are reserved</p>
      </footer>
    </div>
  );
}

export default App;
