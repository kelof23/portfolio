import React from 'react';

const Timeline  = (props) => {
  const data = props.portfolioData;
  let expList;
  expList = data.workExp.map((exp, i) => (
    <div className="kelo-timeline__list" key={ i }>
      <div className="kelo-timeline__item">
        <div className="kelo-timeline__step">
          <div className="kelo-timeline__timeline">
            <div className="kelo-timeline__circle"> </div>
            <div className="kelo-timeline__timeline-heading"> 
              <span>{ exp.title }</span>
              <span className="kelo-timeline__date">{ exp.date }</span>
             </div>
          </div>
        </div>
        <div className="kelo-timeline__info">
          <div className="kelo-timeline__body">
            <img className="kelo-timeline__logo" src={exp.imageUrl} alt="" />
            <span className="kelo-timeline__title"> { exp.company } </span>
            <div className="kelo-timeline__sub"> { exp.description } </div>
          </div>
        </div>              
      </div>
    </div>     
  ))
	return(
    <section className="kelo-section  kelo-section--with-background" id="work">
      <div className="container">   
        <h1 className="kelo-heading text-white"> Experience  </h1>
        <div className="kelo-timeline">
           { expList }                             
        </div>
      </div>
    </section>	  
		)
}



export default Timeline ;