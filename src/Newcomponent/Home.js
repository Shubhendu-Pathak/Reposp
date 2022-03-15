import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import i1 from "../image-main.jpeg";
import i2 from "../logo.jpeg";
import "../Newcss/Home.css";


export default class Home extends Component {
    render(){
        return(
        	<div>
        	<div className="sticky">
                <div class="nav-logo">
                    <Link class="nav-link" to="/">
                    </Link>

                </div>
            </div>
                	<img src={i2} width="100%" class="img-responsive" alt="" />

                	<footer class="page-footer font-small mdb-color pt-4">
   
  <div class="col-md-5 col-lg-4 ml-lg-0">
        <div class="container text-center text-md-center">
          <ul class="list-unstyled list-inline">
            <li class="list-inline-item">
              <p>
          <i class="fab fa-2x fa-facebook-f mr-3"></i><a href="https://m.facebook.com/chippiparai.dogs">Facebook</a></p>
            </li>
            <li class="list-inline-item">
              <p>
          <i class="fab  fa-2x fa-instagram mr-3"></i><a href="https://www.instagram.com/chippiparai/">Instagram</a></p>
        
            </li>
            <li class="list-inline-item">
             <p>
          <i class="fab fa-2x fa-youtube mr-3"></i><a href="https://m.youtube.com/c/Chippiparai">Youtube</a></p>
        
            </li>
            <li class="list-inline-item">
              <p>
          <i class="fab fa-2x fa-telegram mr-3"></i> <a href="http://t.me/chippiparai">Telegram</a></p>

            </li>
            <li class="list-inline-item">
              <p >
          <i class="fa fa-2x fa-phone mr-3 "></i>7711077737 (or) 7711077767</p>

            </li>
          </ul>
        </div>
      </div>

</footer>
            </div>
            )
        }
    }
