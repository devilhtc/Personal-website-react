import React from 'react';

import styles from './MyNavBar.css';
import NavOption from './NavOption/NavOption';
import NavHeader from './NavHeader/NavHeader';

class MyNavBar extends React.Component {
	constructor(props) {
		super(props);
		this.recordOffsets=this.recordOffsets.bind(this);
    	this.state = {
      		options: ["home","about","projects","contact"],
      		name: ["David","Haller"],
      		currentOption: this.props.currentOption,
      		upperWindowStyle:{
      			position:'absolute',
      			height:'100px',
      			boxShadow: '0 3px 5px rgba(0,0,0,0.10), 0 1px 3px rgba(0,0,0,0.24)'

      		},
      		upperBarStyle: {
      			width:this.props.totalWidth+'px',
      			position:'relative'
      		},
      		lowerBarStyle: {
      			width:this.props.totalWidth+'px',
      			backgroundColor:'white' 
      		},
      		offsets:{}    		
    	};
	}

	recordOffsets(item,itemOffsets) {
		console.log("reporting offsets from "+item);
		this.state.offsets[item]=itemOffsets;
	}

    render() {
    	console.log("navBar rendering");
    	// constants
    	// might need rest api to get
    	// well, not including the section names
    	console.log(this.props.totalWidth);

    	var options=this.state.options;
    	var name=this.state.name;
    	var currentOption=this.props.currentOption;
    	var recordOffsets=this.recordOffsets;
    	name=name.map(function(item) {
    		return item.toUpperCase();
    	});


    	
    	var optionListUpper=options.map(function(item) {
			return (
				<NavOption currentOption={currentOption} isUpper={true} linkto={item==="home"?'/':'/'+item} text={item} key={item}/>
			);  	
    	});

    	var optionListLower=options.map(function(item) {
			return (
				<NavOption isUpper={false} reportOffsets={recordOffsets} linkto={item==="home"?'/':'/'+item} text={item} key={item}/>
			); 
    	});

	    return (
	    	<div>
		        <div className={styles.navBarAll} style={this.state.lowerBarStyle}>
		        	<div> </div>
		            	<NavHeader isUpper={false} firstName={name[0]} lastName={name[1]} />
		            	{optionListLower}
		            <div> </div>
		        </div>
				<div style={this.state.upperWindowStyle} >
					<div className={styles.hideOverflow}>
				        <div className={styles.navBarAll} style={this.state.upperBarStyle}>
				        	<div> </div>
				        	<div> </div>
				            	{optionListUpper}
				            <div> </div>
				        </div>
			        </div>
		        </div>
	
	        </div>
	    );
    }

    componentDidMount() {

    	var currentOffsets=this.state.offsets[this.props.currentOption];
    	var newUpperWindowStyle={
    		left:currentOffsets[0]+'px',
    		width:currentOffsets[1]+'px',
    	};
    	var newUpperBarStyle={
    		left:'-'+currentOffsets[0]+'px',
    	};
    	this.setState(function(prevState,props) {
    		Object.assign(newUpperWindowStyle,prevState.upperWindowStyle);
    		Object.assign(newUpperBarStyle,prevState.upperBarStyle);
    		return {
    			upperWindowStyle:newUpperWindowStyle,
    			upperBarStyle:newUpperBarStyle
    		};
    	});
    }

    componentDidUpdate(prevProps,prevState) {

    	if (prevProps.currentOption!==this.props.currentOption || prevProps.totalWidth!==this.props.totalWidth) {

	    	var currentOffsets=this.state.offsets[this.props.currentOption];

	    	var newUpperWindowStyle={
	    		left:currentOffsets[0]+'px',
	    		width:currentOffsets[1]+'px',
	    		transition:'left 300ms'
	    	};
	    	var newUpperBarStyle={
	    		left:'-'+currentOffsets[0]+'px',
	    		width:this.props.totalWidth+'px',
	    		transition:'left 300ms'
	    	};

	    	this.setState(function(prevState2,props) {
	    		var oldUpperWindowStyle=JSON.parse(JSON.stringify(prevState2.upperWindowStyle));
	    		delete oldUpperWindowStyle.left;
	    		delete oldUpperWindowStyle.width;	
	    		Object.assign(newUpperWindowStyle,oldUpperWindowStyle);
	    		return {
	    			upperWindowStyle:newUpperWindowStyle,
	    			upperBarStyle:newUpperBarStyle,
	    			currentOption:this.props.currentOption
	    		};
	    	});
    	}
    }

}

export default MyNavBar;
