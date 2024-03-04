import React from "react";
import { Carousel } from "react-bootstrap";
import "./Main.css";
import Banner1 from "./images/Banner-1.jpg";
import Banner2 from "./images/Banner-2.jpg";
import Banner3 from "./images/Banner-3.jpg";
import l1 from "./images/l1.webp";
import l2 from "./images/l2.webp";
import l3 from "./images/l3.webp";
import l4 from "./images/l4.webp";
import l5 from "./images/l5.webp";
import l6 from "./images/l6.webp";
import s1 from "./images/s1.webp";
import s2 from "./images/s2.webp";
import s3 from "./images/s3.webp";
import s4 from "./images/s4.webp";
import s5 from "./images/s5.webp";
import s6 from "./images/s6.webp";
import g1 from "./images/g1.webp";
import g2 from "./images/g2.webp";
import g3 from "./images/g3.webp";
import g4 from "./images/g4.webp";
import g5 from "./images/g5.webp";
import g6 from "./images/g6.webp";
import i1 from "./images/i1.webp";
import i2 from "./images/i2.webp";
import i3 from "./images/i3.webp";
import i4 from "./images/i4.webp";
import i5 from "./images/i5.webp";
import i6 from "./images/i6.webp";
import p1 from "./images/p1.webp";
import p2 from "./images/p2.webp";
import p3 from "./images/p3.webp";
import p4 from "./images/p4.webp";
import p5 from "./images/p5.webp";
import p6 from "./images/p6.webp";
import p7 from "./images/p7.webp";

function Home() {
  return (
    <div className="home-content">
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
          <div className="one">
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
          </div>
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
          <div className="three">
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
          <div className="three" id="Shows">
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
          </div>
          <div className="four">
            <div className="row">
              <h4 className="sub-head">Popular Geners</h4>
              <div className="box-fit">
                <img src={g1} className="box-img" />
                <p className="gen-title">drama</p>
              </div>
              <div className="box-fit">
                <img src={g2} className="box-img" />
                <p className="gen-title">romance</p>
              </div>
              <div className="box-fit">
                <img src={g3} className="box-img" />
                <p className="gen-title">family</p>
              </div>
              <div className="box-fit">
                <img src={g4} className="box-img" />
                <p className="gen-title">reality</p>
              </div>
              <div className="box-fit">
                <img src={g5} className="box-img" />
                <p className="gen-title">comedy</p>
              </div>
              <div className="box-fit">
                <img src={g6} className="box-img" />
                <p className="gen-title">methodalogy</p>
              </div>
            </div>
          </div>
          <div className="four">
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
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
