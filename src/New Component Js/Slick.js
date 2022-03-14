import React, {Component} from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../New Compo CSS/Slick.css'



export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 5,
      speed: 700,
     
    };
    return (
      <div>
        <h2>Center Mode</h2>
        <Slider {...settings}>
          <div>
            <div className="item ">
<img class="one" src="https://media.istockphoto.com/photos/help-desk-picture-id171206284?s=612x612" alt="" />
<h3>Customer Service</h3>
</div>
          </div>
          <div>
            <div className="item ">
<img class="one" src="https://media.istockphoto.com/photos/help-desk-picture-id171206284?s=612x612" alt="" />
<h3>Customer Service</h3>
</div>
          </div>
          <div>
            <div className="item ">
<img class="one" src="https://media.istockphoto.com/photos/help-desk-picture-id171206284?s=612x612" alt="" />
<h3>Customer Service</h3>
</div>
          </div>
          <div>
            <div className="item ">
<img class="one" src="https://media.istockphoto.com/photos/help-desk-picture-id171206284?s=612x612" alt="" />
<h3>Customer Service</h3>
</div>
          </div>
          <div>
            <div className="item ">
<img class="one" src="https://media.istockphoto.com/photos/help-desk-picture-id171206284?s=612x612" alt="" />
<h3>Customer Service</h3>
</div>
          </div>
          <div>
            <div className="item ">
<img class="one" src="https://media.istockphoto.com/photos/help-desk-picture-id171206284?s=612x612" alt="" />
<h3>Customer Service</h3>
</div>
          </div>
        </Slider>
      </div>
    );
  }
}