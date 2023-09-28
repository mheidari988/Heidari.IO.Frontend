import React from "react";

const Menu = (props) => {
  function openForm() {
    document.getElementById("contact-card").style.display = "block";
  }

  return (
    <ul className="menu">
      {props.menu.map((m) => {
        if (m.url === "#cv") {
          return (
            <li key={m.title}>
              <a
                id={m.title.toLowerCase()}
                className="underline_from_left"
                href="https://heidaristorage.blob.core.windows.net/heidari-io-container/Resume.pdf"
                download
              >
                {m.title.toUpperCase()}
              </a>
            </li>
          );
        } else {
          return (
            <li key={m.title}>
              <a
                id={m.title.toLowerCase()}
                className="underline_from_left"
                href={m.url}
                onClick={m.url === "#openForm" ? openForm : undefined}
              >
                {m.title.toUpperCase()}
              </a>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default Menu;
