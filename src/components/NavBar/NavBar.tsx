import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { ListCities } from "../../Interfaces/ListCities";
import "./NavBar.css";

const inisialState = {
  value: "",
};

interface Props {
  AddNewCityToTheList: (city: ListCities) => void;
  ListCities: ListCities[];
}

interface Input {
  value: string;
}

export default function NavBar({ AddNewCityToTheList, ListCities }: Props) {
  const [Input, setInput] = useState<Input>(inisialState);

  const HandleChangeInput = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>): void => {
    setInput({ ...Input, [name]: value });
  };

  const HandleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    let ValidateCityExistence: boolean = false;
    ListCities.forEach((city) => {
      if (city.name?.toLowerCase() === Input.value.toLowerCase()) {
        ValidateCityExistence = true;
      }
    });
    if (!ValidateCityExistence) {
      if (Input.value) {
        try {
          const { data } = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${Input.value}&appid=4ae2636d8dfbdc3044bede63951a019b`
          );
          console.log(data);
          AddNewCityToTheList(data);
        } catch (error) {
          console.log(error);
          alert("City wasn't found");
        }
      } else {
        alert("Input de busqueda esta vacio!");
        ValidateCityExistence = false;
      }
    } else {
      ValidateCityExistence = false;
      alert("City already exists!");
    }
    setInput(inisialState);
  };

  return (
    <nav className="container_navbar">
      <Link to="/">
        <button className="Links">Home</button>
      </Link>
      <form onSubmit={(e) => HandleSubmit(e)}>
        <input
          className="text_input"
          id="input"
          onChange={HandleChangeInput}
          type="text"
          name="value"
          value={Input.value}
          placeholder="Search City"
        />
        <button className="button_input">Search</button>
      </form>
      <Link to="/favorites">
        <button className="Links">Favorites</button>
      </Link>
    </nav>
  );
}
