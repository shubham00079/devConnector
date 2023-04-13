import React, { Fragment } from 'react';

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={`https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921`}
        style={{ width: '200px', margin: 'auto', display: 'block' }}
        alt="Loading..."
      />
    </Fragment>
  );
};

export default Spinner;
