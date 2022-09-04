import "./App.css";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Favorites from "./components/Favorites/Favorites";
import { useState } from "react";
import { ListCities } from "./Interfaces/ListCities";
import Card_Message from "./components/Card_Message/Card_Message";
import CardDetail from "./components/CardDetail/CardDetail";
import DeleteMessage from "./components/DeleteMessange/DeleteMessage";

function App(): JSX.Element {
  const [ListCities, setListCities] = useState<ListCities[]>([]);
  const [FavoriteCities, setFavoriteCities] = useState<ListCities[]>([]);
  const [Message, setMessage] = useState<string>("New Message");
  const [Msg_card_Active, setMsg_card_Active] = useState<boolean>(false);
  const [AllowDelelte, setAllowDelelte] = useState<boolean>(false);
  const [CurrentId, setCurrentId] = useState<number>(0);
  const AddNewCityToTheList = (city: ListCities): void => {
    setListCities([...ListCities, { ...city, favoriteState: false }]);
  };

  const AddCityToFavorites = (city: ListCities): void => {
    let City = FavoriteCities.find((City) => City.id === city.id);
    if (!City) {
      setFavoriteCities([...FavoriteCities, city]);
    } else {
      setMessage("The city is already in favorites");
      setMsg_card_Active(true);
    }
  };

  const HandleDeleteCities = (value: string): void => {
    if (value === "favorites") {
      setFavoriteCities(FavoriteCities.filter((city) => city.id !== CurrentId));
    } else {
      setListCities(ListCities.filter((city) => city.id !== CurrentId));
    }
    setAllowDelelte(false);
  };

  const ChangeMsgCardActive = (value: boolean): void => {
    setMsg_card_Active(value);
  };

  return (
    <>
      <Route exact path="/">
        <Home
          AddCityToFavorites={AddCityToFavorites}
          ListCities={ListCities}
          setCurrentId={setCurrentId}
          setAllowDelelte={setAllowDelelte}
        />
      </Route>
      <Route exact path="/favorites">
        <Favorites
          FavoriteCities={FavoriteCities}
          setAllowDelelte={setAllowDelelte}
          setCurrentId={setCurrentId}
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
      <DeleteMessage
        HandleDeleteCities={HandleDeleteCities}
        AllowDelelte={AllowDelelte}
        setAllowDelelte={setAllowDelelte}
      />
    </>
  );
}

export default App;
