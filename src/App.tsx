import "./App.css";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Favorites from "./components/Favorites/Favorites";
import { useState } from "react";
import { ListCities } from "./Interfaces/ListCities";
import Card_Message from "./components/Card_Message/Card_Message";
import CardDetail from "./components/CardDetail/CardDetail";

function App(): JSX.Element {
  const [ListCities, setListCities] = useState<ListCities[]>([]);
  const [FavoriteCities, setFavoriteCities] = useState<ListCities[]>([]);
  const [Message, setMessage] = useState<string>("New Message");
  const [Msg_card_Active, setMsg_card_Active] = useState<boolean>(false);

  const AddNewCityToTheList = (city: ListCities): void => {
    setListCities([...ListCities, { ...city, favoriteState: false }]);
  };

  const AddCityToFavorites = (city: ListCities): void => {
    let City = ListCities.find((City) => City.id === city.id);
    setFavoriteCities([...FavoriteCities, city]);
  };

  const DeleteCityFromTheList = (id: number) => {
    setListCities(ListCities.filter((city) => city.id !== id));
  };

  const DeleteCityFromFavorites = (id: number) => {
    setFavoriteCities(FavoriteCities.filter((city) => city.id !== id));
  };

  const ChangeMsgCardActive = (value: boolean): void => {
    setMsg_card_Active(value);
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
        <Favorites
          FavoriteCities={FavoriteCities}
          DeleteCityFromFavorites={DeleteCityFromFavorites}
        />
      </Route>
      <Route exact path="/detail/:city_id">
        <CardDetail />
      </Route>
      <Route path="/">
        <NavBar
          ListCities={ListCities}
          AddNewCityToTheList={AddNewCityToTheList}
          setMessage={setMessage}
          ChangeMsgCardActive={ChangeMsgCardActive}
        />
      </Route>
      <Card_Message
        Message={Message}
        ChangeMsgCardActive={ChangeMsgCardActive}
        Msg_card_Active={Msg_card_Active}
      />
    </>
  );
}

export default App;
