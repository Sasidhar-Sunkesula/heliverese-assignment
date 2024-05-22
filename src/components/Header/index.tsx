import "./index.css";
import Starrated from "../Starrated";
import Pages from "../Pages";
import Feature from "../Feature";
import Footer from "../Footer";
import { features, pageValues, values } from "../../utils/constants";
function Header() {
  return (
    <div className="wholebg">
      <div className="first-row">
        <img src="MotionArtEffect-logo.png" />
        <a href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891"><button className="purchaseButton">Purchase Now</button></a>
        
      </div>
      <div className="content">
        <p className="left-content">
          <span className="yourClassName">Transform</span> <br /> <span className="yourClassName">Your Website</span> <br /> With Motion Art
          <br /> Effect
        </p>
        <div className="center-content">
          <h1 className="centerhead">
            Attract Your
            <br /> Visitors Attention
            <br /> with Colorful
            <br />
            <span className="yourClassName">Motion Art Effect</span>
          </h1>
          <p className="content-para">
            Unleash the power of creativity with Motion Art for Elementor -your
            Ultimate Solution for seamlessly integration captivating animations
            into your website
          </p>
        </div>
      </div>
      <div className="trusteddiv">
        <h1 className="headingcenter">
          Trusted by thousands of users around the world
        </h1>
        <div className="starrow">
          {values.map((eachvalue) => (
            <Starrated id={eachvalue.id} value={eachvalue} />
          ))}
        </div>
      </div>
      <div className="content2">
        <div className="centercomb">
          <h1 className="centerhead2">
            Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
          </h1>
          <p className="content2para">
            Motion Art for Elementor is a groundbreaking plugin that empowers
            you to effortlessly infuse your website with visually stunning
            motion art elements.
          </p>
          <a
            href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891"
            className="arrowimage"
          >
            <button className="purchaseButton2">
              <p className="purchasepara">Purchase From Envato</p>{" "}
              <img
                className="arrowimage"
                src="arrow_right_alt_24dp_FILL0_wght400_GRAD0_opsz24 (1).svg"
                alt="arrow"
              />
            </button>
          </a>
        </div>
        <div className="magic-div">
          <img className="magic-img" src="motionarteffect-img5.png" alt="magiccuuuu" />
        </div>
      </div>
      <div>
        <h1 className="applyheading">
          Apply On Any Section Or Enable For Whole Page
        </h1>
        <div className="pages">
          {pageValues.map((eachvalue) => (
            <Pages id={eachvalue.id} value={eachvalue} />
          ))}
        </div>
      </div>
      <div className="designcenter">
        <h1 className="supportheading">Supported by All Popular Browsers</h1>
        <p className="designpara">
          Rest assured, Motion Art is designed to be compatible with all major
          web browsers.
        </p>
        <img
          src="motionarteffect-img8.png"
          alt="images"
          className="supportimage"
        />
      </div>
      <div className="plugincenter">
        <h1 className="pluginheading">
          An All-Round Plugin With <br/>Powerful Features
        </h1>
        <p className="pluginpara">
          Whether you're a seasoned web designer or just starting out, Motion
          Art for Elementor seamlessly integrates with the Elementor platform,
          providing you with a seamless and intuitive experience.
        </p>
      </div>
      <div className="featuresrow">
        {features.map((eachvalue) => (
          <Feature id={eachvalue.id} value={eachvalue} />
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default Header;
