import React from 'react';
import ReactDOM from 'react-dom';
import ImageHandler from './imageHandler.jsx';
import Chooser from './renders/DropboxChooser.js';
import './main.css';

class ImageSorterMain extends React.Component
{	
	constructor(props)
	{
		super(props);	
		
		this.GetFiles = this.GetFiles.bind(this);
		
		this.state =
		{
			yesFolder:"./Resources/yesFolder.png",
			noFolder:"./Resources/noFolder.jpg",
			loggedIn:false,
			currImage:-1,
			allFiles:{}
		}
	}	
	
	componentDidMount()
	{		
		fetch('/', 
		{
			method: "GET",			
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
		//.then(response => response.text())
		.then(result => {
			console.log("Login Accepted");
			this.setState({loggedIn: true});
		})
		.catch((error) => 
		{
			console.error('Error:', error);
		});		
	}
	
	componentDidUpdate()
	{
		//console.log("Update");
	}
	
	GetFiles(files){
		this.UpdateFiles(files);		
		document.getElementById('modal').style.display='none';
	}
	
	UpdateFiles(files)
	{		
		console.log('UpdateFiles');
		this.setState({allFiles: files.foundFiles});
		this.setState({currImage: 0});
		//console.log(this.state);
	}
	
	DisplayImage()
	{
		console.log("DisplayImage");
		if(this.state.currImage >= 0)
			return <ImageHandler {...this.state}/>
		else
			return <div/>
	}
	
	DisplayImageInfo()
	{						
		if(!this.state.loggedIn) return;
		/*
		if(this.state.currImage >=0)
		{
			const img = this.state.allFiles[this.state.currImage];				
			
			return (
					<div> 
						<p> Name : {img.name} </p>
					</div>
					)
		}
		else
		{
			return (
				<div>
					<p> No Images Loading </p>
					<button onClick={()=>this.RunFolderSelection()}> Refresh </button>
				</div>
			)
		}
		*/
		
		return (
				<div>
					<p> No Images Loading </p>
					<button onClick={()=>this.RunFolderSelection()}> Refresh </button>
				</div>
			)
	}
	
	RunFolderSelection()
	{
		let popUp = document.getElementById('modal');
		popUp.style.display = "block"
		ReactDOM.render(<Chooser />, document.getElementById('modal'));
	}	
	
	DisplayLogin()
	{
		return this.state.loggedIn ? 
			<div>
				<h3>Logged In</h3> 
				<button>Log Out</button>
			</div>			
			: 
			<div>
				<h3>Not Logged In</h3> 
				<button>Log In</button>
			</div>
	}

  render() 
  {
	  document.addEventListener('updateFiles',this.GetFiles);
	  return(<div>			
				<div id="main">					
					<div id="modal"></div>	
					<p>main.jsx</p>
					<div id="leftSide">						
						<p> Previous Images </p>
					</div>
					<div id="imageFrame">
						{this.DisplayImage()}
					</div>
					<div id="rightSide">	
						<ul>
							<li> Login Info
								{this.DisplayLogin()}
							</li>
							<li>
								{this.DisplayImageInfo()}
							</li>
							<li>
								<p> Keep These </p>	
								<img src={this.state.yesFolder}/>
							</li>
							<li>
								<p> Remove These </p>
								<img src={this.state.noFolder}/>								
							</li>
							<li>
								<button id="purgeButton">Purge Delete Folder</button>
							</li>
						</ul>
					</div>
				</div>
		</div>);
  }
}

export default ImageSorterMain;