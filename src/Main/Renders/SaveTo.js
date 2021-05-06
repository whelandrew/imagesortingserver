import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function SaveTo()
{
	return (
			<Modal.Dialog>
			  <Modal.Header closeButton>
				<Modal.Title>Select A Folder To View</Modal.Title>
			  </Modal.Header>

			  <Modal.Body>
				<p>Buncha Folders</p>
			  </Modal.Body>

			  <Modal.Footer>
				<Button variant="secondary">Close</Button>
				<Button variant="primary">Save changes</Button>
			  </Modal.Footer>
			</Modal.Dialog>
		);
}


/*
export default class SaveTo extends React.Component {
	render() {
		return (
			<Modal.Dialog>
			  <Modal.Header closeButton>
				<Modal.Title>Modal title</Modal.Title>
			  </Modal.Header>

			  <Modal.Body>
				<p>Modal body text goes here.</p>
			  </Modal.Body>

			  <Modal.Footer>
				<Button variant="secondary">Close</Button>
				<Button variant="primary">Save changes</Button>
			  </Modal.Footer>
			</Modal.Dialog>
		);
	}
};
*/