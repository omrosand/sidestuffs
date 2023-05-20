import CardSection from "./components/CardSection";
import Nav from "./components/Nav";
import PositionsDivider from "./components/PositionsDivider";
import Roadmap from "./components/Roadmap";
import "./styles.scss";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Roadmap />
      <PositionsDivider />
      <CardSection />
    </Router>
  );
}

export default App;
