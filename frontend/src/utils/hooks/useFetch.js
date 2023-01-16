import { useState, useEffect } from "react";
import apiClient from "../apiClient";

const useFetch = (url) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiResponse = await apiClient.get(url);
        const { result } = apiResponse.data;

        setData(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return data;
};

export default useFetch;
