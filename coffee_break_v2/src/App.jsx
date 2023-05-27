import "./App.scss";
import logo from "./img/hot-drink.png";
import Player from "./components/Player";
import Weather from "./components/Weather";

function App() {
  return (
    <main>
      <header>
        <h1>Kaffepause</h1>
        <img src={logo} alt="off" />
      </header>
      <Player />
      <Weather />
    </main>
  );
}

export default App;
