import React from 'react';
import styles from './AboutSection.css';

class AboutSection extends React.Component {

	constructor(props) {
		super(props);
      	
    }

	render() {
		return (
			<div className={styles.sectionBody}>
				About Section
			</div>
		);
	}

	componentDidMount() {
		this.props.handleChangePath("about");
	}

}

export default AboutSection;