import React, { useState } from "react";
import Login from "./components/Login";
import MainScreen from "./components/MainScreen";
import "./App.css";
// import from zustand store
import { useUserExistsStore } from "./store/Store.js";

function App() {
  const doesUserExists = useUserExistsStore((state) => state.doesUserExists);
  const [commentVisibility, setCommentVisibility] = useState(false);

  return (
    <div className="App">
      {doesUserExists ? (
        <MainScreen
          commVisi={commentVisibility}
          setCommVisi={setCommentVisibility}
        />
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
