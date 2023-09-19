import React from "react";
import "./Experience.css";
import Link from "../common/Link";
import Skill from "../common/Skill";

const Experience = (props) => {
  return (
    <div className="experience" key={props.experience.title}>
      <div className="left">{props.experience.date}</div>
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
          {props.experience.links.map((lnk) => {
            return <Link link={lnk} key={lnk.title} />;
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
