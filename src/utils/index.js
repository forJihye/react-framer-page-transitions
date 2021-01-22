import axios from 'axios';
import {useState, useEffect} from 'react';

export const useAsync = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async() => {
      try{
        const {data} = await axios.get(url);
        setData(data);
        setLoading(false);        
      }catch(error){
        console.error(error);
        setLoading(true);
      }
    })();
  }, []);

  return [data, loading]
}

