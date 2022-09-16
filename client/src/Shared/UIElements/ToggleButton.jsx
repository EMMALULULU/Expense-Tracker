import React, { useState } from 'react';
import './ToggleButton.css';

export default function ToggleButton(props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="toggle-btn"
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        {props.title}
      </button>
      {open && <div className="toggle-content">{props.children}</div>}
    </>
  );
}
