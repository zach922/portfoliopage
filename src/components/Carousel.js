import React, { Component } from 'react';
import Bootstrap, { Carousel, BImg } from 'bootstrap-4-react';
import pic from './media/pic1.jpg';
import './stylesheets/Carousel.css';

export default class App extends Component {
  // A workaround since documentation pages are server-side-rendered
  // In most projects can be:
  // componentDidMount() {
  //   Bootstrap.carousel();
  // }
  componentWillMount() {
    window.setTimeout(() => Bootstrap.carousel(), 2000);
  }

  render() {
    return (
      <Carousel w="100" id="carouselExample">
        <Carousel.Inner>
          <Carousel.Item active><BImg display="block" w="100" src={pic} /></Carousel.Item>
          <Carousel.Item><BImg display="block" w="100" src={pic} /></Carousel.Item>
        </Carousel.Inner>
      </Carousel>
    )
  }
}