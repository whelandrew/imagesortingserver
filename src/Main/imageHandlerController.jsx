import React from 'react';
import './imageHandlerController.css';

class ImageHandlerController extends React.Component 
{	
	constructor(props)
	{
		super(props);
		
		this.state = 
		{
			thumbsUp : "./Resources/thumbsUp.png",
			thumbsDown : "./Resources/thumbsDown.png",
			dontKnow : "./Resources/dontknow.png"
		}
	}

  render() 
  {
	  return(<div>				
				<div id="controller">
					<button id="yesButton"><img src={this.state.thumbsUp}/></button>
					<button id="skipButton"><img src={this.state.dontKnow}/></button>
					<button is="noButton"><img src={this.state.thumbsDown}/></button>
				</div>
		</div>);
  }
}

export default ImageHandlerController;