import React from "react";
import { QuickForm } from "./components/QuickForm";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <QuickForm />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
