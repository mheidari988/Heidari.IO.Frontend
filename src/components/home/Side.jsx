import React from "react";
import "./Side.css";

const Side = (props) => {
  return (
    props.data && (
      <div className="side">
        {/* Name and Title Section */}
        <h1>{props.data.name}</h1>
        <h2>{props.data.title}</h2>
        <p>{props.data.subtitle}</p>

        {/* Menu Items Section */}
        <ul className="menu">
          {props.data.menus.map((m) => {
            return (
              <li className="menu-item" key={m.id}>
                {m.url ? (
                  // If we have URL then we render href
                  <a id={m.id} className="underline_from_left" href={m.url}>
                    {m.title.toUpperCase()}
                  </a>
                ) : (
                  // Otherwise we shall use slug to route
                  <a
                    id={m.id}
                    className="underline_from_left"
                    onClick={() => props.setPage(m.slug)}
                  >
                    {m.title.toUpperCase()}
                  </a>
                )}
              </li>
            );
          })}
        </ul>

        {/* Social Media Section */}
        <ul className="social">
          {props.data.socials.map((s, index) => {
            return (
              <li key={index}>
                <a href={s.url} target="_blank">
                  <img src={s.icon} alt={s.title} id={s.title} />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mail-to Section */}
        <p id="mailto">
          Reach out to me at &nbsp;
          <a href="mailto:reza@heidari.io">reza@heidari.io</a>
        </p>
      </div>
    )
  );
};

export default Side;
