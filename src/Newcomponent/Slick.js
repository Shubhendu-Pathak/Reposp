import React, {Component} from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../Newcss/Slick.css'



export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 3,
      speed: 700,
     arrows:true
     
    };
    return (
      <div>
        <h2>Center Mode</h2>
        <Slider {...settings}>
          <div>
            <div className="item ">
<img class="one" src="https://media.istockphoto.com/photos/colorful-background-of-pastel-powder-explosionrainbow-color-dust-on-picture-id1180542165?k=20&m=1180542165&s=612x612&w=0&h=43hlhk8qdGYP4V-u3AAxD3kPDRIzHjMNWpr-VdBQ2Js=" alt="" />
<h3>Customer Service</h3>
</div>
          </div>
          <div>
            <div className="item ">
<img class="one" src="https://media.istockphoto.com/photos/colorful-background-of-pastel-powder-explosionrainbow-color-dust-on-picture-id1180542165?k=20&m=1180542165&s=612x612&w=0&h=43hlhk8qdGYP4V-u3AAxD3kPDRIzHjMNWpr-VdBQ2Js=" alt="" />
<h3>Customer Service</h3>
</div>
          </div>
          <div>
            <div className="item ">
<img class="one" src="https://media.istockphoto.com/photos/colorful-background-of-pastel-powder-explosionrainbow-color-dust-on-picture-id1180542165?k=20&m=1180542165&s=612x612&w=0&h=43hlhk8qdGYP4V-u3AAxD3kPDRIzHjMNWpr-VdBQ2Js=" alt="" />
<h3>Customer Service</h3>
</div>
          </div>
          <div>
            <div className="item ">
<img class="one" src="https://media.istockphoto.com/photos/colorful-background-of-pastel-powder-explosionrainbow-color-dust-on-picture-id1180542165?k=20&m=1180542165&s=612x612&w=0&h=43hlhk8qdGYP4V-u3AAxD3kPDRIzHjMNWpr-VdBQ2Js=" alt="" />
<h3>Customer Service</h3>
</div>
          </div>
          <div>
            <div className="item ">
<img class="one" src="https://media.istockphoto.com/photos/colorful-background-of-pastel-powder-explosionrainbow-color-dust-on-picture-id1180542165?k=20&m=1180542165&s=612x612&w=0&h=43hlhk8qdGYP4V-u3AAxD3kPDRIzHjMNWpr-VdBQ2Js=" alt="" />
<h3>Customer Service</h3>
</div>
          </div>
          <div>
            <div className="item ">
<img class="one" src="https://media.istockphoto.com/photos/colorful-background-of-pastel-powder-explosionrainbow-color-dust-on-picture-id1180542165?k=20&m=1180542165&s=612x612&w=0&h=43hlhk8qdGYP4V-u3AAxD3kPDRIzHjMNWpr-VdBQ2Js=" alt="" />
<h3>Customer Service</h3>
</div>
          </div>
        </Slider>
      </div>
    );
  }
}