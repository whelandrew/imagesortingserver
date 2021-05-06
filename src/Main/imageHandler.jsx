import React from 'react';
import ImageHandlerController from './imageHandlerController';
import './imageHandler.css';
import {Image} from './Image.js';

class ImageHandler extends React.Component 
{	
	constructor(props)
	{
		super(props);				
		
		this.state = 
		{			
			currImage : new Image(""),			
			allImages:[],
			imageVal:-1
		}
	}	
	
	componentDidMount()
	{
		console.log('ImageHandler');
		
		if(this.props.currImage >=0)
		{
			let image = this.props.allFiles[this.props.currImage];
			
			let newLink = image.link;				
			this.setState({imageLink: newLink});
			
			newLink = newLink.replace('=0','');
			//this.setState({thumbnail: newLink});
			
			//this.setState({currImg: image});
			
			this.GetMetaData(image);
		}
	}
	
	PropCurrImage(activeImg)
	{		
		console.log('PropCurrImage');
		if(!activeImg.isReady)
		{
			fetch('http://localhost:3000/ListSharedLinks', 
			{
				method: "POST",	
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				'Accept': 'application/json',	
				body: JSON.stringify({id:activeImg.id})
			})
			.then(response => response.text())
			.then(data => {	
				activeImg.PropMetaData(JSON.parse(data));
				console.log(activeImg);
				this.setState({currImage:activeImg});				
			})
			.catch((error) => 
			{
				console.error('Error:', error);
			});	
		}
		else
		{
			this.setState({currImage:activeImg});
		}
	}
	
	GetImages(folder)
	{
		console.log(folder);		
		for(let i=folder.length;i>=0;i--)
		{
			if(folder[i] != '/')
			{
				folder = folder.substring(0,i);
			}			
			else
			{
				break;
			}
		}		
				
		fetch('http://localhost:3000/ListFolder', 
		{
			method: "POST",	
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			'Accept': 'application/json',	
			body: JSON.stringify({'folderLoc':folder})
		})
		.then(response => response.text())
		.then(data => {
			const images = JSON.parse(data);
			console.log(images)
			let arr=[];
			images.forEach(i=>arr.push(new Image(i)));
			this.setState({allImages:arr});
			this.setState({imageVal:0});
			this.PropCurrImage(arr[0]);
		})
		.catch((error) => 
		{
			console.error('Error:', error);
		});	
	}
	
	GetMetaData(image)
	{
		console.log('GetMetaData');		
		fetch('http://localhost:3000/GetMetaData', 
		{
			method: "POST",	
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			'Accept': 'application/json',	
			body:JSON.stringify({'id':image.id})
		})
		.then(response => response.text())
		.then(data => this.GetImages(data))
		.catch((error) => 
		{
			console.error('Error:', error);
		});	
	}

  render() 
  {
	  return(<div>
			<div id="imageHandler">	
				<img src={this.state.currImage.fullLink} alt="An Image"/>
				<ImageHandlerController />
			</div>
		</div>);
  }
}

export default ImageHandler;