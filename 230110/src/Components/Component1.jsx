import React, { Component } from 'react'
import PropTypes from "prop-types";
import img from '../book.png';

const Component1 = ({writer, price, division}) => {
    return (
      <div className='App'>
            <h1>이번주 베스트 셀러</h1>
            <img src={img}/>
            <p>
            저자 : {writer} <br/> 
            가격 : {price}원  <br/>
            구분 : {division}
            </p>
      </div>
    )
}

Component1.defaultProps = {
    writer : "김유진", 
    price : 13500,
    division : "자기계발서"
};


Component1.propTypes = {
    writer : PropTypes.string,
    price : PropTypes.number.isRequired,
    division : PropTypes.string

};


export default Component1;
