import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ListCities } from "../../Interfaces/ListCities";
import detail_background_img from "../../Images/detail_background_img.jpg";
import "./CardDetail.css";

interface Params {
  city_id: string;
}

export default function CardDetail() {
  const { city_id } = useParams<Params>();
  const [FavoritePage, setFavoritePage] = useState<ListCities[]>([]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?id=${city_id}&appid=4ae2636d8dfbdc3044bede63951a019b`
      )
      .then((res) => setFavoritePage([res.data]));
    // return () => {
    //   setFavoritePage({});
    // };
  }, [axios]);

  return (
    <>
      <img
        className="card_img_detail"
        src={detail_background_img}
        alt={FavoritePage.length ? FavoritePage[0].name : "detail img"}
      />
      {FavoritePage.length ? (
        FavoritePage.map((city) => (
          <div className="container_detail">
            <span className="card_detail_title">{city.name}</span>
            <div className="container_left_and_right">
              <span className="single_card_detail_title">Coords</span>
              <div className="containers">
                <span className="single_card_detail_information">
                  Longitude
                </span>
                <span className="single_card_detail_information">Latitue</span>
              </div>
              <div className="containers">
                <span className="single_card_detail_information">
                  {city.coord?.lon}
                </span>
                <span className="single_card_detail_information">
                  {city.coord?.lat}
                </span>
              </div>

              <span className="single_card_detail_title">Temperature</span>
              <div className="containers">
                <span className="single_card_detail_information">min</span>
                <span className="single_card_detail_information">max</span>
              </div>
              <div className="containers">
                <span className="single_card_detail_information">
                  {city.main?.temp_min}
                </span>
                <span className="single_card_detail_information">
                  {city.main?.temp_max}
                </span>
              </div>

              <div className="single_card_detail_title">
                <span className="single_card_detail_title">Sunrise</span>
                <span className="single_card_detail_title">Sunset</span>
              </div>
              <div className="containers">
                <span className="single_card_detail_information">
                  {city.sys?.sunrise}
                </span>
                <span className="single_card_detail_information">
                  {city.sys?.sunset}
                </span>
              </div>
            </div>

            <div className="container_left_and_right">
              <span className="single_card_detail_title">Description</span>
              <div className="containers">
                <span className="single_card_detail_information">
                  {city?.weather[0].main}
                </span>
                <span className="single_card_detail_information">
                  {city?.weather[0].description}
                </span>
              </div>

              <span className="single_card_detail_title">Wind speed</span>
              <span className="single_card_detail_information">
                {city.wind?.speed}
              </span>

              <span className="single_card_detail_title">Time Zone</span>
              <span className="single_card_detail_information">
                {city.timezone}
              </span>
            </div>
            <img
              className="single_card_detail_image"
              src={`http://openweathermap.org/img/wn/${city?.weather[0].icon}@2x.png`}
              alt={city?.name}
            />
          </div>
        ))
      ) : (
        <div></div>
      )}
    </>
  );
}
