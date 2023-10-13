import "./Footer.css";
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
      <span dangerouslySetInnerHTML={{ __html: version.description }}></span>
      [Version {version.informationalVersion}]
    </footer>
  );
};

export default Footer;
