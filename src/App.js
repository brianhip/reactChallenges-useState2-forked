import { useState } from "react";
import "./styles.css";

export default function App() {
  const [displayText, setText] = useState(true);
  return (
    <div className="container">
      <button onClick={() => setText((displayText) => !displayText)}>
        Show / Hide
      </button>
      {displayText ? <h1>Welcome to React Challenges</h1> : null}
    </div>
  );
}
