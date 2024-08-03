import { useEffect, useState } from 'react';
import axios from '../API';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get('/auth/profile');
        setData(response.data);
      } catch (error) {
       console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div>
      {
        data?.map(item=>{
          console.log(item);
        })
      }
    </div>
  );
};

export default useFetch;
