import React from 'react';
import styles from './ProjectInstance.css';
import Tile from './Tile/Tile';

class ProjectsInstance extends React.Component {

	constructor(props) {
      super(props);
      console.log(props);
    }

	render() {
		var height="20px";
		var color="black";


		var links=this.props.project.links;
		var linkTypes=["github","youtube","report"];
		var linkTiles=linkTypes.map(function(t) {
			if (links[t]!=="") {
				return (<Tile key={t} height={height} color={color} content={t.toUpperCase()} link={links[t]} />);
			} else {
				return (<div></div>);
			}
		});

		return (
			<div className={styles.projectInstance}>
				<div className={styles.projectTitle}>{this.props.project.title} </div>

				<div className={styles.projectDescription}>{this.props.project.description} </div>
				<div className={styles.projectLinks}>
					{linkTiles}
				</div>
			</div> 
		);
	}


}

export default ProjectsInstance;