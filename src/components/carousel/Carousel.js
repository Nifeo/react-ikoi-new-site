import React from 'react';
import '../css/carousel_style.css';


class Carousel extends React.Component{
	render(){
		return(
			<div>			
				<div class="carousel_viewpoint">
					<div class="carousel-div">
						<img class="mouse-event carousel_move carousel_item carousel_viewpoint" src="./1.png"></img>
						<img class="mouse-event carousel_move carousel_item carousel_viewpoint" src="./1.png"></img>
						<img class="mouse-event carousel_move carousel_item carousel_viewpoint" src="./1.png"></img>
					</div>
				</div>
			</div>
		)
	};
}

var list = document.getElementsByClassName("mouse-event");
for(var x =0; x < list.length; x++){
	list[x].addEventListener("mouseover",function(){
		for(var x =0; x < list.length; x++){
			document.getElementsByClassName("mouse-event")[x].style.animationPlayState="paused";
		}
	});
	
	list[x].addEventListener("mouseleave",function(){
		for(var x =0; x < list.length; x++){
			document.getElementsByClassName("mouse-event")[x].style.animationPlayState="running";
			console.log(1);
		}
	});
}