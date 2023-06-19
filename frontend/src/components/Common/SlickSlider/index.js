import React, { Component } from "react";
import Slider from "react-slick";     
import CategoryItem from "~/components/Category/CategoryItem";
import './SlickSlider.scss';

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Multiple items </h2>
        <Slider {...settings}> 
        {
            content: 'Trà nóng',
            imageUrl: 'https://bizweb.dktcdn.net/100/415/010/themes/894852/assets/sec_category_1.jpg?1676274744913',
        }
<CategoryItem content={''}/>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </div>
    );
  }
}