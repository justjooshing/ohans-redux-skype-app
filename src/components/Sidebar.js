import User from "../containers/User";
import "./Sidebar.css";

export default function Sidebar({ contacts }) {
  return (
    <aside className="Sidebar">
      {contacts.map((contact) => (
        <User user={contact} key={contact.user_id} />
      ))}
    </aside>
  );
}
