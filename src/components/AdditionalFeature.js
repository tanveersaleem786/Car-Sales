import React from 'react';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={props.buyItem}>Add</button>
      {props.feature.name} (+{props.feature.price})
      {/* {item:{name:props.feature.name, price:props.feature.price}} */}
    </li>
  );
};

export default AdditionalFeature;
