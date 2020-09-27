import React, { useState } from "react";

export default function Playground0() {
  // const [text, setText] = useState("");
  const [state, setState] = useState({
    text: "",
    checked: false,
  });
  // const [checked, setChecked] = useState(false);
  // const handleCheckboxToggle = e => {
  //   setChecked({e.target.checked: !checked })
  // }

  // Negating checked method
  // const handleCheckboxToggle = (e) => {
  //   setChecked(!checked);
  // };

  // Providing a previous method
  // const handleCheckboxToggle = (e) => {
  //   setChecked((prevChecked) => !prevChecked);
  // };

  const mergeState = (partialState) =>
    setState((prevState) => ({
      ...prevState,
      ...partialState,
    }));

  return (
    <section>
      <input
        type="text"
        value={state.text}
        onChange={(e) => mergeState({ text: e.target.value })}
      />
      <input
        type="checkbox"
        checked={state.checked}
        // onChange={handleCheckboxToggle}
        onChange={(e) => mergeState({ checked: !state.checked })}
      />
      <ul>
        <li>{state.text}</li>
        <li>{state.checked.toString()}</li>
      </ul>
    </section>
  );
}

export function PlaygroundX() {
  return (
    <section>
      <input type="text" value={""} onChange={(e) => {}} />
      <input type="checkbox" checked={false} onChange={(e) => {}} />
      <ul>
        <li>{""}</li>
        <li>{""}</li>
      </ul>
    </section>
  );
}
