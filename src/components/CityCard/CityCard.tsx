import { ListCities } from "../../Interfaces/ListCities";
import { TiHeartFullOutline } from "react-icons/ti";
import { FaTrashRestoreAlt } from "react-icons/fa";
import "./CityCard.css";

interface Props {
  city?: ListCities;
  DeleteCityFromTheList?: (id: number) => void;
  AddCityToFavorites?: (city: ListCities) => void;
}

export default function CityCard({
  city,
  DeleteCityFromTheList,
  AddCityToFavorites,
}: Props) {
  const id = city?.id;

  return (
    <>
      <div className="container_card">
        <h1 className="city_title">{city?.name}</h1>
        <span className="Card_titles">Clouds</span>
        <span className="card_info">{city?.clouds?.all}</span>
        <span className="Card_titles">Longitude</span>
        <span className="card_info">{city?.coord?.lon}</span>
        <span className="Card_titles">Latitude</span>
        <span className="card_info">{city?.coord?.lat}</span>
        <span className="Card_titles">Temperature</span>
        <span className="card_info">{city?.main?.temp}</span>
        <span className="Card_titles">Wind Speed</span>
        <span className="card_info">{city?.wind?.speed}</span>
        <TiHeartFullOutline
          className="Fav_btn"
          onClick={() =>
            AddCityToFavorites && city ? AddCityToFavorites(city) : null
          }
        />
        <FaTrashRestoreAlt
          className="delete_btn"
          onClick={() =>
            DeleteCityFromTheList && id ? DeleteCityFromTheList(id) : null
          }
        />
      </div>
    </>
  );
}
