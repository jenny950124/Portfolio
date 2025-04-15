import React from 'react';
import Slider from 'react-slick';
import './About.css';

import image1 from '../assets/aboutme.jpg';
import image2 from '../assets/aboutme2.jpg';
import image3 from '../assets/aboutme3.jpg';
import image4 from '../assets/aboutme4.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const About = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="about-page">
      <div className="intro-heading">
        <p className="intro">
          Hi, I'm <span className="wave" role="img" aria-label="waving hand">👋</span>
        </p>
        <h2><span className="highlight-name">Jenny "NaYeon" Kim</span></h2>
        <p className="subtitle">UX/UI Designer & Developer</p>
      </div>

      <div className="about-content">
        <div className="about-slider">
          <Slider {...sliderSettings}>
            <div><img src={image1} alt="It's Me" /></div>
            <div><img src={image2} alt="Working on UX Research" /></div>
            <div><img src={image3} alt="Sketching at Café" /></div>
            <div><img src={image4} alt="Nature Walk" /></div>
          </Slider>
        </div>

        <div className="bio-section">
          <div className="keyword-buttons">
            <button className="keyword-btn">Design</button>
            <button className="keyword-btn">Empathy</button>
            <button className="keyword-btn">Creativity</button>
          </div>

          <p>
            Hi, I’m Jenny Kim — a UX/UI designer and frontend developer based in Canada, originally from South Korea.
            With a background in nursing, I bring a unique perspective to design, combining empathy with creative problem-solving.
          </p>
          <p>
            I specialize in accessible, user-centered digital experiences and hold a diploma in New Media and Web Development from BCIT.
            My skills include HTML, CSS, JavaScript, and React, and I enjoy translating ideas into clean, functional interfaces.
          </p>
          <p>
            Whether collaborating in teams or working solo, I value feedback, curiosity, and clarity.
            Outside of work, you’ll likely find me in a cozy café, sketching or exploring new inspirations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
