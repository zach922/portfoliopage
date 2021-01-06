import './App.css';
import Carousel from './components/Carousel';
import Dropdown from './components/Dropdown';
import DropdownItem from './components/DropdownItem';
import EmailForm from './components/EmailForm';
import Zach from './components/Zach'
import Scroll from 'react-scroll';
import Footer from './components/Footer';
import Shop from './components/Shop';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dropdown >
          <Scroll.Link activeClass="active" to="top" spy={true} smooth={true} duration={250}>
            <DropdownItem route={""} icon={"HOME"} />
          </Scroll.Link>
          <Scroll.Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={250}>
            <DropdownItem route={""} icon={"PORTFOLIO"} />
          </Scroll.Link>
          <Scroll.Link activeClass="active" to="shop" spy={true} smooth={true} duration={250}>
            <DropdownItem route={""} icon={"SHOP"} />
          </Scroll.Link>
          <Scroll.Link activeClass="active" to="contact" spy={true} smooth={true} duration={250}>
            <DropdownItem route={""} icon={"CONTACT"} />
          </Scroll.Link>
        </Dropdown>
      </header>        
      <Scroll.Element name="top">
        <Zach />
      </Scroll.Element>
      <Scroll.Element name="portfolio">
        <Carousel />
      </Scroll.Element>      
      <Scroll.Element name="shop">
        <Shop />
      </Scroll.Element>
      <Scroll.Element name="contact">
        <EmailForm />
        <Footer />
      </Scroll.Element> 

    </div>
  );
}

export default App;
