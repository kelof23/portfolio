import React, { Component, Fragment } from 'react';
import { Link } from "react-scroll";


class Header extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isSticky: false,
			isOpenSidebar: false,
		}

		this.openSidebar = this.openSidebar.bind(this);
		this.onHandleClickLink = this.onHandleClickLink.bind(this);
	}

	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll);
		document.addEventListener('click', this.handleClickDocument);
	}

	componentWillUnmount() {
 		window.removeEventListener("scroll", this.handleScroll);
 		document.removeEventListener('click', this.handleClickDocument);
	}


	openSidebar() {
		this.setState({ isOpenSidebar: true})
	}

	onHandleClickLink() {
		this.setState({ isOpenSidebar: false})
	}


	handleScroll = (e) => {
	   if (window.scrollY > 10) {
	      this.setState({isSticky: true })
	    } else {
	      this.setState({isSticky: false })
	    }	
	}

	handleClickDocument = (e) => {
		if (e.target.classList.contains("web-navi-backdrop") ) {
			this.setState({ isOpenSidebar: false })
		}
	
	}

  render() {

  const { isSticky, isOpenSidebar } = this.state;


	return(
		  <header className={`kelo-header ${isSticky ? 'kelo-header--sticky': ''} `}>
		    <div className="kelo-header__wrapper">
		      <div className="kelo-header__brand">
		          <Link 
		         	className="kelo-header__link"
				    activeClass="web-navi__link--active"
				    to="home"
				    href="#home"
				    spy={true}
				    smooth={true}
				    offset={0}
				    duration= {500}		          
		          > 		        
		         </Link>
		      </div> 
		      <div className="kelo-header__spacer"></div>
		      <button type="button" className="kelo-header__btn-mobile" onClick={ this.openSidebar }>
		      <svg xmlns="http://www.w3.org/2000/svg" width="18.338" height="12" viewBox="0 0 18.338 12" className={`kelo-header__burger-icon ${isSticky ? 'kelo-header__burger-icon--dark' : ''}`}>
		      <g id="Group_6148" data-name="Group 6148" transform="translate(-288 -20)">
		        <rect id="Rectangle_2400" data-name="Rectangle 2400" width="18.338" height="2" rx="1" transform="translate(288 20)" fill="#fff"></rect>
		        <rect id="Rectangle_2401" data-name="Rectangle 2401" width="14.94" height="2" rx="1" transform="translate(288 25)" fill="#fff"></rect>
		        <rect id="Rectangle_2402" data-name="Rectangle 2402" width="18.338" height="2" rx="1" transform="translate(288 30)" fill="#fff"></rect>
		      </g>
		    </svg>
   			 </button>
   			 { isOpenSidebar &&  <Fragment> <div className="web-navi-backdrop"></div> </Fragment> }
			  <div className={ `kelo-sidebar ${isOpenSidebar ? 'is-open' : ''}` }></div> 
   			 
		      <ul className={ `web-navi kelo-sidebar  ${isOpenSidebar ? 'is-open' : ''}` } >
		        <li className="web-navi__list">
		          <Link 
		            onClick={ this.onHandleClickLink }
		         	className="web-navi__link"
				    activeClass="web-navi__link--active"
				    to="home"
				    href="#home"
				    spy={true}
				    smooth={true}
				    offset={-20}
				    duration= {500}		          
		          > 
		          Home 
		          </Link>
		        </li>
		        <li className="web-navi__list">
		          <Link 
		          	onClick={ this.onHandleClickLink }
				    activeClass="web-navi__link--active"
				    to="skills"
				    href="#skills"
				    spy={true}
				    smooth={true}
				    offset={-30}
				    duration= {500}			          
		          	className="web-navi__link"
		          > 
		          	Skills  
		          </Link>
		        </li>
		        <li className="web-navi__list">
		          <Link 
		          	onClick={ this.onHandleClickLink }
				    activeClass="web-navi__link--active"
				    to="work"
				    href="#work"
				    spy={true}
				    smooth={true}
				    offset={-30}
				    duration= {500}			          
		          	className="web-navi__link"
		          > 
		          	Experience 
		          </Link>
		        </li>          
		        <li className="web-navi__list">
		          <Link 
		          	onClick={ this.onHandleClickLink }
				    activeClass="web-navi__link--active"
				    to="contact"
				    href="#contact"
				    spy={true}
				    smooth={true}
				    offset={-30}
				    duration= {500}			          
		          	className="web-navi__link"
		          > 
		          	Contact  
		          </Link>
		        </li>                         
		      </ul>      
		    </div>
		  </header>		  
		)
	}
}



export default Header;