
import React from "react";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Bpages.css";
import "./Bpages.css";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import {data} from './data'




const PreviousBtn = (props) => {
  const { className, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "black", fontSize: "30px" }} />
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "black", fontSize: "30px" }} />
    </div>
  );
};

const Bpages = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
      <div style={{ width: "80%" }}>
      <h1 style={{ textAlign: "Center", color: "orange", fontSize: "3vw" }}>
         Food Source </h1>
         <hr></hr>
        <br></br>
     <br></br>


        <Slider
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          slidesToShow={4}
        >
          {data.map(({ title, image, id }) => (
            <div key={id}>
              <Card dishes={image} title={title} id={id}/>
            </div>
          ))}
        </Slider>

      </div>
    </div>
  );
};

const Card = ({ dishes, title}) => {
  return (
    <div  style={{
            textAlign: "center",
              margin: 20,
             padding: "0,10px",
              width: 220,
             boxShadow: "0 1px 6px 0 rgb(32 33 36 /58%)",
          }}>
      <div className="overflow">
        <img src={dishes} className="imgs"
    alt="" style={{ width: "100%", height: "20vh", objectFit: "contain" }}  />
      </div>

      <div >
        <h4>{title}</h4>
        <p style={{ fontSize: "0.7vw", padding: "0.9vw 0", color: " #4CAF50" }}>
          {title}is One of our best-rated breakfasts! Our customers love waking
          up to a piping hot pastry swirled with {title} . 
        </p>

        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default Bpages;
