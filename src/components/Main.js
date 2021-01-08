import "./Main.css";
import Empty from "./Empty";
import ChatWindow from "./ChatWindow";

export default function Main({ user, activeUserId }) {
  return (
    <main className="Main">
      {activeUserId ? (
        <ChatWindow activeUserId={activeUserId} />
      ) : (
        <Empty user={user} activeUserId={activeUserId} />
      )}
    </main>
  );
}
