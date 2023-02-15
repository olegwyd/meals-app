import React, { createContext, useEffect, useState } from 'react';
import {
  restaurantsRequest,
  restaurantsTransform,
} from './restaurants.service';

export const RestaurantsContext = createContext({
  restaurants: [],
  isLoading: false,
  error: '',
});

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>(null);

  const retrieveRestaurants = () => {
    setIsLoading(true);

    setTimeout(
      () =>
        restaurantsRequest()
          .then(restaurantsTransform)
          .then((data) => {
            setIsLoading(false);
            setRestaurants(data);
          })
          .catch((err) => {
            setIsLoading(false);
            setError(err.message);
          }),
      2000,
    );
  };
  useEffect(() => {
    retrieveRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
