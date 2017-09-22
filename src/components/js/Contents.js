import React from 'react';
import {Route} from 'react-router-dom';
import '../css/style-contents.css';
import AboutImage from '../image/about-image.jpg';
import EnzymeSpa from '../image/pimg.jpg';
import Bath from '../image/bathspa-new.jpg';
import Massage from '../image/massage.jpg';
import Facial from '../image/facial.jpg';

class Content extends React.Component{
	render(){
		return(
			<div>			
				<Route exact path="/" component={HomePage} />
				<Route path="/about" component={About} />
			</div>
		)
	};
}

const HomePage = () =>(
	<div className="body-wrap">
		<div className="one_section-wrap">
			<div id="background_video-wrap">
				<iframe id="video" src="https://youtube.com/embed/W2LH54fHkKo?loop=1&&autoplay=0&&controls=0&&showinfo=0&&playlist=W2LH54fHkKo" frameBorder="0"></iframe>
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
					<h3>About ikoi Spa</h3>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
				</div>
				<div className="rblock">
					<img alt="about ikoi" src={AboutImage}></img>
				</div>
		</div>
		<div className="one_section-wrap">
				<div className="lblock">
					<buttom className="buttom_style1">Book now</buttom>
				</div>
				<div className="rblock">
					<h3>The Enzyme Spa</h3>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown unknown Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown</p>
					<buttom>learn more</buttom><br/>
					<img alt="enzyme spa" src={EnzymeSpa}></img>
				</div>
		</div>	
		<div className="one_section-wrap">
				<div className="lblock">
					<buttom className="buttom_style1">Book now</buttom>	
				</div>
				<div className="rblock">
					<h3>Bath Spa</h3>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown unknown Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown</p>
					<buttom>learn more</buttom><br/>
					<img alt="enzyme spa" src={Bath}></img>
				</div>
		</div>
		<div className="one_section-wrap">
				<div className="lblock">
					<h3>Massage</h3>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown unknown Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown</p>
					<buttom>learn more</buttom><br/>
					<img alt="enzyme spa" src={Massage}></img>
				</div>
				<div className="rblock">
					<buttom className="buttom_style1">Book now</buttom>					
				</div>
		</div>
		<div className="one_section-wrap">
				<div className="lblock">
					<h3>Facial</h3>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown unknown Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown</p>
					<buttom>learn more</buttom><br/>
					<img alt="enzyme spa" src={Facial}></img>
				</div>
				<div className="rblock">
					<buttom className="buttom_style1">Book now</buttom>	
				</div>
		</div>
	</div>
)

const About = () =>(
	<div>
		<h1>about success</h1>
	</div>
)

export default Content;
