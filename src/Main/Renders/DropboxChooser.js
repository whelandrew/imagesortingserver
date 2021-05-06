import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Chooser() {	
	const APP_KEY = '61of45kw9796ww9';	
	
	let container = useState(0);	
	useEffect(() => {
		container = document.getElementById('container');
		ChooserLayout();
	});
	
	function ChooserLayout()
	{					
		const options = {
			success: function(files) {
				updateEvent.foundFiles = files;				
				document.dispatchEvent(updateEvent);								
			},
			extensions: ['images'],
			folderselect: true,
			linkType: 'preview',
			multiselect: true
		}
		
		const dbButton = Dropbox.createChooseButton(options);
		document.getElementById("container").appendChild(dbButton)
		
		var updateEvent = document.createEvent("Event");
		updateEvent.initEvent('updateFiles', true, true);
	}
	
  return (
			<Modal.Dialog>
			  <Modal.Header closeButton>
				<Modal.Title>Select A Folder To View</Modal.Title>
			  </Modal.Header>

			  <Modal.Body>
				<div id="container" />					
			  </Modal.Body>
			  
			  <Modal.Footer>
				<Button variant="secondary">Close</Button>
			  </Modal.Footer>
			</Modal.Dialog>
		);
}