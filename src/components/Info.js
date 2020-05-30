import React from 'react';

const Info  = (props) => {
    const data = props.portfolioData;
	return(
    <section className="kelo-section" id="myinfo">
    <div className="container">          
        <h1 className="kelo-heading"> About me </h1> 
        <div className="kelo-intro__primary"> { data.intro } </div>
     </div> 
    </section>
			
    )

}

export default Info;