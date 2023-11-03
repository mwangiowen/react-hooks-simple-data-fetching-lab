import React, { useState, useEffect } from 'react';

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDogImage = () => {
      setIsLoading(true); // Show "Loading..." message
      // Fetch data from the Dog API
      fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
          setDogImage(data.message);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
          setIsLoading(false);
        });

      // Fetch a new image after 3 seconds
      setTimeout(fetchDogImage, 3000);
    };

    // Initial fetch to start the process
    fetchDogImage();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <img src={dogImage} alt="A Random Dog" />
        </div>
      )}
    </div>
  );
}

export default App;
