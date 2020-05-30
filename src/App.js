import React, { Fragment, Component } from 'react';
import Header from './components/Header';
import Kelo from './components/Kelo';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Info from './components/Info';
import Contact from './components/Contact';
import Footer from './components/Footer';
import portfolioData from './data/data';
import './sass/main.scss';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      isOpenModal: false,
      projectInfo: [],
    }

  }

  componentDidMount() {
     document.addEventListener("click", this.handleClickDocument);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickDocument);
  }

  handleClickDocument = (e) => {
    if (e.target.classList.contains("modal") ) {
        this.setState({ isOpenModal: false });
        document.querySelector('body').classList.remove('no-scroll');
    }    
  }

  handleClick = (id) => {
      this.setState({ isOpenModal: true });
      document.querySelector('body').classList.add('no-scroll');
      this.getInfo(id);    
  }

  getInfo = (id) => {
     const data = portfolioData.projects.filter( proj => ( proj.id === id ));
     this.setState({ projectInfo: data})
  }  


  render() {
    return (
      <Fragment>
       <Header portfolioData={ portfolioData } />
        <main className="web-main" id="home">
          <Kelo portfolioData={ portfolioData } id="home" />     
          <Info portfolioData={ portfolioData } />     
          <Skills portfolioData={ portfolioData }/>
          <Timeline portfolioData={ portfolioData } />
          <Contact />
        </main> 
       <Footer />
      </Fragment>
    );   
  }

}

export default App;
