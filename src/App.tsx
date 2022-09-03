import "./App.css";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Favorites from "./components/Favorites/Favorites";
import { useState } from "react";
import { ListCities } from "./Interfaces/ListCities";

function App(): JSX.Element {
  const [ListCities, setListCities] = useState<ListCities[]>([]);
  const [FavoriteCities, setFavoriteCities] = useState<ListCities[]>([]);

  const AddNewCityToTheList = (city: ListCities): void => {
    setListCities([...ListCities, city]);
  };

  const AddCityToFavorites = (city: ListCities): void => {
    setFavoriteCities([...FavoriteCities, city]);
  };

  const DeleteCityFromTheList = (id: number) => {
    setListCities(ListCities.filter((city) => city.id !== id));
  };

  return (
    <>
      <Route exact path="/">
        <Home
          AddCityToFavorites={AddCityToFavorites}
          DeleteCityFromTheList={DeleteCityFromTheList}
          ListCities={ListCities}
        />
      </Route>
      <Route exact path="/favorites">
        <Favorites FavoriteCities={FavoriteCities} />
      </Route>
      <Route path="/">
        <NavBar
          ListCities={ListCities}
          AddNewCityToTheList={AddNewCityToTheList}
        />
      </Route>
    </>
  );
}

export default App;
