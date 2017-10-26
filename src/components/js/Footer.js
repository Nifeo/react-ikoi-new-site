import React from 'react';
import ReactDOM from 'react-dom';
import Footer_logo from '../image/footerlogo.jpg'

export default class Footer extends React.Component{
	render(){
		return (
			<div className="footer-wrap">
				<div className="footer-map">
 					<div className="footer_description-div" >
						<h2>Give yourself a moment<br/>of relaxation.<spam style={{'color':'#000'}}> Any Question?</spam></h2>
						<buttom className="buttom_style3">Book now</buttom>	<buttom className="buttom_style3">Contact us</buttom>
					</div>	
					<iframe frameborder={0} className="map-iframe" src={"https://www.google.com/maps/embed/v1/search?q=ikloispa&key=AIzaSyBP8O5EOI9lThVWAsJ51i5M8AUOdc3IBxM"} allowfullscreen></iframe>
				</div>
				<div style={{"padding":"2em"}}>	
						<img style={{"float":"left"}} src={Footer_logo}></img>
						<table>
							<tr>
								<td style={{"padding-right":"1em"}}>
									<ul>
									<li><h5>Home</h5></li><br/>
									<li><h5>About</h5></li><br/>
									<li><h5>Special Offers</h5></li><br/>
									<li><h5>Gallery</h5></li><br/>
									</ul>
								</td>
								<td className="right_list">
									<ul>
										<li><h5>Treatments</h5></li><br/>
									<li className="right_list-li">Enzyme Spa</li><br/>
									<li className="right_list-li">Bath Spa</li><br/>
									<li className="right_list-li">Massage</li><br/>
									<li className="right_list-li">Facial</li><br/>
									<li className="right_list-li">Harmony Package</li><br/>
									<li className="right_list-li">Add-Ons</li><br/>
									</ul>
								</td>
							</tr>
						</table>
				</div>	
			</div>
		)
	}
}