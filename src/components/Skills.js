import React from 'react';

 const Skills = (props) => {

    const data = props.portfolioData;
    let skillList;
    skillList = data.skills.map((s, i) => (
          <div className="col-2" key={i}>
            <div className="kelo-skill">
              <div className="kelo-skill__canvas-wrapper">
              </div>
              <div className="kelo-skill__text"> {s.name}</div>
            </div>           
          </div>          
    ));

 	return (
    <section className="kelo-section" id="skills">
      <div className="container">       
        <h1 className="kelo-heading"> Skills  </h1>
        <div className="row">
    
              { skillList } 
                        
        </div>
      </div>
    </section>

 		)
 }

 export default Skills;