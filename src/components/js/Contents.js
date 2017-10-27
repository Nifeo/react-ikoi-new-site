import React from 'react';
import {Route} from 'react-router-dom';
import Carousel from './Carousel';
import '../css/style-contents.css';
import '../css/style-footer.css';
import AboutImage from '../image/about-image.jpg';
import EnzymeSpa from '../image/pimg.jpg';
import Bath from '../image/bathspa-new.jpg';
import Massage from '../image/massage.jpg';
import Facial from '../image/facial.jpg';
import Faiclogo from '../image/faiclogo.jpg';
import Addon1 from '../image/addon-2.jpg';
import Addon2 from '../image/add-on-3.jpg';
import Addon3 from '../image/sauna.jpg';
import About_banner from '../image/aboutbanner.jpg';



class Content extends React.Component{
	render(){
		return(
			<div>			
				<Route exact path="/" component={HomePage} />
				<Route path="/about" component={About} />
				<Route path="/treatments" component={Treatments} />
				<Route path="/spcial_offers" component={Spcial} />
				<Route path="/harmony_packages" component={Harmony} />
				<Route path="/gallery" component={Gallery} />
				<Route path="/contact" component={Contact} />
				<Route path="/book_now" component={Booknow} />
			</div>
		)
	};
}
const HomePage = () =>(
	<div className="body-wrap">
		<div className="one_section-wrap">
			<div className="background_video-wrap">
				<iframe className="video" src="https://youtube.com/embed/W2LH54fHkKo?loop=1&&autoplay=0&&controls=0&&showinfo=0&&playlist=W2LH54fHkKo" frameBorder="0"></iframe>
				<div className="vertical_block-div">
					<p>ikoI JAPANESE DAY SPA</p>
				</div>
			</div>
			<div id="description-wrap">
				<div id="description-div">
					<h5>ikoi Enzyme therapy & Japanese day spa</h5>
					<h1>Treat yourself to a<br/>truly unique spa experience Our Treatments</h1>
					<buttom className="buttom_style1">Our Treatments</buttom>
				</div>
			</div>
				{ /* set autoplay to 1 before deploy. */}
		</div>
		<div className="one_section-wrap">
				<div className="lblock">
					<h3>About<br/>ikoi Spa</h3>
					<div className="underline"></div>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
					<buttom className="learn_more-but"><spam className="line_thought">&nbsp; </spam>learn more</buttom><br/>
				</div>
				<div className="rblock">
					<img alt="about ikoi" src={AboutImage}></img>
				</div>
		</div>
		<div className="one_section-wrap">
				<div className="lblock_ot">
					<Carousel width={40} code={1} border_style="rt"/>
					<buttom className="buttom_style1">Book now</buttom>
				</div>
				<div className="rblock_ot">
					<h3>The Enzyme Spa</h3>
					<div className="underline"></div>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown unknown Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown</p>
					<buttom className="learn_more-but">learn more</buttom><br/>
					<img alt="enzyme spa" src={EnzymeSpa}></img>
				</div>
		</div>	
		<div className="one_section-wrap">
				<div className="lblock_ot">
					<Carousel width={40} code={2} border_style="rt" />
					<buttom className="buttom_style1">Book now</buttom>
				</div>
				<div className="rblock_ot">
					<h3>Bath Spa</h3>
					<div className="underline"></div>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown unknown Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown</p>
					<buttom className="learn_more-but">learn more</buttom><br/>
					<img alt="enzyme spa" src={Bath}></img>
				</div>
		</div>
		<div className="one_section-wrap">
				<div className="lblock">
					<h3>Massage</h3>
					<div className="underline"></div>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown unknown Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown</p>
					<buttom className="learn_more-but">learn more</buttom><br/>
					<img alt="enzyme spa" src={Massage}></img>
				</div>
				<div className="rblock">
					<Carousel width={40} code={2} border_style="lt"/>
					<buttom className="buttom_style1">Book now</buttom>					
				</div>
		</div>
		<div className="one_section-wrap">
				<div className="lblock">
					<h3>Facial</h3>
					<div className="underline"></div>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown unknown Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown</p>
					<buttom className="learn_more-but">learn more</buttom><br/>
					<img alt="enzyme spa" src={Facial}></img>
				</div>
				<div className="rblock">
					<Carousel width={40} code={2} border_style="lt"/>
					<div>
					<buttom className="buttom_style1">Book now</buttom>	
					
					</div>
				</div>
		</div>
		<div className="one_section-wrap">
			<div style={{"width":56+"em", "margin":"0 auto"}}>
				<Carousel width={50} code={3} border_style="lt"/><br/>
				<img style={{"float":"left"}} alt="" src={Faiclogo}></img>
				<div>
					<h5>Enzyme Spa & Sothys Seasonal Facia</h5>
					<p>It’s the tranquil Japanese atmosphere and specialised treatments that makes ikoi Spa different from the rest. We work with a wide range of health and beauty traditions and only use the highest quality products.</p>
					<buttom className="view_detail-but">View Details</buttom><br/>
				</div>
			</div>
		</div>
		<div className="one_section-wrap"  style={{"position":"relative","top":"-30em"}}>
			<div className="addon-wrap" style={{"background-image":"url("+Addon1+")"}}>
				<div className="addon-div">
					<div className="addon_description_text">
						<h5>Sauna</h5>
						<a className="button_style2">View Detail</a>
					</div>
				</div>
			</div>
			<div className="addon-wrap"  style={{"background-image":"url("+Addon2+")"}}>
				<div className="addon-div">
					<div className="addon_description_text">
						<h5>Head & Scalp Massage</h5>
						<a className="button_style2">View Detail</a>
					</div>
				</div>
			</div>
			<div className="addon-wrap" style={{"background-image":"url("+Addon3+")"}}>
				<div className="addon-div">
					<div className="addon_description_text">
						<h5>Back Exfoliation</h5>
						<a className="button_style2">View Detail</a>
					</div>
				</div>
			</div>
			<div>
				<h2 className="addon-vertical_text">Add Ons</h2>
			</div>
				<buttom className="view_detail-but_noborder">View Details</buttom>
			</div>
	</div>
)

const About = () =>(
	<div className="body-wrap">
		<div className="one_section-wrap">
			<div className="background_video-wrap">
				<img className="video"src={About_banner}></img>
				<div className="vertical_block-div">
					<p>ikoI JAPANESE DAY SPA</p>
				</div>
			</div>
			<div id="description-wrap">
				<div id="description-div">
					<h1>About us</h1>
					<buttom className="buttom_style1">Our Treatments</buttom>
				</div>
			</div>
		</div>
		<div style={{"margin-bottom":"30em"}} className="one_section-wrap">
		</div>
	</div>
)
const Treatments = () =>(
		<div className="body-wrap">
		<div className="one_section-wrap">
			<div className="background_video-wrap">
				<img className="video"src={About_banner}></img>
				<div className="vertical_block-div">
					<p>ikoI JAPANESE DAY SPA</p>
				</div>
			</div>
			<div id="description-wrap">
				<div id="description-div">
					<h1>About us</h1>
					<buttom className="buttom_style1">Our Treatments</buttom>
				</div>
			</div>
		</div>
		<div style={{"margin-bottom":"30em"}} className="one_section-wrap">
		</div>
	</div>
)
const Spcial = () =>(
	<div className="body-wrap">
		<div className="one_section-wrap">
			<div className="background_video-wrap">
				<img className="video"src={About_banner}></img>
				<div className="vertical_block-div">
					<p>ikoI JAPANESE DAY SPA</p>
				</div>
			</div>
			<div id="description-wrap">
				<div id="description-div">
					<h1>About us</h1>
					<buttom className="buttom_style1">Our Treatments</buttom>
				</div>
			</div>
		</div>
		<div style={{"margin-bottom":"30em"}} className="one_section-wrap">
		</div>
	</div>
)
const Harmony = () =>(
		<div className="body-wrap">
		<div className="one_section-wrap">
			<div className="background_video-wrap">
				<img className="video"src={About_banner}></img>
				<div className="vertical_block-div">
					<p>ikoI JAPANESE DAY SPA</p>
				</div>
			</div>
			<div id="description-wrap">
				<div id="description-div">
					<h1>About us</h1>
					<buttom className="buttom_style1">Our Treatments</buttom>
				</div>
			</div>
		</div>
		<div style={{"margin-bottom":"30em"}} className="one_section-wrap">
		</div>
	</div>
)

const Gallery = () =>(
		<div className="body-wrap">
		<div className="one_section-wrap">
			<div className="background_video-wrap">
				<img className="video"src={About_banner}></img>
				<div className="vertical_block-div">
					<p>ikoI JAPANESE DAY SPA</p>
				</div>
			</div>
			<div id="description-wrap">
				<div id="description-div">
					<h1>About us</h1>
					<buttom className="buttom_style1">Our Treatments</buttom>
				</div>
			</div>
		</div>
		<div style={{"margin-bottom":"30em"}} className="one_section-wrap">
		</div>
	</div>
)

const Contact = () =>(
		<div className="body-wrap">
		<div className="one_section-wrap">
			<h1>somnty</h1>
		</div>
		<div style={{"margin-bottom":"30em"}} className="one_section-wrap">
		</div>
	</div>
)

const Booknow = () =>(
		<div className="body-wrap">
		<div className="one_section-wrap">
			<div className="background_video-wrap">
				<img className="video"src={About_banner}></img>
				<div className="vertical_block-div">
					<p>ikoI JAPANESE DAY SPA</p>
				</div>
			</div>
			<div id="description-wrap">
				<div id="description-div">
					<h1>About us</h1>
					<buttom className="buttom_style1">Our Treatments</buttom>
				</div>
			</div>
		</div>
		<div style={{"margin-bottom":"30em"}} className="one_section-wrap">
		</div>
	</div>
)

export default Content;
