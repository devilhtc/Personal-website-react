import React from 'react';
import styles from './ProjectsSection.css';

class ProjectsSection extends React.Component {

	constructor(props) {
      super(props);
      console.log(props);
    }

	render() {
		
		return (
			<div style={this.props.extraStyle}>
				Projects Section
			</div>
		);
	}


}

export default ProjectsSection;