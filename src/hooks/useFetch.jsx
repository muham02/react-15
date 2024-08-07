import { useEffect, useState } from 'react';
import axios from '../API';
const useFetch = (ENDPOINT) => {
  const [data,setData] = useState(null)

  useEffect(() => {
    const loadData = async () => {

      try {
        const response = await axios(ENDPOINT);
        setData(response.data?.payload);
      } catch (error) {
       console.log(error);
      } finally {
      }
    };

    loadData();
  }, [ENDPOINT]);

  return [data]
};

export default useFetch;
