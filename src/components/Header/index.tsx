import "./index.css"
import Starrated from '../Starrated'
import Pages from '../Pages'
import Feature from '../Feature'
const values=[
    {
        id:1,
        image_url:"motionarteffect-img2.png",
        stars:"motionarteffect-img4.png",
        score:"4.5 Score, 9 Reviews",

    },
    {
        id:2,
        image_url:"motionarteffect-img1.png",
        stars:"motionarteffect-img4.png",
        score:"4.5 Score, 9 Reviews",
        
    },
    {
        id:3,
        image_url:"motionarteffect-img3.png",
        stars:"motionarteffect-img4.png",
        score:"4.5 Score, 9 Reviews",
        
    }
]
const pagevalues=[
    {
        id:1,
        heading:"Apply On Section",
        text:"Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.",
        image:"motionarteffect-img11.png",

    },
    {
        id:2,
        heading:"Apply On Page",
        text:"Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.",
        image:"motionarteffect-img10.png",
        
    }
]
const features=[
    {
        id:1,
        image_url:"motionarteffect-img9.png",
        heading:'Light Weight',
        para:"Motion Art for Elementor is designed to be lightweight.",

    },
    {
        id:2,
        image_url:"motionarteffect-img6.png",
        heading:'100% Responsive',
        para:"Create a consistent visual experience across all devices.",

    },
    {
        id:3,
        image_url:"motionarteffect-img7.png",
        heading:'User Friendly Interface',
        para:"Ensure a smooth experience for both applicants and administrators.",

    }

]

function Header(){
    
    return(
        <div className="wholebg">
            <div className="first-row">
            <img src="MotionArtEffect-logo.png"/>
            <button className="purchaseButton">Purchase now</button>
            </div>
            <div className="content">
                <p className="left-content">
                    <span>
                    Transform Your website
                    </span>
                    With Motion art effect
                </p>
                <div className="center-content">
                    <h1 className="centerhead">
                        Attract Your Visitors Attention with Colorful <span>Motion Art Effect</span> 
                    </h1>
                    <p>
                        Unleash the power of creativity with Motion Art for Elementor -your Ultimate Solution for seamlessly integration captivating animations into your website
                    </p>
                </div>
            </div>
            <div>
                <h1 className="headingcenter">
                    Trusted by thousands of users around the worl
                </h1>
                <div className="starrow">
                {values.map((eachvalue)=>(<Starrated id={eachvalue.id} value={eachvalue}/>))}
                </div>
            </div>
            <div className="content2">
                <div>
                    <h1 className="centerhead2">
                    Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
                    </h1>
                    <p>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
                    <a href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891" className="arrowimage">
                   
                    <button className="purchaseButton2">
                    <p className="purchasepara">Purchase from envato</p>  <img className="arrowimage" src="arrow_right_alt_24dp_FILL0_wght400_GRAD0_opsz24 (1).svg" alt="arrow"/>
                   
                    </button>
                    </a> 
                </div>
                <div>
                    <img src="motionarteffect-img5.png" alt="magiccuuuu"/>
                </div>
            </div>
            <div>
                <h1 className="heading">
                Apply On Any Section Or Enable For Whole Page
                </h1>
                <div className="pages">
                    {pagevalues.map(eachvalue=>(<Pages id={eachvalue.id} value={eachvalue} />))}
                </div>
            </div>
            <div className="designcenter">
                <h1 className="heading">
                Supported by All Popular Browsers
                </h1>
                <p className="designpara">
                Rest assured, Motion Art is designed to be compatible with all major web browsers.
                </p>
                <img src="motionarteffect-img8.png" alt="images" className="heading"/>
            </div>
            <div className="plugincenter">
                <h1 className="headingcenter">
                An All-Round Plugin With Powerful Features
                </h1>
                <p className="paracenter">
                Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.
                </p>
            </div>
            <div className="featuresrow">
                {features.map(eachvalue=>(<Feature id={eachvalue.id} value={eachvalue}/>))}
            </div>
        </div>
    )

}
export default Header