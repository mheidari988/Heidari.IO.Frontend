import React from "react";
import { postData } from "../../services/api";
import Experience from "./Experience";
import "./Resume.css";

const Resume = (props) => {
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
    <div className="content-inner">
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: props.portfolio.description }}
      />
      {props.portfolio.experiences.map((exp, index) => {
        return <Experience key={index} experience={exp} />;
      })}
      <p>
        <a
          className="download-cv underline_from_left"
          onClick={handleDownloadCv}
        >
          Download Full CV
        </a>
      </p>
    </div>
  );
};

export default Resume;
