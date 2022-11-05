import { useEffect, useState } from "react";

export const useProducts = (count) => {
  const [isLoading, setIsLoading] = useState(false);
  const [slides, setSlides] = useState([]);
  const [loadingError, setLoadingError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // TODO: do not use true/false flags, use State Machine instead https://www.youtube.com/watch?v=XRUFIQgOXJQ
      setIsLoading(false);
      setSlides([]);
      setIsLoading(false);

      try {
        // TODO: URL should be in .env file
        const response = await fetch(
          "https://react-shop-dd1d1-default-rtdb.europe-west1.firebasedatabase.app/products.json"
        );

        if (response.status < 200 || response.status >= 400) {
          throw new Error("Something went wrong");
        }
        let data = await response.json();

        // TODO: syntax sugar - use inline ternary operator
        // data = count ? data.slice(0, count) : data;
        if(count) data = data.slice(0, count);        
        setSlides(data)
        setIsLoading(true);        
      }
      catch(error) {
         console.log(" 😣😣😣 FAILED FETCH DATA: ", error)
      }
    };

    fetchData();
  }, []);

  return [isLoading, loadingError, slides];
};
