//1. Import Area
import React,{ Component } from "react"
import C from "./C";

//2.Defination Area
//Lets define another component
export class B extends Component {
    //1. Properties
  
    //2. Constructor
  
    //3. Methods
    // Every class component must have render method
    render() {
      return(
             <React.Fragment>
        
             <div>kumarsonu {this.props.data3}</div>
             <C data4={this.props.data3}></C>

             </React.Fragment>
      );
    }
  }


//3. Export Area