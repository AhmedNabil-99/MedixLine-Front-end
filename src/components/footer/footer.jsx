import "./footer.css";
import Logo from "../../assets/icons/logo.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from 'axios';


const Footer = () => {
  const [specializations, setspecializations] = useState([])

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/doctor/specializations/")
        .then(response => {
          setspecializations(response.data)
          })
          .catch(error => {
            console.error(error);
            });
      }, []);

  return (
    <div className="footer mt-5">
      <div className="container footer-container">
        <div className="row footer-row">
          <div className="col footer-col">
            <img src={Logo} alt="" className="logo footerLogo" />
            <p className="footerDescription">
              Great doctor if you need your family member to get effective
              immediate assistance, emergency treatment or a simple consultation.
            </p>
            <div className="media d-flex " style={{ gap: '20px' }}>
              <a href="#">
                <i className="fab fa-facebook" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="https://www.youtube.com/@MedixTeamTV">
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
          <div className="col footer-col footerLinks">
            <h3>MedixLine</h3>
            <div className="links ">
              <a href="#categoryHomeId">About us</a>
              <Link to="/signin">Login</Link>       
            </div>
          </div>
          <div className="col footer-col departmentFooter">
            <h3>Departments</h3>
            <div className="links ">
              {
            specializations.map(specialization => (
                <a href="#" key={specialization.id} >
                    {specialization.title}
      
                </a>
            ))
          }
            </div>
          </div>
          <div className="col footer-col contactFooter">
            <h3>Contact</h3>
            <a href="https://www.google.com/maps/place/District+8,+First+Al+Sheikh+Zayed,
            +Giza+Governorate+3245102/@30.0327178,30.9659365,17z/data=!3m1!4b1!4m6!3m5!1s0
            x145859e8e187bb21:0x368f38eafbe0588d!8m2!3d30.0327132!4d30.9685114!16s%2Fg%2F11
            c66537d4?entry=ttu&g_ep=EgoyMDI0MDkyNC4wIKXMDSoASAFQAw%3D%3D">

            <div className="contact-details">
              <i className="fa fa-location" />
              <p>View on Google map</p>
            </div>
            </a>
            <br />
            <div className="contact-details">
              <i className="fa fa-phone" />
              <p>+02 0100-466-9666</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
