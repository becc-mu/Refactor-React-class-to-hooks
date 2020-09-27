import React, { useState } from "react";

export default function Playground0() {
  // constructor(...args) {
  //   super(...args);
  //   this.state = { text: "", checked: false };
  // }
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);

  // const { text, checked } = this.state;
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
        onChange={(e) => setChecked(e.target.checked)}
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
