import { ListCities } from "../../Interfaces/ListCities";
import background_image from "../../Images/background_image.jpg";
import CityCard from "../CityCard/CityCard";
import "./Home.css";

interface Props {
  ListCities: ListCities[];
  AddCityToFavorites: (city: ListCities) => void;
  setCurrentId: (id: number) => void;
  setAllowDelelte: (value: boolean) => void;
}

export default function Home({
  ListCities,
  AddCityToFavorites,
  setCurrentId,
  setAllowDelelte,
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
              AddCityToFavorites={AddCityToFavorites}
              setCurrentId={setCurrentId}
              setAllowDelelte={setAllowDelelte}
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
