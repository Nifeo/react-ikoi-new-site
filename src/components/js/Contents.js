import React from 'react';


class Content extends React.Component{
	render(){
		return(
			<div>
				<h1>default content</h1>
			</div>
		)
	};
}

const HomePage = () =>(
	<div>
		<h1>routing success</h1>
	</div>
)

const About = () =>(
	<div>
		<h1>about success</h1>
	</div>
)

export default Content;