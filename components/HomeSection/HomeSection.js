import React from 'react';
import styles from './HomeSection.css';
import Panel from './../Panel/Panel';

class HomeSection extends React.Component {

	constructor(props) {
      super(props);

    }

	render() {
		var imgSrc="./img/wolf.png";
		var mainText="This is the highlighted text";
		var secondaryText="More explanatory text to bring flavor to the design";
		return (
			<div style={this.props.extraStyle}>
				<Panel img={imgSrc} mainText={mainText} secondaryText={secondaryText} />
			</div>
		);
	}



}

export default HomeSection;