/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
import './App.css';
import IDLabel from './components/IDLabel';
import PwdLabel from './components/PwdLabel';
import ValidLabel from './components/ValidLabel';
import NameLabel from './components/NameLabel'
import PhoneLabel from './components/PhoneLabel';
import EmailLabel from './components/EmailLabel';
import AdButton from './components/AdButton';
import JoinButton from './components/JoinButton';

function App() {
  return (
      <div>
        <h1>회원가입</h1>
        <IDLabel/>
        <PwdLabel/>
        <ValidLabel/>
        <NameLabel/>
        <PhoneLabel/>
        <EmailLabel/>
        <p></p>
        <AdButton/>
        <p></p>
        <JoinButton/>
      </div>
  )
}

export default App;
