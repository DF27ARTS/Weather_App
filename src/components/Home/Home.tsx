import { ListCities } from "../../Interfaces/ListCities";
import background_image from "../../Images/background_image.jpg";
import CityCard from "../CityCard/CityCard";
import "./Home.css";

interface Props {
  ListCities: ListCities[];
  DeleteCityFromTheList: (id: number) => void;
  AddCityToFavorites: (city: ListCities) => void;
}

export default function Home({
  ListCities,
  DeleteCityFromTheList,
  AddCityToFavorites,
}: Props): JSX.Element {
  return (
    <>
      <img
        className="background_home_image"
        src={background_image}
        alt="background image"
      />
      <div className="container_cards">
        {ListCities.length ? (
          ListCities.map((city) => (
            <CityCard
              key={city.id}
              DeleteCityFromTheList={DeleteCityFromTheList}
              AddCityToFavorites={AddCityToFavorites}
              city={city}
            />
          ))
        ) : (
          <div className="add_new_cities">Add New Cities</div>
        )}
      </div>
    </>
  );
}
