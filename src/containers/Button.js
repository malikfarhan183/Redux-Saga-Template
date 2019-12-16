// import React from 'react';
// import { connect } from 'react-redux';
// import { getNews } from '../actions';
// let Button=({getNews})=>(
//    <button onClick={getNews}>Press to see news</button>
// )
// const mapDispatchToProps = {
//      getNews: getNews,
// };
// Button = connect(null,mapDispatchToProps)(Button);
// export default Button;
import React, { Component } from "react";
// import { StyleSheet, Text, View, TextInput , Button , TouchableWithoutFeedback} from "react-native";
import { connect } from 'react-redux';
// import ListItem from "./src/Components/ListItems/ListItem";
// import PlaceList from "../../Components/PlaceLists/PlaceList";
// import PlaceDetailModal from "../../Components/PlaceDetailModal/PlaceDetailModal";
// import placeImage from "../../assets/city.jpg"
import { getNews} from '../actions';
import {registerUser} from "../actions/wpActions"
  var data=''
 class Button extends Component {

  state = {
    placeName: ""
  };
  onClickButton= e => {
    console.log("button Clicked" , this.props);
    this.props.ongetNews();
  }
  onClickRegisterUser =e=> {
    console.log("onClickRegisterUser" , );


   data = {
  	"name" : "Sheeraz Anwar",
  	"email" : "sheeraz.anwar@outlook.com",
  	"mobile" : "+923340444055",
  	"country" : "Pakistan",
  	"campName" : "sofittech",
  	"numberOfEmployees" : 50,
  	"password" : "123456"
  }
    this.props.onRegisterUser(data);
  }
  render() {
    console.log("Button Component" , this.props);
    return (
          <div>
             <button onClick={this.onClickButton}>Press to see news</button>
             <button onClick={this.onClickRegisterUser}>Register User</button>

           </div>
    );
  }
}
// const mapStateToProps = state => {
//   console.log("STATE >>>>>>>>>>>>>>>>>>>>>>>>>>>>" , state.places.places); // IN {state.places.places} places is a reducer and the last places is the variable in stores's State
//   return{
//     places : state.places.places,
//     selectedPlace : state.places.selectedPlace
//   };
// };
const mapDispatchToProps = dispatch =>{
  return{
      ongetNews:() => dispatch(getNews()),
      onRegisterUser:() => dispatch(registerUser(data)),
  };
};
const mapStateToProps = state => {
  console.log("STATE >>>>>>>>>>>>>>>>>>>>>>>>>>>>" , state.test); // IN {state.places.places} places is a reducer and the last places is the variable in stores's State
  return{
     test:state.test
  };
};

export default connect(mapStateToProps, mapDispatchToProps )(Button);
