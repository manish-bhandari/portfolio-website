import React from 'react'
import './OtherWork.css'
const OtherWork = () => {
  return (
    <section className="otherwork-container">
      <div className="work-title">
        <div className="work-line"></div>
        <h1>Other Work</h1>
        <div className="work-line2"></div>
      </div>
      <div className="otherworkcards-container">
        <PhotoCard name="Photography" />
        <PhotoCard name="Videography" />
        <PhotoCard name="Papercrafts" />
      </div>
    </section>
  );
}

const PhotoCard = ({name}) => {
	return (
    <div className="photocard-container">
      <img src={`assets/${name}.jpg`} alt="" />
      <h1>{name}</h1>
    </div>
  );
}

export default OtherWork