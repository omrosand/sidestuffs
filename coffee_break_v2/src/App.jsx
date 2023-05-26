import "./App.scss";
import logo from "./img/hot-drink.png";
import Player from "./components/Player";

function App() {
  return (
    <main>
      <header>
        <h1>Coffee Break v2</h1>
        <img src={logo} alt="off" />
      </header>
      <Player />
    </main>
  );
}

export default App;
