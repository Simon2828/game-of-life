import React from 'react';

const SizeOfGrid = ({handleSubmit, handleChange, size}) => {
return (
  <form onSubmit={handleSubmit}>
    <label>
      Size of Grid:
      <input
        type="number"
        value={size}
        onChange={handleChange}
      />
    </label>
    <input type="submit" value="Submit" />
  </form>)
};

export default SizeOfGrid;
