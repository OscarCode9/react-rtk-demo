import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CakeView from "./features/cake/cakeView";
import IcecreamView from "./features/icecream/icecreamSliceView";
import UserView from "./features/user/userSliceView";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CakeView />
      <IcecreamView />
      <UserView />
    </div>
  );
}

export default App;
