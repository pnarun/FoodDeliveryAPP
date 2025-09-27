import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

// Fetch root div from HTML
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering React componet
root.render(<AppLayout />);
