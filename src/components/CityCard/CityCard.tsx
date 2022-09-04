import { ListCities } from "../../Interfaces/ListCities";
import { TiHeartFullOutline } from "react-icons/ti";
import { FaTrashRestoreAlt } from "react-icons/fa";
import "./CityCard.css";
import { Link, useLocation } from "react-router-dom";

interface Props {
  city: ListCities;
  AddCityToFavorites?: (city: ListCities) => void;
  setCurrentId?: (id: number) => void;
  setAllowDelelte?: (id: boolean) => void;
}

export default function CityCard({
  city,
  AddCityToFavorites,
  setCurrentId,
  setAllowDelelte,
}: Props) {
  const id = city.id;

  const location = useLocation<unknown>();
  const Location = location.pathname.split("/")[1];

  const HandleDeleteFromList = (id: number): void => {
    setCurrentId && setCurrentId(id);
    setAllowDelelte && setAllowDelelte(true);
  };

  const HandleDeleteFromFavorites = (id: number): void => {
    setCurrentId && setCurrentId(id);
    setAllowDelelte && setAllowDelelte(true);
  };

  return (
    <>
      <div className="container_card">
        <img
          className="card_image"
          src={`http://openweathermap.org/img/wn/${city?.weather[0].icon}@2x.png`}
          alt={city?.name}
        />
        <Link className="city_title" to={`/detail/${city?.id}`}>
          {city?.name}
        </Link>
        <span className="Card_titles">Clouds</span>
        <span className="card_info">{city?.clouds?.all}</span>
        <span className="Card_titles">Longitude</span>
        <span className="card_info">{city?.coord?.lon}</span>
        <span className="Card_titles">Latitude</span>
        <span className="card_info">{city?.coord?.lat}</span>
        <span className="Card_titles">Temperature</span>
        <span className="card_info">{city?.main?.temp}</span>
        <span className="Card_titles">Description</span>
        <span className="card_info">{city?.weather[0].description}</span>
        {Location !== "favorites" ? (
          <>
            <TiHeartFullOutline
              className={
                city?.favoriteState ? "Fav_btn_active Fav_btn" : "Fav_btn"
              }
              onClick={() =>
                AddCityToFavorites && city ? AddCityToFavorites(city) : null
              }
            />
            <FaTrashRestoreAlt
              className="delete_btn"
              onClick={() => id && HandleDeleteFromList(id)}
            />
          </>
        ) : (
          <FaTrashRestoreAlt
            className="delete_btn"
            onClick={() => id && HandleDeleteFromFavorites(id)}
          />
        )}
      </div>
    </>
  );
}
