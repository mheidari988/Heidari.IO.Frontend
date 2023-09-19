import React from "react";
import "./Side.css";
import Menu from "./Menu";

const Side = (props) => {
  return (
    <div className="side">
      <h1>{props.data.name}</h1>
      <h2>{props.data.title}</h2>
      <p>{props.data.subtitle}</p>
      <Menu menu={props.data.menu} />
      <ul className="social">
        {props.data.social.map((s, index) => {
          return (
            <li key={index}>
              <a href={s.url} target="_blank">
                <img src={s.icon} alt={s.title} id={s.title} />
              </a>
            </li>
          );
        })}
      </ul>
      <p id="mailto">
        Reach out to me at &nbsp;
        <a href="mailto:reza@heidari.io">reza@heidari.io</a>
      </p>
    </div>
  );
};

export default Side;