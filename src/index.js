import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const renderNum = () => {
    return <div>coding on browser </div>;
  };

  return (
    <div className="App">
      <h1>What is going on </h1>
      <h1>this is the second one</h1>
      {renderNum()}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
