import React from 'react'
import { HashRouter, Route, Switch} from 'react-router-dom'
import Tile from './components/Tile/Tile'
import MyNavBar from './components/MyNavBar/MyNavBar'
import HomeSection from './components/HomeSection/HomeSection'
import AboutSection from './components/AboutSection/AboutSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import createReactClass from 'create-react-class';

class App extends React.Component {
   constructor() {
      super();
      this.state={
         currentOption:"home",
         totalWidth:window.innerWidth
      }
      this.changePath=this.changePath.bind(this);

   }


   render() {
      var self=this;
      console.log("rendering app");

      const contentMargin = {marginTop:'100px',position:'absolute'};
      
      const Home = createReactClass({
        render() {
          return (
            <HomeSection extraStyle={contentMargin} handleChangePath={self.changePath} />
          );
        }
      });


      const About = createReactClass({
        render() {
          return (
            <AboutSection extraStyle={contentMargin} handleChangePath={self.changePath} />
          );
        }
      });

      const Projects = createReactClass({
        render() {
          return (
            <ProjectsSection extraStyle={contentMargin} handleChangePath={self.changePath} />
          );
        }
      });


      return (
         <div ref="allRef">
            <HashRouter>
               <div>
                  <MyNavBar totalWidth={this.state.totalWidth} currentOption={this.state.currentOption} />
                  <Switch>
                     <Route exact path='/' component={Home}/>
                     <Route exact path='/about' component={About}/>
                     <Route exact path='/projects' component={Projects}/>
                  </Switch>
               </div>
            </HashRouter>
         </div>
      );
   }

   changePath(option) {
      if (option!==this.state.currentOption) {
         this.setState(
            {currentOption:option}
         );
         console.log(this.state);
      }
      
   }

   componentDidMount() {
      console.log(this.refs.allRef);
      console.log(this.refs.allRef.offsetWidth);
      console.log(window.innerWidth);
      this.setState({
         totalWidth:window.innerWidth+""
      });
      window.addEventListener("resize", (function() {
    // Get screen size (inner/outerWidth, inner/outerHeight)
         console.log('resizing');
         console.log(window.innerWidth);
         this.setState({totalWidth:window.innerWidth});        

      }).bind(this), false);
   }



}

/*
class App extends React.Component {
   render() {
   		var height="30px";
         var color="black";
   		var toRender=[];
   		var contents1=["MEDIUM","https://medium.com/@_kevinhe"];
   		var contents2=["GITHUB","https://github.com/devilhtc"];
   		var contents3=["GOOGLE MAIN PAGE","http://google.com"];
   		toRender=[contents1,contents2,contents3];

   		var tilized=toRender.map(function(item,index) {
   			return (<Tile key={item[0]} height={height} color={color} content={item[0]} link={item[1]}/>);
   		});
	    return (
	        <div>
	            Hello World!!!wow
	            {tilized}
	        </div>
	    );
   }
}
*/

export default App;
