import './App.css';
import Carousel from './components/Carousel';
import Dropdown from './components/Dropdown';
import DropdownItem from './components/DropdownItem';
import EmailForm from './components/EmailForm';
import Scroll from 'react-scroll';

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
      <body>        
        <Scroll.Element name="top">
          <Carousel />
        </Scroll.Element>
        <Scroll.Element name="portfolio">
          <EmailForm />
        </Scroll.Element>      
        <Scroll.Element name="shop">
          <Carousel />
        </Scroll.Element>
        <Scroll.Element name="contact">
          <EmailForm />
        </Scroll.Element> 
      </body>
    </div>
  );
}

export default App;
