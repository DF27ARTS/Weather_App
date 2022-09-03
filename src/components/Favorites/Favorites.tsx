import { ListCities } from "../../Interfaces/ListCities";
import CityCard from "../CityCard/CityCard";
import fav_background_img from "../../Images/fav_background_img.png";
import "./Favorites.css";

interface Props {
  FavoriteCities: ListCities[];
  DeleteCityFromFavorites: (id: number) => void;
}

export default function Favorites({
  FavoriteCities,
  DeleteCityFromFavorites,
}: Props): JSX.Element {
  return (
    <>
      <img
        className="favorites_background_image"
        src={fav_background_img}
        alt="favorite background img"
      />
      <div className="container_favorites">
        {FavoriteCities.length ? (
          FavoriteCities.map((city) => (
            <CityCard
              key={city.id}
              city={city}
              DeleteCityFromFavorites={DeleteCityFromFavorites}
            />
          ))
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}
