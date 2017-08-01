import React from 'react';
import styles from './NavHeader.css';

class NavHeader extends React.Component {

	constructor(props) {
      super(props);
    }

	render() {

		return (
			<div className={styles.navHeaderAll}>
				<span className={styles.navHeaderFirstName}>
					{this.props.firstName}
				</span>

				<span className={styles.navHeaderLastName}>
					{this.props.lastName}
				</span>
			</div>
		);
	}

}

export default NavHeader;