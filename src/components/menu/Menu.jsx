import React from "react";
import { postData } from "../../services/api";
import "../menu/Menu.css";

const Menu = (props) => {
  function openForm() {
    document.getElementById("contact-card").style.display = "block";
  }

  async function handleDownloadCv() {
    const secretCode = prompt("Please enter the secret code to download CV");
    if (secretCode) {
      postData(
        "/api/portfolio/download-file",
        { secretCode: secretCode },
        { responseType: "blob" }
      )
        .then((blob) => {
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "Resume.pdf"); // This ensures the file is downloaded
          document.body.appendChild(link);
          link.click();
          link.remove();
          window.URL.revokeObjectURL(url);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  return (
    props.data && (
      <ul className="menu">
        {props.data.map((m) => {
          return (
            <li className="menu-item" key={m.id}>
              {m.url === "#cv-dl" ? (
                <a
                  id={m.id}
                  className="underline_from_left"
                  onClick={handleDownloadCv}
                >
                  {m.title.toUpperCase()}
                </a>
              ) : (
                <a id={m.id} className="underline_from_left" href={m.url}>
                  {m.title.toUpperCase()}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    )
  );
};

export default Menu;
