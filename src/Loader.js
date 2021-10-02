import React from 'react';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => (
  <div style={{ display: 'flex', justifyContent: 'center', margin: '.5rem' }}>
    <div className='lds-ring'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);
