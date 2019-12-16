import React from 'react';
import Button from './containers/Button';
import NewsItem from './containers/NewsItem'
import Loading from './containers/Loading'
import { connect } from 'react-redux';

let App = () => (
  <div>
     <Button />
     <Loading />
     <NewsItem />
  </div>
);
const mapStateToProps = state => {
  console.log("MAP STATE TO PROPS in HOME PAGE" , state); // IN {state.places.places} places is a reducer and the last places is the variable in stores's State
  return{
    // places : state.places.places,
    // selectedPlace : state.places.selectedPlace
  };
};
export default connect(mapStateToProps, null)(App);
