import React from "react";
import GptModel from "./GptModel";

const Gpts = (props) => {
  return (
    <>
      <div className="content-inner">
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: props.portfolio.gpts.description }}
        />
        {props.portfolio.gpts.gptModels.map((gpt, index) => {
          return (
            <GptModel
              key={index}
              title={gpt.title}
              description={gpt.description}
              icon={gpt.icon}
              url={gpt.url}
            />
          );
        })}
      </div>
    </>
  );
};

export default Gpts;
