import React from 'react';
import styles from './ContactSection.css';

class ContactSection extends React.Component {

	constructor(props) {
      super(props);
      
    }

	render() {
		return (
			<div style={this.props.extraStyle}>
				Contact Section
			</div>
		);
	}

}

export default ContactSection;