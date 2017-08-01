import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavOption.css';

class NavOption extends React.Component {

	constructor(props) {
      super(props);
    }

	render() {
		//console.log(Link);
		//console.log(this.props);

		var colorScheme = this.props.isUpper?{backgroundColor:'black',color:'white'}:{backgroundColor:'white',color:'black'};
		var extraPadding = this.props.isUpper?{paddingBottom:'10px',boxShadow: '0 0px 3px rgba(0,0,0,0.15), 0 2px 5px rgba(0,0,0,0.28)'}:{};
		var totalStyle={};
		Object.assign(totalStyle,colorScheme,extraPadding);
		return (
			<Link to={this.props.linkto}>
				<div ref="optRef" className={styles.navOptionAll} style={totalStyle}>
				
					<div className={this.props.isUpper?styles.navOptionTextUpper:styles.navOptionTextLower}>{this.props.text.toUpperCase()}</div>		
				</div>
			</Link>	
		);
	}

	componentDidMount() {
		console.log("mounted");
		console.log(this.refs.optRef.offsetLeft);
		if (!this.props.isUpper) {
			this.props.reportOffsets(this.props.text,[this.refs.optRef.offsetLeft,this.refs.optRef.offsetWidth]);
		}
	}

	componentDidUpdate() {
		if (!this.props.isUpper) {
			this.props.reportOffsets(this.props.text,[this.refs.optRef.offsetLeft,this.refs.optRef.offsetWidth]);
		}
	}

}

export default NavOption;