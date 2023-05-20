import React, { useState } from 'react';

const MoonPhaseImage = () => {
  const [data, setData] = useState({
    style: {
      moonStyle: 'default',
      backgroundStyle: 'stars',
      backgroundColor: '#000000',
      headingColor: '#ffffff',
      textColor: '#ffffff'
    },
    observer: {
      latitude: '',
      longitude: '',
      date: ''
    },
    view: {
      type: 'portrait-simple',
      parameters: {}
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      observer: {
        ...prevState.observer,
        [name]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the data to the API and generate the image
    console.log(data);
  };

  return (
    <div>
      <h2>Generate Moon Phase Image</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="latitude">Latitude:</label>
        <input
          type="number"
          id="latitude"
          name="latitude"
          value={data.observer.latitude}
          onChange={handleChange}
          required
        />

        <label htmlFor="longitude">Longitude:</label>
        <input
          type="number"
          id="longitude"
          name="longitude"
          value={data.observer.longitude}
          onChange={handleChange}
          required
        />

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={data.observer.date}
          onChange={handleChange}
          required
        />

        <button type="submit">Generate Image</button>
      </form>
    </div>
  );
};

export default MoonPhaseImage;



