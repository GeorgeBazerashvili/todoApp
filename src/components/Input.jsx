import React, { useContext, useEffect, useRef } from "react";
import { Source } from "../App";

function Input() {
  const source = useContext(Source);
  const reference = useRef(null);

  function handleClick() {
    if (source.value != "") {
      source.setItems([...source.items, source.value]);
      source.setValue("");
    }
    reference.current.focus();
  }

  function handleKey(e) {
    if (e.keyCode === 13 && source.value != "") {
      source.setItems([...source.items, source.value]);
      source.setValue("");
      reference.current.focus();
    }
  }

  useEffect(() => {
    document.addEventListener("keyup", handleKey);
    return () => document.removeEventListener("keyup", handleKey);
  }, [handleKey]);

  function removeItem(index) {
    const arr = [...source.items];
    arr.splice(index, 1);
    source.setItems(arr);
  }

  return (
    <>
      <div className="input-kit">
        <input
          type="text"
          placeholder="add your new todo"
          onChange={(e) => source.setValue(e.target.value)}
          value={source.value}
          ref={reference}
        />
        <button className="plus" onClick={() => handleClick()}>
          +
        </button>
      </div>
      <ul>
        {source.items.map((item, index) => {
          return (
            <>
              <div className="list">
                <li key={index} style={{ listStyle: "none" }}>
                  {item}
                </li>
                <button onClick={() => removeItem(index)}>X</button>
              </div>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default Input;
