import React, {Component} from 'react';
import Slider from 'react-slick';

 class TestimonialSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: true,
        pauseOnHover:true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div>
          <Slider {...settings} className="testimonial_slider">
                <div className="item">
                    <div className="author_img">
                        <img src={require('../../image/slider5.png')} alt=""/>
                    </div>
                    <h6>Maharishi International University</h6>
                    <span> Aug 2020. Fairfield, IA , United States</span>
                    <p> Masters in Software Development</p>
                </div>
                <div className="item">
                    <div className="author_img">
                        <img src={require('../../image/slider7.png')} alt=""/>
                    </div>
                    <h6>Mekelle institute of technology</h6>
                    <span> jun 2018. Ethiopia ,Mekele</span>
                    <p>Bachler Degree in Computer Enginerin</p>
                </div>
                
          </Slider>
        </div>
      );
    }
  }
  export default TestimonialSlider;