import React from 'react'
import './Work.css'
import { WorksItems } from './WorksItems'
const Work = () => {
  return (
    <section className="work-section">
      <div className="work-title">
        <div className="work-line"></div>
        <h1>Things I've Made</h1>
        <div className="work-line2"></div>
      </div>

      <div className="work-cards-container">
        {WorksItems.map((work) => (
          <WorkCard
            name={work.name}
            utilized={work.utilized}
            desc={work.description}
          />
        ))}
      </div>
    </section>
  );
}

const WorkCard = ({name,utilized,desc}) => {
  return (
    <div className="workcard-container">
      <h1>{name}</h1>
      <p>{desc}</p>
      <div className="utilized-container">
        {utilized.map((name)=>(
          <h3>{name}</h3>
        ))}
      </div>
    </div>
  )
}

export default Work