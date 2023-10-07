import React from "react";
import { getMonthYear } from "../../utils/date";
import "./Experience.css";
import Skill from "../common/Skill";

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
                <svg
                  width="15"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                  <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                </svg>
                {link.title}
              </a>
            );
          })}
        </div>
        <div className="skills">
          {props.experience.skills.map((skl) => {
            return <Skill skill={skl} key={skl.title} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
