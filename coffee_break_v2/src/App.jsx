import "./App.scss";
import logo from "./img/hot-drink.png";
import Player from "./components/Player";
import Weather from "./components/Weather";

function App() {
  return (
    <>
      <main>
        <header>
          <h1>Kaffepause</h1>
          <img src={logo} alt="off" />
        </header>
        <Player />
        <Weather />
        <div className="madeBy">
          <p>Laget av Ole M. Røsand</p>
          <p>
            <a
              href="https://github.com/omrosand"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>{" "}
            | <a href="mailto: rosandolemartin@gmail.com">email</a>
          </p>
        </div>
      </main>
    </>
  );
}

export default App;
