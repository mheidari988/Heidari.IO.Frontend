import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./Home.css";
import Side from "./Side";
import Experience from "./Experience";
import Description from "./Description";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import { fetchData } from "../../services/api";
import Loading from "../common/Loading";

const Home = () => {
  const [portfolio, setPortfolio] = useState(null);
  useEffect(() => {
    const getPortfolio = async () => {
      try {
        const portfolioData = await fetchData("/api/portfolio");
        setPortfolio(portfolioData);
      } catch (error) {
        console.error("Failed to fetch portfolio:", error);
      }
    };
    getPortfolio();
  }, []);

  return portfolio ? (
    <>
      <Side data={portfolio} />
      <div className="content">
        <Description data={portfolio.description} />
        {portfolio.experiences.map((exp) => {
          return <Experience key={exp.company} experience={exp} />;
        })}
        <Footer />
      </div>
      <ContactForm />
    </>
  ) : (
    <div className="loading">
      <Loading />
    </div>
  );
};

export default Home;
