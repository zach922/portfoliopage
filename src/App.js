import './App.css';
import Carousel from './components/Carousel';
import Dropdown from './components/Dropdown';
import DropdownItem from './components/DropdownItem';
import EmailForm from './components/EmailForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dropdown >
          <DropdownItem route={"#top"} icon={"HOME"} />
          <DropdownItem route={"#portfolio"} icon={"PORTFOLIO"} />
          <DropdownItem route={"#shop"} icon={"SHOP"} />
          <DropdownItem route={"#contact"} icon={"CONTACT"} />
        </Dropdown>
      </header>
      <body>
        <a id="top">
            <Carousel />
          </a>
          <a id="portfolio">
            <Carousel />
          </a>        
          <a id="shop">
            <Carousel />
          </a>        
          <a id="contact">
            <EmailForm />
          </a>
      </body>
    </div>
  );
}

export default App;
