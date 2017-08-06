import React from 'react';
import styles from './HomeSection.css';

class HomeSection extends React.Component {

	constructor(props) {
      super(props);
      console.log(props);
    }

	render() {
		
		return (
			<div style={this.props.extraStyle}>
				Home Section
			</div>
		);
	}



}

export default HomeSection;