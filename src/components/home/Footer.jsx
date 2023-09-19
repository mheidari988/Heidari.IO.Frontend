import React, { useEffect, useState } from "react";
import { fetchData } from "../../services/api";

const Footer = () => {
  const [version, setVersion] = useState([]);

  useEffect(() => {
    const getVersion = async () => {
      try {
        const version = await fetchData("/api/version");
        setVersion(version);
      } catch (error) {
        console.error("Failed to fetch version:", error);
      }
    };

    getVersion();
  }, []);

  return (
    <footer>
      This was coded in{" "}
      <a href="https://code.visualstudio.com/" target="_blank">
        Visual Studio Code
      </a>{" "}
      by yours truly. It was built with{" "}
      <a href="https://react.dev/" target="_blank">
        React
      </a>
      , styled with{" "}
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/CSS"
        target="_blank"
      >
        CSS
      </a>
      , managed by{" "}
      <a href="https://dotnet.microsoft.com/en-us/" target="_blank">
        .NET Core backend
      </a>
      , Containerized by{" "}
      <a href="https://www.docker.com/" target="_blank">
        Docker
      </a>
      , and published on my <a href="https://www.linux.org/">Linux</a> server.
      [Version {version.informationalVersion}]
    </footer>
  );
};

export default Footer;
