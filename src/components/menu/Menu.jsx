import React from "react";
import "../menu/Menu.css";

const Menu = (props) => {
  function openForm() {
    document.getElementById("contact-card").style.display = "block";
  }

  return (
    props.data && (
      <ul className="menu">
        {props.data.map((m) => {
          return (
            <li className="menu-item" key={m.id}>
              <a id={m.id} className="underline_from_left" href={m.url}>
                {m.title.toUpperCase()}
              </a>
            </li>
          );
        })}
      </ul>
    )
  );
};

export default Menu;
