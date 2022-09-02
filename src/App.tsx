import "./App.css";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Favorites from "./components/Favorites/Favorites";

function App(): JSX.Element {
  return (
    <>
      <Route path="/">
        <NavBar />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/favorites">
        <Favorites />
      </Route>
    </>
  );
}

export default App;
