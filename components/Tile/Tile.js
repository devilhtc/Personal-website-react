import React from 'react';
import TodoList from '../todoList/TodoList';
import styles from './Tile.css';

class Tile extends React.Component {
   constructor(props) {
      super(props);
      var height=this.props.height;
      var content=this.props.content;
      var color=this.props.color;
      this.state = { /* initial state */ 
         mourseOver:false,
         upperTileClassName:"",
         // upper tile has is to the left
         upperTileStyle:{
            left:'-100%',
            backgroundColor:color
         },
         upperTileStaticStyle:{
            backgroundColor:color
         },
         tileStyle:{
            height:height,
            fontSize:height,
         },
         tileStaticStyle:{
            height:height,
            fontSize:height,
         }    
      };
      this.slideIn.bind(this);
      this.slideOut.bind(this);
   }

   slideIn() {
      console.log("Sliding in");
      //console.log(this.state.upperTileStyle);
      var newUpperTileStyle={
         left:'0'
      };
      var newStyle={};
      Object.assign(newStyle,newUpperTileStyle,this.state.upperTileStaticStyle);
      this.setState({
         mourseOver:true,
         upperTileClassName:styles.upperTileAnimationIn,
         upperTileStyle:newStyle
      });
   }

   slideOut() {

      console.log("Sliding out");
      //console.log(this.state.upperTileStyle);
      var newUpperTileStyle={
         left:'-100%'
      };
      var newStyle={};
      Object.assign(newStyle,newUpperTileStyle,this.state.upperTileStaticStyle);
      this.setState({
         mourseOver:false,
         upperTileClassName:styles.upperTileAnimationOut,
         upperTileStyle:newStyle
      });
   }

   componentDidMount() {
      console.log("Mounted");
      console.log("Changing tile width");
      console.log(this.refs.tileRef.children[0].children[0].offsetWidth);
      var self=this;

      var newStyle={};
      var newWidthStyle={width:self.refs.tileRef.children[0].children[0].offsetWidth};
      Object.assign(newStyle,newWidthStyle,this.state.tileStaticStyle);
      this.setState(
         {
            tileStyle:newStyle
         }
      );
   }

   render() {
      
      return (
         <div ref="tileRef" style={this.state.tileStyle} className={styles.tileClip}>
            <div className={styles.tileStandard}> <span className={styles.spanStyle} >{this.props.content}</span> </div>
            <div style={this.state.upperTileStyle} className={this.state.upperTileClassName+" "+styles.upperTileMoreStyle+" "+styles.tileStandard}>  </div>
            <a href={this.props.link} className={styles.tileStandard+" "+styles.tilePlaceholder} onMouseEnter={()=>this.slideIn()} onMouseLeave={()=>this.slideOut()}> suprious</a>
         </div>
      );
   }
}

export default Tile;
