import React from 'react';
import styles from './AboutSection.css';

class AboutSection extends React.Component {

	constructor(props) {
		super(props);
      	
    }

	render() {
		return (
			<div style={this.props.extraStyle}>
				About Section
			</div>
		);
	}



}

export default AboutSection;