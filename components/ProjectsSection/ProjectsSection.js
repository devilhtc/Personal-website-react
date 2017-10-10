import React from 'react';
import styles from './ProjectsSection.css';
import ProjectInstance from './ProjectInstance/ProjectInstance';

class ProjectsSection extends React.Component {

	constructor(props) {
      super(props);
    }

	render() {
		// get projects here?

/*
			{
				title:,
				description:,
				links:{
					github:,
					youtube:,
					report:
				}
			}
*/
		var myProjects=[
			{
				title:"Web Application Project: Photo-sharing App",
				description:"Built a photo-sharing app with full features in front and back end using MEAN stack (MongoDB,Express.js, AngularJS, Node.js).",
				links:{
					github:"https://github.com/devilhtc/photo_sharing_app",
					youtube:"https://www.youtube.com/watch?v=6Krs5vRgmSs",
					report:""
				}
			},
			{
				title:"Computer Vision Project: Fast Mixed Style Transfer",
				description:"Designed and implemented fast mixed style transfer and arbitrary style transfer using a ResNet-based feed-forward network and VGG-16 loss network in python and Tensorflow.",
				links:{
					github:"",
					youtube:"",
					report:"http://cs231n.stanford.edu/reports/2017/pdfs/405.pdf"
				}
			}
		];

		var mappedProjects=myProjects.map(function(proj) {
			return (
				<ProjectInstance key={proj.title} project={proj}/>
			);
		});



		return (
			<div style={this.props.extraStyle}>
				{mappedProjects}
			</div>
		);
	}


}

export default ProjectsSection;