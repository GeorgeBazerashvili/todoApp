import "./App.css";
import Top from "./components/Top";
import Input from "./components/Input";
import ClearList from "./components/ClearList";
import { useState, createContext } from "react";

export const Source = createContext("");

function App() {
  const [value, setValue] = useState(0);
  const [items, setItems] = useState([]);
  return (
    <Source.Provider value={{ value, setValue, items, setItems }}>
      <section className="todo">
        <Top />
        <Input />
        <ClearList />
      </section>
    </Source.Provider>
  );
}

export default App;
