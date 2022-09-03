import "./Card_Message.css";

interface Props {
  Message: string;
  ChangeMsgCardActive: (value: boolean) => void;
  Msg_card_Active: boolean;
}

export default function Card_Message({
  Message,
  ChangeMsgCardActive,
  Msg_card_Active,
}: Props): JSX.Element {
  return (
    <div
      className={Msg_card_Active ? "container_msg_card" : "msg_message_block"}
    >
      <div className="msg_card">
        <span className="msg_card_message">{Message}</span>
        <button
          onClick={() => ChangeMsgCardActive(false)}
          className="msg_card_button"
        >
          Got It
        </button>
      </div>
    </div>
  );
}
