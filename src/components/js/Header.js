import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../image/logo.png';
import '../css/style-header.css';
class Header extends React.Component{
	render(){
		return (
			<div id="header-wrap">
				<img id="logo" src={logo} alt="logo"></img>
				<ul>
					<li><Link to="/">HOME</Link></li>
					<li><Link to="/about">ABOUT</Link></li>
					<li><Link to="/treatments">TREATMENTS</Link></li>
					<li><Link to="/sprcial_offers">SPECIAL OFFERS</Link></li>
					<li><Link to="/harmony_package">HARMONY PACKAGES</Link></li>
					<li><Link to="/gallery">GALLERY</Link></li>
					<li className="menu-last_item"><Link to="/contacts">CONTACTS</Link></li>
				</ul>
				<div id="book_now-div">
					<p className="middle_line book_now">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
					<spam className="book_now"><Link to="/book_now">BOOK NOW</Link></spam>
					<p className="middle_line book_now">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
				</div>
			</div>
		);
	}
	
}

export default Header;