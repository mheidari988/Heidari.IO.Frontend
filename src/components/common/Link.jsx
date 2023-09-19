import React from "react";
import { LinkIcon } from "./Icons";

const Link = (props) => {
  return (
    <a
      href={props.link.url}
      key={props.link.url}
      target="_blank"
      className="underline_from_center"
    >
      <LinkIcon width={15} />
      {props.link.title}
    </a>
  );
};

export default Link;
