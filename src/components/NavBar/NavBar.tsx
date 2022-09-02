import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const inisialState = {
  value: "",
};

interface Input {
  value: string;
}

export default function NavBar() {
  const [Input, setInput] = useState<Input>(inisialState);

  const HandleChangeInput = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>): void => {
    setInput({ ...Input, [name]: value });
  };

  const HandleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setInput(inisialState);
  };

  return (
    <nav className="container_navbar">
      <Link to="/">
        <span>Home</span>
      </Link>
      <form onSubmit={(e) => HandleSubmit(e)}>
        <input
          id="input"
          onChange={HandleChangeInput}
          type="text"
          name="value"
          value={Input.value}
          placeholder="Search City"
        />
        <button>Search</button>
      </form>
      <Link to="/favorites">
        <span>Favorites</span>
      </Link>
    </nav>
  );
}
