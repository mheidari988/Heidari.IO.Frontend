import React from "react";
import { getMonthYear } from "../../utils/date";
import "./Experience.css";

const Experience = (props) => {
  return (
    <div className="experience" key={props.experience.title}>
      <div className="left">
        {getMonthYear(props.experience.dateStarted)}
        {" - "}
        {props.experience.dateEnded
          ? getMonthYear(props.experience.dateEnded)
          : "Present"}
      </div>
      <div className="right">
        <h3 className="company">
          <a
            className="underline_from_center"
            href={props.experience.companyUrl}
            target="_blank"
          >
            {props.experience.company}
          </a>
        </h3>
        <h4 className="title">{props.experience.title}</h4>
        <p
          className="description"
          dangerouslySetInnerHTML={{ __html: props.experience.description }}
        />
        <div className="links">
          {props.experience.links.map((link) => {
            return (
              <a
                href={link.url}
                key={link.url}
                target="_blank"
                className="underline_from_center"
              >
                <img src="./link.svg" />
                {link.title}
              </a>
            );
          })}
        </div>
        <div className="skills">
          {props.experience.skills.map((skill) => {
            return <h4 className="skill">{skill.title}</h4>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
