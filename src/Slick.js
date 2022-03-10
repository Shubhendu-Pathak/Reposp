import React, {Component} from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Slick.css'

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
    return (
      <div>
        <h2>Center Mode</h2>
        <Slider {...settings}>
          <div>
            <div className="item ">
<img class="one" src="https://www.ikea.com/images/customer-service-icon-575f1562b6f2b3816d283d44ce5af5e4.jpg?f=s" alt="" />
<h3>Customer Service</h3>
</div>
          </div>
          <div>
            <div className="item ">
<img class="one" src="https://www.ikea.com/images/customer-service-icon-575f1562b6f2b3816d283d44ce5af5e4.jpg?f=s" alt="" />
<h3>Customer Service</h3>
</div>
          </div>
          <div>
            <div className="item ">
<img class="one" src="https://www.ikea.com/images/customer-service-icon-575f1562b6f2b3816d283d44ce5af5e4.jpg?f=s" alt="" />
<h3>Customer Service</h3>
</div>
          </div>
          <div>
            <div className="item ">
<img class="one" src="https://www.ikea.com/images/customer-service-icon-575f1562b6f2b3816d283d44ce5af5e4.jpg?f=s" alt="" />
<h3>Customer Service</h3>
</div>
          </div>
          <div>
            <div className="item ">
<img class="one" src="https://www.ikea.com/images/customer-service-icon-575f1562b6f2b3816d283d44ce5af5e4.jpg?f=s" alt="" />
<h3>Customer Service</h3>
</div>
          </div>
          <div>
            <div className="item ">
<img class="one" src="https://www.ikea.com/images/customer-service-icon-575f1562b6f2b3816d283d44ce5af5e4.jpg?f=s" alt="" />
<h3>Customer Service</h3>
</div>
          </div>
        </Slider>
      </div>
    );
  }
}