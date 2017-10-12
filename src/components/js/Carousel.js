import React from 'react';
import '../css/style-carousel.css';
import Pool from '../image/pslider1.jpg';

export default class Carousel extends React.Component{
	onMouseOver(){
		let list = document.getElementsByClassName("mouse-event");
		for(let x =0; x < list.length; x++){
			document.getElementsByClassName("mouse-event")[x].style.animationPlayState="paused";
		}
	}
	
	onMouseLeave(){
		let list = document.getElementsByClassName("mouse-event");
		for(let x =0; x < list.length; x++){
			document.getElementsByClassName("mouse-event")[x].style.animationPlayState="running";
		}
	}
	
	render(){
		let item_width = this.props.width;
		let viewpoint_width = item_width;
		let carousel_width_div = viewpoint_width * 3 + 10;
		let movement = viewpoint_width;
		let id = this.props.code;
		let border_style = this.props.borderStyle;
		let keyFrame =`
			@keyframes carous_move-animation${id}{
			0% {left:${0}px}
			50% {left:${-movement*16}px}
			100% {left:${-2*(movement*16)}px}
			@-weblit-keyframes carous_move-animation{
			50% {left:${-movement*16}px}
			100% {left:${-2*(movement*16)}px}
		}`;

		
		let styleSheet = document.styleSheets[0];
		styleSheet.insertRule(keyFrame, styleSheet.cssRules.length);
		
		let style={
			width:this.props.width+'em',
			animationName:'carous_move-animation'+id,
			animationDuration:'2s',
			animationIterationCount:'infinite'
		};
		
		let border = 'carousel_border_'+this.props.border_style;
		let viewPoint = "carousel_viewpoint clearPosition_"+this.props.border_style;
		return(
			<div className="carousel_wrapper">			
				<div className ={border} style={{width:viewpoint_width+'em'}}>
				<div className = {viewPoint} style={{width:viewpoint_width+'em'}}>
					<div onMouseOverCapture = {this.onMouseOver} onMouseLeave={this.onMouseLeave}  className="carousel-div" style={{width:carousel_width_div+'em'}}>
						<img className="mouse-event carousel_item carousel_viewpoint" style={style} src={Pool}></img>
						<img className="mouse-event carousel_item carousel_viewpoint" style={style} src={Pool}></img>
						<img className="mouse-event carousel_item carousel_viewpoint" style={style} src={Pool}></img>
					</div>
				</div>
				</div>
			</div>
		)
	};
}