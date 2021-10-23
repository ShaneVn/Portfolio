import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { useState, useEffect } from "react";
import {
  reactProject,
  javaScriptProject,
  typeScriptProject,
  nodeProject,
  cssProject,
} from "../../data.js";

export default function Portfolio() {
  const [selected, setSelected] = useState("react");
  const [data, setData] = useState([]);

  const list = [
    {
      category: "react",
      title: "React",
      id: 1,
    },
    {
      category: "javaScript",
      title: "JavaScript",
      id: 2,
    },
    {
      category: "typeScript",
      title: "TypeScript",
      id: 3,
    },
    {
      category: "node",
      title: "Node.js",
      id: 4,
    },
    {
      category: "css",
      title: "CSS",
      id: 5,
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "react":
        setData(reactProject);
        break;
      case "javaScript":
        setData(javaScriptProject);
        break;
      case "typeScript":
        setData(typeScriptProject);
        break;
      case "node":
        setData(nodeProject);
        break;
      case "css":
        setData(cssProject);
        break;
      default:
        setData(reactProject);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.category}
            setSelected={setSelected}
            category={item.category}
            key={item.id}
          />
        ))}
      </ul>

      <div className="container">
        {data.map((d) => (
          <div className="item" key={d.id}>
            <a className="links" href={d.link} target="_blank" rel="noreferrer">
              {" "}
              <img src={d.img} alt={d.title} />{" "}
            </a>
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
