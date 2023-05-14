import React, { useContext } from "react";
import { Source } from "../App";

function ClearList() {
  const source = useContext(Source);
  return (
    <footer>
      <p>you have {source.items.length} pending tasks</p>
      <button onClick={() => source.setItems([])}>Clear All</button>
    </footer>
  );
}

export default ClearList;
