import React from 'react';
import styles from './Panel.css';

class Panel extends React.Component {
	constructor(props) {
      super(props);
      console.log(props);
    }

	render() {
		var imgExtraStyle={
			top:'-70px',
		};

		var panelClipStyle={
			backgroundImage:'url("'+this.props.img+'")'
		};
		return (
			<div className={styles.panelClip} style={panelClipStyle}>
				
				<div className={styles.panelMain}>{this.props.mainText} </div>
				<div className={styles.panelSec}> {this.props.secondaryText}</div>
			</div>
		);
	}
}
//
export default Panel;