import "./App.css";

// Components
import Header from "./components/header/header";
import SideMenu from "./components/sideMenu/sideMenu";

function App() {
  return (
    <div className="App">
      <Header />
      <SideMenu />
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
