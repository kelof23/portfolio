import React from 'react';
import { Link } from "react-scroll";

const Kelo = (props) => {

	const data = props.portfolioData;

	return(
	    <section className="kelo-intro" >
	      <div className="container">
	        <div className="kelo-intro__wrapper">
	          <div className="kelo-intro__main">
	          <div className="kelo-intro__intro">  
	          <h2 className="kelo-intro__name">{ data.name } </h2>
	          <h2 className="kelo-intro__heading"> { data.role }. </h2>
	          {/* <h1 className="kelo-intro__primary"> { data.intro } </h1>  */}
	          <div className="kelo-intro__action">
	          <Link 
	         	className="btn btn-outline-white btn-radius btn-lg"
			    to="myinfo"
			    href="#myinfo"
			    spy={true}
			    smooth={true}
			    offset={-50}
			    duration= {500}		          
	          > 	          
	            About myself 
	          </Link>
	          </div>
	          </div>           
	          </div>
	        </div>
	      </div>
	    </section>			
		)
}

export default Kelo;