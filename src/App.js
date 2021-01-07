import "./App.css";
import store from "./store";
import _ from "lodash";

import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const { contacts } = store.getState();
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main />
    </div>
  );
}

export default App;
