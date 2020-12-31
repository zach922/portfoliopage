import './App.css';
import Carousel from './components/Carousel';
import Dropdown from './components/Dropdown';
import DropdownItem from './components/DropdownItem';

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
        <a href="#" alt="#" id="top">
          <Carousel />
        </a>
        <a href="#" alt="#" id="portfolio">
          <Carousel />
        </a>        
        <a href="#" alt="#" id="shop">
          <Carousel />
        </a>        
        <a href="#" alt="#" id="contact">
          <Carousel />
        </a>
      </header>
    </div>
  );
}

export default App;
