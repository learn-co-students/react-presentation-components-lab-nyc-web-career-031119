// Code SimplerComponent Here
import React, { Component} from 'react'

const SimplerComponent = (props) => {

  const handleClick = () => {
    console.log('a')
  };
  //
    return (
      <div onClick={props.handleClick}>
        "I am just happy"
      </div>
    );
};

export default SimplerComponent
