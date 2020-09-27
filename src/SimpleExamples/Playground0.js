import React, { useState } from "react";

export default function Playground0() {
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
  // const handleCheckboxToggle = e => {
  //   setChecked({e.target.checked: !checked })
  // }

  // Negating checked method
  // const handleCheckboxToggle = (e) => {
  //   setChecked(!checked);
  // };

  // Providing a previous method
  const handleCheckboxToggle = (e) => {
    setChecked((prevChecked) => !prevChecked);
  };

  return (
    <section>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxToggle}
      />
      <ul>
        <li>{text}</li>
        <li>{checked.toString()}</li>
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
