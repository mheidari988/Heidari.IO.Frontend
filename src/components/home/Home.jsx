import { useState, useEffect } from "react";
import "./Home.css";
import Side from "./Side";
import ContactForm from "../contact-form/ContactForm";
import Footer from "./Footer";
import { fetchData } from "../../services/api";
import Loading from "../common/Loading";
import Resume from "../resume/Resume";
import OpenSource from "../open-source/OpenSource";
import Gpts from "../gpts/Gpts";

const Home = () => {
  const [page, setPage] = useState("/");
  const [portfolio, setPortfolio] = useState(null);
  const [isServerDown, setIsServerDown] = useState(false);

  useEffect(() => {
    const getPortfolio = async () => {
      try {
        const portfolioData = await fetchData("/api/portfolio");
        setPortfolio(portfolioData);
      } catch (error) {
        setIsServerDown(true);
        console.error("Failed to fetch portfolio:", error);
      }
    };
    getPortfolio();
  }, []);

  return portfolio ? (
    <>
      <Side data={portfolio} setPage={setPage} />
      <div className="content">
        {page === "/" && <Resume portfolio={portfolio} />}
        {page === "/gpts" && <Gpts portfolio={portfolio} />}
        {page === "/opensource" && <OpenSource />}
        {page === "/contact" && <ContactForm />}
        <Footer />
      </div>
    </>
  ) : (
    <Loading isServerDown={isServerDown} />
  );
};

export default Home;
