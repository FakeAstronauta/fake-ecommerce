import { useEffect, useState } from "react"


const useApi = (...imgId) => {
  const url = `https://api.pexels.com/v1/`
  let income = imgId.join('');

  
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  const fetchApi = () => {
    fetch(url + income,
      {
        headers: {
          Authorization: '563492ad6f917000010000017b6f3158f1794ee085b3def899f919dd'
        }
      }).then(raw => raw.json())
      .then((json) => {
        setLoading(false);
        setData(json)
      });
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return { loading, data }
};

export default useApi