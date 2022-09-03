import React from "react";
import { ListCities } from "../../Interfaces/ListCities";
import CityCard from "../CityCard/CityCard";

interface Props {
  FavoriteCities: ListCities[];
}

export default function Favorites({ FavoriteCities }: Props): JSX.Element {
  return (
    <>
      <div className="container_favorites">
        {FavoriteCities.length ? (
          FavoriteCities.map((city) => <CityCard key={city.id} city={city} />)
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}
