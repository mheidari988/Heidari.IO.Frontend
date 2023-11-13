import React from "react";
import "./GptModel.css";

const GptModel = ({ title, description, icon, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="gpt-model-container"
    >
      <div className="gpt-model-card">
        <img src={icon} alt={title} className="gpt-model-icon" />
        <div className="gpt-model-content">
          <h4 className="gpt-model-title">
            <a
              href={url}
              className="underline_from_center"
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>
          </h4>
          <p className="gpt-model-description">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default GptModel;
