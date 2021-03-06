import React from "react";
import "./Work.css";
import { WorksItems } from "./WorksItems";
const Work = () => {
  return (
    <section className="work_section" id="work">
      <h1 className="work_title section_title" data-aos="fade-up">
        Things I've Made
      </h1>
      <div className="work_cards_container" data-aos="fade-up">
        {WorksItems.map((work, index) => (
          <WorkCard
            name={work.name}
            utilized={work.utilized}
            desc={work.description}
            links={work.links}
            key={index}
            hyperlink={work.hyperlink}
          />
        ))}
      </div>
    </section>
  );
};

const WorkCard = ({ name, utilized, desc, links,hyperlink }) => {
  return (
    <a href={hyperlink ? hyperlink : ""} className="workcard-container">
      <div className="project_header">
        <h1>{name}</h1>
        <div className="project_links">
          {links.map((link, index) => (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </div>
      <div className="workcard_details">
        <p>{desc}</p>
        <div className="utilized-container">
          {utilized.map((name, idx) => (
            <h3 key={idx}>{name}</h3>
          ))}
        </div>
      </div>
    </a>
  );
};

export default Work;
