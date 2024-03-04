import React from "react";
import "./Main.css";
import { Carousel } from "react-bootstrap";
import Banner1 from "./images/sp1.jpg";
import Banner2 from "./images/sp2.jpg";
import Banner3 from "./images/sp3.jpg";
import s1 from "./images/s1.webp";
import s2 from "./images/s2.webp";
import s3 from "./images/s3.webp";
import s4 from "./images/s4.webp";
import s5 from "./images/s5.webp";
import s6 from "./images/s6.webp";
import g1 from "./images/cricket.jpg";
import g2 from "./images/kapadi.webp";
import g3 from "./images/motogp.jfif";
import g4 from "./images/formula.jpg";
import g5 from "./images/tennis.jfif";
import g6 from "./images/golf.jfif";

function Sports() {
  return (
    <div className="home-content sports">
      <Carousel>
        <Carousel.Item interval={2000}>
          <div className="banner-fit">
            <img className="banner-img" src={Banner1} alt="First slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div className="banner-fit">
            <img className="banner-img" src={Banner2} alt="First slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div className="banner-fit">
            <img className="banner-img" src={Banner3} alt="First slide" />
          </div>
        </Carousel.Item>
      </Carousel>
      <div className="content my-5" id="Sports">
        <div className="container">
          {/* <div className="one">
            <div className="row">
              <h4 className="sub-head">Latest & Trending</h4>
              <div className="box-fit">
                <img src={l1} className="box-img" />
              </div>
              <div className="box-fit">
                <img src={l2} className="box-img" />
              </div>
              <div className="box-fit">
                <img src={l3} className="box-img" />
              </div>
              <div className="box-fit">
                <img src={l4} className="box-img" />
              </div>
              <div className="box-fit">
                <img src={l5} className="box-img" />
              </div>
              <div className="box-fit">
                <img src={l6} className="box-img" />
              </div>
              <div className="box-fit">
                <img src={l2} className="box-img" />
              </div>
            </div>
          </div> */}
          <div className="two">
            <div className="row">
              <h4 className="sub-head">Sports</h4>
              <div className="box-fit">
                <img src={s1} className="box-img" />
              </div>
              <div className="box-fit">
                <img src={s2} className="box-img" />
              </div>
              <div className="box-fit">
                <img src={s3} className="box-img" />
              </div>
              <div className="box-fit">
                <img src={s4} className="box-img" />
              </div>
              <div className="box-fit">
                <img src={s5} className="box-img" />
              </div>
              <div className="box-fit">
                <img src={s6} className="box-img" />
              </div>
            </div>
          </div>
          {/* <div className="three">
            <div className="row">
              <h4 className="sub-head">Movies</h4>
              <div className="box-fit">
                <img src={l6} className="box-img" />
              </div>
              <div className="box-fit">
                <img src={l3} className="box-img" />
              </div>
              <div className="box-fit">
                <img src={l5} className="box-img" />
              </div>
              <div className="box-fit">
                <img src={l2} className="box-img" />
              </div>
              <div className="box-fit">
                <img src={l1} className="box-img" />
              </div>
              <div className="box-fit">
                <img src={l3} className="box-img" />
              </div>
              <div className="box-fit">
                <img src={l4} className="box-img" />
              </div>
            </div>
          </div>
          <div className="three">
            <div className="row">
              <h4 className="sub-head">Shows</h4>
              <div className="box-fit">
                <img src={p6} className="box-img" />
              </div>
              <div className="box-fit">
                <img src={p7} className="box-img" />
              </div>
              <div className="box-fit">
                <img src={p5} className="box-img" />
              </div>
              <div className="box-fit">
                <img src={p2} className="box-img" />
              </div>
              <div className="box-fit">
                <img src={p1} className="box-img" />
              </div>
              <div className="box-fit">
                <img src={p3} className="box-img" />
              </div>
              <div className="box-fit">
                <img src={p4} className="box-img" />
              </div>
            </div>
          </div> */}
          <div className="four">
            <div className="row">
              <h4 className="sub-head">Popular Categorys</h4>
              <div className="box-fit">
                <img src={g1} className="box-img" />
                <p className="gen-title">cricket</p>
              </div>
              <div className="box-fit">
                <img src={g2} className="box-img" />
                <p className="gen-title">kapadi</p>
              </div>
              <div className="box-fit">
                <img src={g3} className="box-img" />
                <p className="gen-title">motoGP</p>
              </div>
              <div className="box-fit">
                <img src={g4} className="box-img" />
                <p className="gen-title">formula 1</p>
              </div>
              <div className="box-fit">
                <img src={g5} className="box-img" />
                <p className="gen-title">tennis</p>
              </div>
              <div className="box-fit">
                <img src={g6} className="box-img" />
                <p className="gen-title">golf</p>
              </div>
            </div>
          </div>
          {/* <div className="four">
            <div className="row">
              <h4 className="sub-head">Languages</h4>
              <div className="box-fit">
                <img src={i6} className="box-img" />
                <p className="gen-title">தமிழ்</p>
              </div>
              <div className="box-fit">
                <img src={i1} className="box-img" />
                <p className="gen-title">ଓଡ଼ିଆ</p>
              </div>
              <div className="box-fit">
                <img src={i2} className="box-img" />
                <p className="gen-title">हिन्दी</p>
              </div>
              <div className="box-fit">
                <img src={i3} className="box-img" />
                <p className="gen-title">বাংলা</p>
              </div>
              <div className="box-fit">
                <img src={i4} className="box-img" />
                <p className="gen-title">తెలుగు</p>
              </div>
              <div className="box-fit">
                <img src={i5} className="box-img" />
                <p className="gen-title">മലയാളം</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default Sports;
