import { FiAlertTriangle } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { useLocation } from "react-router-dom";

interface Props {
  HandleDeleteCities: (value: string) => void;
  AllowDelelte: boolean;
  setAllowDelelte: (value: boolean) => void;
}

export default function DeleteMessage({
  HandleDeleteCities,
  AllowDelelte,
  setAllowDelelte,
}: Props): JSX.Element {
  const location = useLocation<unknown>();
  const Location = location.pathname.split("/")[1];

  const HandleDelete = (): void => {
    if (Location === "favorites") {
      HandleDeleteCities("favorites");
    } else {
      HandleDeleteCities("home");
    }
    setAllowDelelte(false);
  };

  return (
    <div className={AllowDelelte ? "container_msg_card" : "msg_message_block"}>
      <div className="delete_msg_card">
        <span className="delete_message">Are you sure!</span>
        <span className="delete_message">This action can not be undone</span>
        <button onClick={() => HandleDelete()} className="msg_card_button">
          Got It
        </button>
        <FiAlertTriangle className="alert_icon" />
        <GrClose
          onClick={() => setAllowDelelte(false)}
          className="delete_close_icon"
        />
      </div>
    </div>
  );
}
