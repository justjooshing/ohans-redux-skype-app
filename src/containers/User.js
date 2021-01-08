import { setActiveUserId } from "../actions";
import store from "../store";
import "./User.css";

export default function User({ user }) {
  const { name, profile_pic, status } = user;

  const handleUserClick = ({ user_id }) => {
    store.dispatch(setActiveUserId(user_id));
  };

  return (
    <div className="User" onClick={() => handleUserClick(user)}>
      <img src={profile_pic} alt={name} className="User__pic" />
      <div className="User__details">
        <p className="User__details-name">{name}</p>
        <p className="User__details-status">{status}</p>
      </div>
    </div>
  );
}
