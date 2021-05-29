import React from 'react';
import '../loader.css';

export default function Loader(props){
  return (
    <div className={`lds-ring ${props.visibility}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
  );
}